import axios from "axios";
import { SaleModelStrict } from "../interfaces/product.interface";

export const getCostSale = async (id: string): Promise<number | null> => {
  const { data: sale } = await axios.get<SaleModelStrict[]>(
    `/api/sale?product._id=${id}`
  );

  if (sale === undefined) return null;
  if (!Array.isArray(sale)) return null;
  if (!sale.length) return null;

  const product = sale[0];

  return !product.costOnSalePercent
    ? product.costOnSale
    : Math.ceil(product.cost * (1 - product.costOnSalePercent * 0.01));
};
