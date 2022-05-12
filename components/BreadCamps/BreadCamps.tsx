import React, { FC } from "react";
import { BreadCampsProps } from "./BreadCamps.props";
import styles from "./BreadCamps.module.css";

const BreadCamps: FC<BreadCampsProps> = ({ className }) => {
  return (
    <div className={className}>
      <p>
        <span className={styles.root}>Home</span>/Shop
      </p>
    </div>
  );
};

export default BreadCamps;
