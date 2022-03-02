import { NextApiRequest, NextApiResponse } from "next";

import { ProductModel } from "../../../interfaces/product.interface";

import axios from "axios";
import { pointAPI } from "../../../lib/point.api";

// product/id

const handlerProductPage = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const params = req.query;

  try {
    const { data: product, status } = await axios.get<ProductModel[]>(
      pointAPI.products.pointGetProducts(),
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
