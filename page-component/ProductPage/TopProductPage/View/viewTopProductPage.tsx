import React, { FC, useContext, useEffect, useState } from "react";
import { ViewTopProductPageProps } from "./viewTopProductPage.props";
import styles from "./viewTopProductPage.module.css";
import Image from "next/image";
import { createArray } from "../../../../lib/utils";
import {
  IProductContext,
  ProductContext,
} from "../../../../context/productContext";
import { ProductModel } from "../../../../interfaces/product.interface";

const imageStr = createArray(4).map((_, idx) => {
  return {
    srcImage: `/product${idx + 1}.png`,
  };
});

const ViewTopProductPage: FC<ViewTopProductPageProps> = ({ className }) => {
  const { product } = useContext(ProductContext);

  // TODO check product

  const [view, setView] = useState("/product1.png");

  const [images, setImages] = useState<any[]>(imageStr);

  useEffect(() => {
    if (!product) return;
    if (!Array.isArray(product.image)) {
      setImages(imageStr);
    } else {
      setImages([...product.image]);
    }

    setView(imageStr[0].srcImage);
  }, [product]);

  const handler = (srcImage: string) => {
    setView(srcImage);
  };

  return (
    <div className={className}>
      <div className={styles.wrapper}>
        <div className={styles.imageLine}>
          {/*{imageStr.length === 0 && <div>Loading...</div>}*/}

          {images.length &&
            images.map((url) => {
              return (
                <div
                  key={url.srcImage}
                  className={styles.card}
                  onClick={() => handler(url.srcImage)}
                >
                  <Image
                    className={styles.image}
                    src={url.srcImage}
                    alt={"item1"}
                    height={100}
                    width={100}
                  />
                </div>
              );
            })}
        </div>
        <div className={styles.imageView}>
          <div className={styles.card}>
            <Image
              key={view + "current"}
              className={styles.image}
              src={view}
              alt={"item1"}
              height={444}
              width={444}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewTopProductPage;
