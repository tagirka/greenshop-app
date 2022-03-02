import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface BottomProductPageProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  products?: [];
}
