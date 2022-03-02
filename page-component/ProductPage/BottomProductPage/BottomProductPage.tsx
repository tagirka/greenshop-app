import React, { FC } from "react";
import { BottomProductPageProps } from "./BottomProductPage.props";
import styles from "./BottomProduct.module.css";
import Image from "next/image";
import { createArray } from "../../../lib/utils";

const imageStr = createArray(5).map((_, idx) => {
  return {
    srcImage: `/product${idx + 1}.png`,
  };
});

const BottomProductPage: FC<BottomProductPageProps> = ({
  products,
  className,
}) => {
  return (
    <article className={className}>
      <div className={styles.titleReletedProducts}>Releted Products</div>
      <hr className={styles.line} />
      <div className={styles.reletedProductsCarousel}>
        {imageStr.map((image, idx) => {
          return (
            <div className={styles.card} key={image.srcImage}>
              <div className={styles.image}>
                <Image
                  src={image.srcImage}
                  alt={"item1"}
                  height={255}
                  width={220}
                />
              </div>

              <div className={styles.cardBottom}>
                <p className={styles.title}>title</p>
                <p className={styles.cost}>$129.00</p>
              </div>
            </div>
          );
        })}

        {/*<div className={styles.card}>*/}
        {/*  <div className={styles.image}>*/}
        {/*    <Image*/}
        {/*      src={"/product1.png"}*/}
        {/*      alt={"item1"}*/}
        {/*      height={255}*/}
        {/*      width={220}*/}
        {/*    />*/}
        {/*  </div>*/}

        {/*  <div className={styles.cardBottom}>*/}
        {/*    <p className={styles.title}>title</p>*/}
        {/*    <p className={styles.cost}>$129.00</p>*/}
        {/*  </div>*/}
        {/*</div>*/}
        {/*<div className={styles.card}>*/}
        {/*  <Image*/}
        {/*    className={styles.image}*/}
        {/*    src={"/item1.png"}*/}
        {/*    alt={"item1"}*/}
        {/*    height={255}*/}
        {/*    width={220}*/}
        {/*  />*/}

        {/*  <div className={styles.cardBottom}>*/}
        {/*    <p className={styles.title}>title</p>*/}
        {/*    <p className={styles.cost}>$129.00</p>*/}
        {/*  </div>*/}
        {/*</div>*/}
        {/*<div className={styles.card}>*/}
        {/*  <Image*/}
        {/*    className={styles.image}*/}
        {/*    src={"/item1.png"}*/}
        {/*    alt={"item1"}*/}
        {/*    height={255}*/}
        {/*    width={220}*/}
        {/*  />*/}

        {/*  <div className={styles.cardBottom}>*/}
        {/*    <p className={styles.title}>title</p>*/}
        {/*    <p className={styles.cost}>$129.00</p>*/}
        {/*  </div>*/}
        {/*</div>*/}
        {/*<div className={styles.card}>*/}
        {/*  <Image*/}
        {/*    className={styles.image}*/}
        {/*    src={"/item1.png"}*/}
        {/*    alt={"item1"}*/}
        {/*    height={255}*/}
        {/*    width={220}*/}
        {/*  />*/}

        {/*  <div className={styles.cardBottom}>*/}
        {/*    <p className={styles.title}>title</p>*/}
        {/*    <p className={styles.cost}>$129.00</p>*/}
        {/*  </div>*/}
        {/*</div>*/}
        {/*<div className={styles.card}>*/}
        {/*  <Image*/}
        {/*    className={styles.image}*/}
        {/*    src={"/item1.png"}*/}
        {/*    alt={"item1"}*/}
        {/*    height={255}*/}
        {/*    width={220}*/}
        {/*  />*/}

        {/*  <div className={styles.cardBottom}>*/}
        {/*    <p className={styles.title}>title</p>*/}
        {/*    <p className={styles.cost}>$129.00</p>*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
    </article>
  );
};

export default BottomProductPage;
