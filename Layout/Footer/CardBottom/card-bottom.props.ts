import { DetailedHTMLProps, HTMLAttributes } from "react";
import { ICardBottom } from "./card-bottom.interfaces";

export interface CardBottomProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  link: ICardBottom;
}
