import { DetailedHTMLProps, HTMLAttributes } from "react";
import { SizeModel } from "../../../../interfaces/product.interface";

export interface TopProductSizeProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, any> {
  sizes: SizeModel[];
  size: { _id: string; title: string; short: string };
  handleSelect: (f: any) => void;
}
