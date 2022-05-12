import { NextApiRequest, NextApiResponse } from "next";

// blog/id

const handlerBlogPage = async (req: NextApiRequest, res: NextApiResponse) => {
  const params = req.query;

  try {
    // const { data: product, status } = await axios.get<ProductModel[]>(
    //   // api.products.pointGetProducts(),
    //   api.outPaths.getProducts,
    //   {
    //     params: {
    //       _id: params.id,
    //     },
    //   }
    // )

    res.status(200).json({});
  } catch (err: any) {
    const { status } = err.toJSON();
    res.status(status).end();
  }
};

export default handlerBlogPage;
