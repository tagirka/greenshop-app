import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ShoppingCartProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  totalCountInCart?: number;
}
