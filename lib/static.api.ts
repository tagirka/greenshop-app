import axios from "axios";

import {
  CategoryModelCount,
  SizeModelCount,
} from "../interfaces/product.interface";

import { reducerArrayUniqWithCount } from "./utils";

import { routeAPI } from "./product.api";

export const RequestOption = {
  headers: {
    Authorization: "token",
  },
};

export const getStaticAPI = {
  getStaticData: async () => {
    const data = routeAPI.getAllProducts();

    const products = await data;

    const categories = await data.then((products) =>
      products
        .filter((p) => p.categories.length > 0)
        .flatMap((p) => [...p.categories])
        .reduce(reducerArrayUniqWithCount, [] as CategoryModelCount[])
        .sort((a: any, b: any) => b.count - a.count)
    );

    const sizes = await data.then((products) =>
      products
        .filter((p) => p.size.length > 0)
        .flatMap((p) => [...p.size])
        .reduce(reducerArrayUniqWithCount, [] as SizeModelCount[])
        .sort((a: any, b: any) => b.count - a.count)
    );

    return { products, categories, sizes };
  },
};
