import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface CardBlogPostProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string;
  description: string;
  image: string;
  date: string;
  timeToRead: string;
}
