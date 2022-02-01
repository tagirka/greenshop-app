import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface ButtonProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  buttonType?: "primary" | "secondary";
  fontSize?: "normal" | "upper";
  fontWeight?: "bold" | "normal";
  children: ReactNode;
}
