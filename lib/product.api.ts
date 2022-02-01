import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import * as qs from "qs";

import {
  ProductModel,
  SaleModelStrict,
  ViewProductModel,
} from "../interfaces/product.interface";
import { getStrictProduct } from "./products.util";
import { pointAPI } from "./point.api";

export const RequestOption = {
  headers: {
    Authorization: "token",
  },
};

export const routeAPI = {
  getAllProducts: async () => {
    const { data: products, status } = await axios.get<ProductModel[]>(
      pointAPI.products.pointGetProducts()
    );
    if (status !== 200) throw Error();

    return products.map(getStrictProduct);
  },

  getProductById: async (id: string) => {
    const { data, status } = await axios.get(
      `${pointAPI.apiPaths.getProducts()}/${id}`
    );

    return { data };
  },
};
