import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface RatingProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, any> {
  maxRating?: number;
  current: number | null;
  handleClick: (f: any) => void;

  reviews: number | null;
}
