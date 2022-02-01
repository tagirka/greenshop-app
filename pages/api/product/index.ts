import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { pointAPI } from "../../../lib/point.api";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const params = req.query;
  const { _page, _limit } = params;

  if (Array.isArray(_page) || Array.isArray(_limit)) {
    res.status(500).json({ message: "incorrect params query" });
  }

  try {
    const { data: products, status } = await axios(
      pointAPI.products.pointGetProducts(),
      {
        params,
      }
    );

    res.status(200).json(products);
  } catch (err: any) {
    const status = err.toJSON();
    res.status(404).json({ message: `err status ${status}`, status });
  }
}

export default handler;
