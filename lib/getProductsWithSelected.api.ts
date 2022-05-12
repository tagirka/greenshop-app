import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import {
  SaleModelStrict,
  ViewProductModel,
} from "../interfaces/product.interface";
import { api } from "./api/point.api";
import { getRequest } from "./getRequest";

export const getProductsWithSelected = async (
  selected: (string | null)[],
  _page = "1",
  _limit = process.env.NEXT_PUBLIC_ITEMS_ON_PAGE || "9"
) => {
  const request = getRequest(api.paths.getProducts, selected, _page, _limit);

  const { data: products, status } = await axios.get<ViewProductModel[]>(
    request.url,
    request.config
  );

  if (status != 200) {
    throw Error;
  }

  return await getViewProducts(products);
};

export const getViewProducts = async (
  products: ViewProductModel[]
): Promise<ViewProductModel[]> => {
  return await Promise.all(setResponsesGetSaleProducts(products))
    .then((res) => {
      return res
        .filter((r) => r.status === 200)
        .filter((r) => r.data.length)
        .map((r) => r.data[0]);
    })
    .then((saleProducts) => {
      if (!saleProducts || !saleProducts.length)
        return noSalesProducts(products);

      return setViewProducts(products, saleProducts);
    })
    .catch((err) => {
      console.log(err);
      return noSalesProducts(products);
    });
};

export const noSalesProducts = (products: ViewProductModel[]) =>
  products.map((p) => ({ ...p, sale: false }));

const setResponsesGetSaleProducts = (
  products: ViewProductModel[]
): Promise<AxiosResponse<SaleModelStrict[]>>[] => {
  return products.map((p) => {
    return axios.get<SaleModelStrict[]>(
      `${api.paths.getSaleProducts}?product._id=${p._id}`
    );
  });
};

const setViewProducts = (
  products: ViewProductModel[],
  saleProducts: (SaleModelStrict | undefined)[]
) => {
  return products
    .map((p) => {
      const sale = saleProducts.find((s) => s?.productID === p._id);

      if (!sale) {
        return { ...p, costOnSale: null, costOnSalePercent: null, sale: false };
      }

      const costOnSale = !sale.costOnSalePercent
        ? sale.costOnSale
        : Math.ceil(p.cost * (1 - sale.costOnSalePercent * 0.01));
      const costOnSalePercent = sale.costOnSalePercent
        ? sale.costOnSalePercent
        : Math.ceil((1 - sale.costOnSale / p.cost) * 100);

      return {
        ...p,
        costOnSale,
        costOnSalePercent,
        sale: true,
      };
    })
    .sort((a, b) => Number(b.sale) - Number(a.sale));
};
