import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import {
  RatingProductModel,
  SaleModel,
  SaleModelStrict,
} from "../../../interfaces/product.interface";
import { pointAPI } from "../../../lib/point.api";
import * as qs from "qs";

interface ReqParams {
  [key: string]: string;
}

const getStrictRating = (rating: RatingProductModel[]) => {
  if (!rating.length) return [];

  return rating.map((r) => ({
    _id: r._id,
    product: r.product._id,
    rating: r.rating,
  }));
};

//http://localhost:3000/api/rating?product._id=???? product._id
async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const params = req.query as ReqParams;
    // const { q } = params;

    const { data: ratingProduct, status } = await axios.get<
      RatingProductModel[]
    >(pointAPI.products.pointGetRatingProducts(), {
      params,
      paramsSerializer: (params) =>
        qs.stringify(params, { arrayFormat: "repeat" }),
    });

    res.status(200).json(getStrictRating(ratingProduct));
  } catch (err: any) {
    // const status = err.toJSON();
    // console.log(err);
    res.status(404).json({ message: `rating product not found `, err });
  }
}

export default handler;
