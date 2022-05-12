import React from "react";
import Image from "next/image";
import classNames from "classnames";
import { CarouselProps } from "./carousel.props";
import styles from "./carousel.module.css";
import Button from "../../../components/Button/button";

const Carousel = ({ ...props }: CarouselProps) => {
  return (
    <article className={classNames(props.className, styles.carousel)}>
      <div className={styles.left}>
        <h4 className={styles.subtitle}>welcome to greenshop</h4>
        <h1 className={styles.title}>
          lets make a better <span>planet</span>
        </h1>
        <p className={styles.description}>
          We are an online plant shop offering a wide range of cheap and trendy
          plants. Use our plants to create an unique Urban Jungle. Order your
          favorite plants!
        </p>

        <Button fontSize="upper">shop now</Button>
      </div>

      <div className={styles.right}>
        <Image src="/carousel1.png" alt="carousel" width={518} height={518} />
      </div>
    </article>
  );
};

export default Carousel;
