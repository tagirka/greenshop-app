import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import {
  SaleModel,
  SaleModelStrict,
} from "../../../interfaces/product.interface";
import { api } from "../../../lib/api/point.api";
import * as qs from "qs";

interface SaleReqParams {
  [key: string]: string;
}

const getStrictSale = (saleProduct: SaleModel[]): SaleModelStrict[] => {
  if (!saleProduct.length) return [];

  return saleProduct
    .filter((s) => {
      if (s.costOnSalePercent) return true;
      return s.product.cost > s.costOnSale;
    })
    .map((s) => ({
      productID: s.product._id,
      cost: s.product.cost,
      costOnSale: s.costOnSale,
      costOnSalePercent: s.costOnSalePercent,
    }));
};

//http://localhost:3000/api/sale?product._id=???? product._id
async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const params = req.query as SaleReqParams;
    const { q, _page, _limit } = params;
    // const q = selected.filter((s) => !!s);

    // const params = !q
    //   ? { _page, _limit }
    //   : { q: Array.isArray(q) ? q : [q], _page, _limit };

    const { data: saleProduct, status } = await axios.get<SaleModel[]>(
      // api.products.pointGetProductsSale(),
      api.outPaths.getProductsSale,
      {
        params,
        paramsSerializer: (params) =>
          qs.stringify(params, { arrayFormat: "repeat" }),
      }
    );

    res.status(200).json(getStrictSale(saleProduct));
  } catch (err: any) {
    // const status = err.toJSON();
    // console.log(err);
    res.status(404).json({ message: `Sales product not found `, err });
  }
}

export default handler;
