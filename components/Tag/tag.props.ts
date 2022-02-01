import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from "react";

export interface TagProps
  extends PropsWithChildren<
    DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
  > {}
