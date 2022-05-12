import { DetailedHTMLProps, HTMLAttributes } from "react";
import { SizeModel } from "../../../../interfaces/product.interface";

export interface TopProductBuyProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, any> {
  sizes: SizeModel[];
  handleClickBuy: (operation: any, size: SizeModel, count: number) => void;
}
