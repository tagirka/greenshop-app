import React from "react";
import { CardTopProps } from "./card-top.props";
import styles from "./card-top.module.css";
import Image from "next/image";

const CardTop = ({ title, image, children }: CardTopProps): JSX.Element => {
  return (
    <div className={styles.cardTop}>
      <Image src={image} alt="card-top" height={95} width={77} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{children}</p>
    </div>
  );
};

export default CardTop;
