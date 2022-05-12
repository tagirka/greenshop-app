import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

import { ProductModel } from "../interfaces/product.interface";
import { getStrictProduct } from "./products.util";
import { api } from "./api/point.api";

export const RequestOption = {
  headers: {
    Authorization: "token",
  },
};

export const routeAPI = {
  getAllProducts: async () => {
    const { data: products, status } = await axios.get<ProductModel[]>(
      // api.products.pointGetProducts()
      api.outPaths.getProducts
    );
    if (status !== 200) throw Error();

    return products.map(getStrictProduct);
  },

  getProductById: async (id: string) => {
    const { data, status } = await axios.get(`${api.paths.getProducts}/${id}`);

    return { data };
  },
};
