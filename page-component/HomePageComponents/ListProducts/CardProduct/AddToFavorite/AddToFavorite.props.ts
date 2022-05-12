import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface AddToFavoriteProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  id: string;
  onHandler: (id: string) => void;
}
