import { ProductModel } from "../interfaces/product.interface";

export const getStrictProduct = (product: ProductModel): ProductModel => {
  return {
    _id: product._id,
    title: product.title,
    image: product.image,
    cost: product.cost,
    categories: product.categories,
    size: product.size,
  };
};
