import { NextApiRequest, NextApiResponse } from "next";

import { ProductModel } from "../../../interfaces/product.interface";

import axios from "axios";
import { api } from "../../../lib/api/point.api";

// product/id

const handlerProductPage = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const params = req.query;

  try {
    const { data: product, status } = await axios.get<ProductModel[]>(
      // api.products.pointGetProducts(),
      api.outPaths.getProducts,
      {
        params: {
          _id: params.id,
        },
      }
    );

    res.status(200).json(product.shift());
  } catch (err: any) {
    const { status } = err.toJSON();
    res.status(status).end();
  }
};

export default handlerProductPage;
