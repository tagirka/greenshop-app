import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface AddToCartProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  id: string;
  onHandler: (id: string) => void;
}
