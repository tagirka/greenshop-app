import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface CardDetailedProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string;
  description: string;
  image: string;
  href: string;
}
