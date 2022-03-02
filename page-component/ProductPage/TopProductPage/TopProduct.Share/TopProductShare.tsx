import React, { FC } from "react";
import { TopProductShareProps } from "./TopProductShare.props";
import styles from "./TopProduct.module.css";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const TopProductShare: FC<TopProductShareProps> = ({ className }) => {
  return (
    <div className={className}>
      <strong>Share this products:</strong>
      <FaFacebookF />
      <FaTwitter />
      <FaLinkedinIn />
      <FiMail />
    </div>
  );
};

export default TopProductShare;
