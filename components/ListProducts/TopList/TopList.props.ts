import { DetailedHTMLProps, HTMLAttributes } from "react";
import { ListProductViewSelect } from "./TopList";

export interface TopListProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  activeSelectView: ListProductViewSelect;
  handleSelect: (select: ListProductViewSelect) => void;
}
