import { DetailedHTMLProps, HTMLAttributes } from "react";
import {
  CategorySizeModel,
  SizeModel,
} from "../../../../interfaces/product.interface";

export interface IMenuSideBar {
  title: string;
  count: number;
}

export interface MenuSideBarProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string;
  selectItem: string | null;
  dataList: CategorySizeModel[] | SizeModel[];
  handleClick: (item: CategorySizeModel | null) => void;
}
