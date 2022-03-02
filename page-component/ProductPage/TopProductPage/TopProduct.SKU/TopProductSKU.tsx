import React, { FC } from "react";
import { TopProductSKUProps } from "./TopProductSKU.props";
import styles from "./TopProductSKU.module.css";

const TopProductSku: FC<TopProductSKUProps> = ({
  sku = "",
  categories,
  className,
}) => {
  return (
    <div className={className}>
      <p>SKU: {sku}</p>
      <p>Categories: {categories}</p>

      <p>Tags: Home, Garden, Plants</p>
    </div>
  );
};

export default TopProductSku;
