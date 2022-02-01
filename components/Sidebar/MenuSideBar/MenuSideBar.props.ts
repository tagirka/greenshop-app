import { DetailedHTMLProps, HTMLAttributes } from "react";
import {
  CategoryModelCount,
  SizeModelCount,
} from "../../../interfaces/product.interface";

export interface IMenuSideBar {
  title: string;
  count: number;
}

export interface MenuSideBarProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string;
  selectItem: string | null;
  dataList: CategoryModelCount[] | SizeModelCount[];
  handleClick: (item: any) => void;
}
