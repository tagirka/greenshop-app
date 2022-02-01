import { DetailedHTMLProps, HTMLAttributes } from "react";
import { ISocialPaymentLinks } from "./social.interfaces";

export interface SocialProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  socialMedia: ISocialPaymentLinks[];
  payment: ISocialPaymentLinks[];
}
