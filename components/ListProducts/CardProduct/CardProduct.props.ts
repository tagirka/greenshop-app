import { DetailedHTMLProps, HTMLAttributes } from "react";
import { ViewProductModel } from "../../../interfaces/product.interface";

export interface CardProductProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  item: ViewProductModel;
}
