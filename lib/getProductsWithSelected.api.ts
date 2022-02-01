import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import {
  SaleModelStrict,
  ViewProductModel,
} from "../interfaces/product.interface";
import { pointAPI } from "./point.api";
import * as qs from "qs";

interface RequestType {
  url: string;
  config: AxiosRequestConfig;
}

export const getProductsWithSelected = async (
  selected: (string | null)[],
  _page = "1",
  _limit = process.env.NEXT_PUBLIC_ITEMS_ON_PAGE || "9"
) => {
  const request = getRequest(selected, _page, _limit);

  const { data: products, status } = await axios.get<ViewProductModel[]>(
    request.url,
    request.config
  );

  if (status != 200) {
    throw Error;
  }

  return await getViewProducts(products);
};

const getRequest = (
  selected: (string | null)[],
  _page: string,
  _limit: string
): RequestType => {
  const q = selected.filter((s) => !!s);

  return !q.length
    ? {
        url: pointAPI.apiPaths.getProducts,
        config: { params: { _page, _limit } },
      }
    : {
        url: pointAPI.apiPaths.getSearch,
        config: {
          params: {
            q,
            _page,
            _limit,
          },
          paramsSerializer: (params: any) =>
            qs.stringify(params, { arrayFormat: "repeat" }),
        },
      };
};

const getViewProducts = async (
  products: ViewProductModel[]
): Promise<ViewProductModel[]> => {
  return await Promise.all(setResponses(products))
    .then((res) => {
      return res
        .filter((r) => r.status === 200)
        .filter((r) => r.data.length)
        .map((r) => r.data.shift());
    })
    .then((data) => {
      if (!data || !data.length) return noSalesProducts(products);

      return setViewProducts(products, data);
    })
    .catch((err) => {
      console.log(err);
      return noSalesProducts(products);
    });
};

export const noSalesProducts = (products: ViewProductModel[]) =>
  products.map((p) => ({ ...p, sale: false }));

const setResponses = (
  products: ViewProductModel[]
): Promise<AxiosResponse<SaleModelStrict[]>>[] => {
  return products.map((p) => {
    return axios.get<SaleModelStrict[]>(
      `${pointAPI.apiPaths.getSaleProducts}?product._id=${p._id}`
    );
  });
};

const setViewProducts = (
  products: ViewProductModel[],
  data: (SaleModelStrict | undefined)[]
) => {
  return products
    .map((p) => {
      const sale = data.find((s) => s?.productID === p._id);

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
