import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from "react";

export interface CardTopProps
  extends PropsWithChildren<
    DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
  > {
  title: string;

  image: string;
}
