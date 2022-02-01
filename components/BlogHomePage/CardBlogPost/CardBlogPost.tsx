import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CardBlogPostProps } from "./CardBlogPost.props";
import styles from "./CardBlogPost.module.css";

const CardBlogPost = ({
  title,
  description,
  timeToRead,
  date,
  image,
}: CardBlogPostProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <Image src={image} height={195} width={260} alt="" />
      </div>
      <div className={styles.body}>
        <p className={styles.bodyTop}>{`${date} | ${timeToRead}`}</p>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.bottom}>
          <Link href="#">
            <a>Read more ...</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardBlogPost;
