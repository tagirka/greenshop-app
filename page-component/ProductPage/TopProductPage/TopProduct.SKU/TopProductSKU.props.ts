import { DetailedHTMLProps, HTMLAttributes } from "react";
import { CategoryModel } from "../../../../interfaces/product.interface";

export interface TopProductSKUProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, any> {
  sku?: string;
  categories: string;
}
