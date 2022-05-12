import React, { FC, useContext, useEffect, useState } from "react";

import { ProductPageProps } from "./ProductPage.props";
import BreadCamps from "../../components/BreadCamps/BreadCamps";
import styles from "./ProductPage.module.css";

import TopProductPage from "./TopProductPage/TopProductPage";
import MainProductPage from "./MainProductPage/MainProductPage";
import BottomProductPage from "./BottomProductPage/BottomProductPage";
import { createArray } from "../../lib/utils";
import axios from "axios";
import {
  ProductModel,
  SaleModelStrict,
} from "../../interfaces/product.interface";
import { IProductContext, ProductContext } from "../../context/productContext";

const ProductPageComponent: FC<ProductPageProps> = ({ id }) => {
  const { setProduct } = useContext(ProductContext);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get<ProductModel>(`/api/product/${id}`);

      if (data === undefined) return;

      setProduct(data);
    })();
  }, [id]);

  // console.log(product);

  // if (!product) return <>Loading ...</>;

  // const productImages = Array.isArray(product.image)
  //   ? product.image
  //   : [...[product.image]];
  //
  // const [cost, setCost] = useState<null | number>(product.cost);
  //
  // useEffect(() => {
  //   (async () => {
  //     const data = await getCostSale(product._id);
  //
  //     setCost(data === null ? product.cost : data);
  //   })();
  // }, [product]);
  //
  // const title = product.title;
  //
  // const sizes = product.size;
  // const categories = product.categories;
  // const rating = 2;

  return (
    <>
      <BreadCamps />

      <TopProductPage className={styles.top} />

      <MainProductPage className={styles.main} />

      <BottomProductPage className={styles.bottom} />
    </>
  );
};

export default ProductPageComponent;
