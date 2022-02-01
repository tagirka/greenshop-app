import { DetailedHTMLProps, HTMLAttributes } from "react";
import {
  CategoryModelCount,
  SizeModelCount,
} from "../../interfaces/product.interface";

export interface SidebarProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  categories: CategoryModelCount[];
  sizes: SizeModelCount[];
}
