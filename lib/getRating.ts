import axios from "axios";
import {
  RatingProductStrictModel,
  SaleModelStrict,
} from "../interfaces/product.interface";
import { number } from "prop-types";

export interface IGetRating {
  count: number;
  rating: number;
}

export const getRating = async (id: string): Promise<IGetRating | null> => {
  const { data } = await axios.get<RatingProductStrictModel[]>(
    `/api/rating?product._id=${id}`
  );

  if (data === undefined) return null;
  if (!Array.isArray(data)) return null;
  if (!data.length) return null;

  const count = data.filter((d) => d.product === id && d.rating.count > 0);

  const rating = Math.ceil(
    count.reduce((acc, cur, idx) => {
      return (cur.rating.count + acc) / (idx + 1);
    }, 0)
  );

  return {
    count: count.length,
    rating: rating,
  };
};
