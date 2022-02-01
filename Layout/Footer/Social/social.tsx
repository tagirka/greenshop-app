import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SocialProps } from "./social.props";
import styles from "./social.module.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutubeSquare,
} from "react-icons/fa";

const Social = ({ ...props }: SocialProps): JSX.Element => {
  return (
    <div className={props.className}>
      <div className="socialLinks">
        <h3>Social links</h3>
        <div className={styles.links}>
          <Link href="/?#">
            <a>
              <FaFacebookF className={styles.socialLinkIco} />
            </a>
          </Link>

          <Link href="/?#">
            <a>
              <FaInstagram size={20} className={styles.socialLinkIco} />
            </a>
          </Link>

          <Link href="/?#">
            <a>
              <FaTwitter className={styles.socialLinkIco} />
            </a>
          </Link>

          <Link href="/?#">
            <a>
              <FaLinkedinIn className={styles.socialLinkIco} />
            </a>
          </Link>

          <Link href="/?#">
            <a>
              <FaYoutubeSquare className={styles.socialLinkIco} />
            </a>
          </Link>
        </div>
      </div>

      <div className="payment">
        <h3>We accept</h3>
        <Image src="/payment.png" alt="payment" height={26} width={224} />
      </div>
    </div>
  );
};

export default Social;
