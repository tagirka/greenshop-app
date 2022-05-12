import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface SearchItemProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  id: string;
  onHandler: (id: string) => void;
}
