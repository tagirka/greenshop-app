import React from "react";
import { CardDetailedProps } from "./CardDetailed.props";
import styles from "./CardDetailed.module.css";
import Image from "next/image";
import Button from "../../Button/button";

const CardDetailed = ({
  title,
  description,
  image,
  href,
}: CardDetailedProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.left}>
        <Image
          className={styles.image}
          src={`/${image}`}
          width={290}
          height={290}
          alt=""
        />
      </div>
      <div className={styles.right}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <Button className={styles.buttonDetailed}>Find More</Button>
      </div>
    </div>
  );
};

export default CardDetailed;
