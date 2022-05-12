import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface PaginationProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  limit: number;

  activePage?: number;
}
