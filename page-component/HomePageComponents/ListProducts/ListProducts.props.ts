import { DetailedHTMLProps, HTMLAttributes } from "react";
import { ProductModel } from "../../../interfaces/product.interface";

export interface ListProductsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  products: ProductModel[];
}
