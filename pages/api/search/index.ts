import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import * as qs from "qs";

import { ProductModel } from "../../../interfaces/product.interface";
import { pointAPI } from "../../../lib/point.api";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const params = req.query;
  const { q, _page, _limit } = params;

  if (Array.isArray(_page) || Array.isArray(_limit)) {
    res.status(500).json({ message: "incorrect params query" });
  }

  try {
    const { data: products } = await axios.get<ProductModel[]>(
      pointAPI.products.pointGetProducts(),
      {
        params: { q: Array.isArray(q) ? q : [q], _page, _limit },
        paramsSerializer: (params) =>
          qs.stringify(params, { arrayFormat: "repeat" }),
      }
    );

    res.status(200).json(products);
  } catch (err: any) {
    const status = err.toJSON();
    res.status(404).json({ message: `err status ${status}`, status });
  }
}

export default handler;