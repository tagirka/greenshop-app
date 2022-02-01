import axios, { AxiosResponse } from "axios";
import {
  ProductModel,
  SaleModelStrict,
  ViewProductModel,
} from "../interfaces/product.interface";
import { pointAPI } from "./point.api";
import { getProductsWithSelected } from "./getProductsWithSelected.api";
import * as qs from "qs";

export const getProductsOnSale = async (
  selected: (string | null)[],
  _page = "1",
  _limit = process.env.NEXT_PUBLIC_ITEMS_ON_PAGE || "9"
): Promise<ViewProductModel[]> => {
  const q = selected.filter((s) => !!s);

  const params = q.length
    ? {
        q,
        _page,
        _limit,
      }
    : {
        _page,
        _limit,
      };

  const { data: sale } = await axios.get<SaleModelStrict[]>(
    `${pointAPI.apiPaths.getSaleProducts}`,
    {
      params,
      paramsSerializer: (params: any) =>
        qs.stringify(params, { arrayFormat: "repeat" }),
    }
  );

  return await getViewProducts(sale, selected, _page, _limit);
};

const setResponses = (
  sale: SaleModelStrict[]
): Promise<AxiosResponse<ViewProductModel>>[] => {
  return sale.map((s) => {
    return axios.get<ProductModel>(
      `${pointAPI.apiPaths.getProductPath}/${s.productID}`
    );
  });
};

const getViewProducts = async (
  sale: SaleModelStrict[],
  selected: (string | null)[],
  _page: string,
  _limit: string
) => {
  return await Promise.all(setResponses(sale))
    .then((res) => {
      return res
        .filter((r) => r.status === 200)
        .filter((r) => r.data)
        .map((r) => r.data);
    })
    .then((data) => {
      if (!data || !data.length)
        return getProductsWithSelected(selected, _page, _limit);

      return data.map((product) => {
        const dataSaleIdx = sale.findIndex((s) => s.productID === product._id);

        if (dataSaleIdx < 0) return { ...product, sale: false };
        const dataSale = sale[dataSaleIdx];

        const costOnSale = !dataSale.costOnSalePercent
          ? dataSale.costOnSale
          : Math.ceil(product.cost * (1 - dataSale.costOnSalePercent * 0.01));
        const costOnSalePercent = dataSale.costOnSalePercent
          ? dataSale.costOnSalePercent
          : Math.ceil((1 - dataSale.costOnSale / product.cost) * 100);

        return {
          ...product,
          sale: true,
          costOnSale,
          costOnSalePercent,
        };
      });
    });
};
