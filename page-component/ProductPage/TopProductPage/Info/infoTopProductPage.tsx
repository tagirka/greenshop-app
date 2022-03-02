import React, { FC, useContext, useEffect, useState } from "react";

import { InfoTopProductPageProps } from "./infoTopProductPage.props";
import styles from "./infoTopProductPage.module.css";

import Rating from "../../../../components/Rating/rating";
import TopProductBuy from "../TopProduct.Buy/TopProductBuy";
import TopProductSku from "../TopProduct.SKU/TopProductSKU";
import TopProductShare from "../TopProduct.Share/TopProductShare";
import { ProductContext } from "../../../../context/productContext";

import { getCostSale } from "../../../../lib/getCostSale";
import { getRating } from "../../../../lib/getRating";
import { AppContext } from "../../../../context/appContext";
import {
  CartItemModel,
  ProductModel,
  SizeModel,
} from "../../../../interfaces/product.interface";
import { OperationProductBtn } from "../types";
import { CartAction } from "../../../../reduce/cart/cart.action";

const initialStateProduct: ProductModel = {
  _id: "",
  title: "product",
  cost: 0,
  rating: null,
  editable: false,
  review: null,
  size: [],
  sku: "",
  categories: [],
};

const InfoTopProductPage: FC<InfoTopProductPageProps> = ({ className }) => {
  const maxRating = +(process.env.NEXT_PUBLIC_RATING_MAX || 5);

  const {
    store: [{ cartState }, dispatch],
  } = useContext(AppContext);

  const { product } = useContext(ProductContext);

  const [productState, setProductState] = useState(initialStateProduct);
  const [actualRating, setActualRating] = useState(0);

  useEffect(() => {
    if (!product) return;

    const { _id, title, cost, size, sku } = product;

    setProductState((prev): any => ({
      ...prev,
      ...product,
      title,
      size,
      sku: product.sku,
      categories: product.categories.map((c) => c.title).join(", "),
    }));

    (async () => {
      const costSaleData = await getCostSale(_id);
      const rating = await getRating(_id);

      setProductState((prev): any => ({
        ...prev,

        rating: !rating
          ? null
          : { product: productState, rating: { count: rating.count } },
        reviews: rating === null ? null : rating.count,
        cost: costSaleData === null ? cost : costSaleData,
        sku: !sku ? "" : sku,
      }));
    })();
  }, [product]);

  useEffect(() => {
    if (!productState.rating) return;

    setActualRating(productState.rating.rating.count);
  }, [productState]);

  const handleClickRating = (id: number) => {
    if (!productState.editable) return;
    if (id < 0 || id > maxRating) return;
    setActualRating(id);
  };

  const handleBuy = (
    operation: OperationProductBtn,
    size: SizeModel,
    count: number
  ) => {
    const newItemCart: CartItemModel = {
      product: productState,
      size,
      count,
    };

    switch (operation) {
      case "buy_now": {
        dispatch(CartAction.add(newItemCart));
        // route.push('/')

        break;
      }
      case "add_cart": {
        dispatch(CartAction.add(newItemCart));

        break;
      }
      case "favorite": {
        console.log({
          operation,
          size,
          count,
        });
        break;
      }
      default:
        return;
    }
  };

  return (
    <div className={className}>
      <h3 className={styles.title}>{productState.title}</h3>
      <div className={styles.subtitle}>
        <div className="cost">${productState.cost}</div>

        <Rating
          className={styles.rating}
          maxRating={maxRating}
          current={!actualRating ? null : actualRating}
          reviews={!productState.review ? null : productState.review?.length}
          handleClick={handleClickRating}
        />
      </div>

      <hr className={styles.line} />

      <div className={styles.shortDescription}>
        <h4>Short Description</h4>
        <p>
          The ceramic cylinder planters come with a wooden stand to help elevate
          your plants off the ground. The ceramic cylinder planters come with a
          wooden stand to help elevate your plants off the ground.
        </p>
      </div>

      <TopProductBuy sizes={productState.size} handleClickBuy={handleBuy} />

      <TopProductSku
        className={styles.skuGroup}
        sku={productState.sku}
        categories={
          !productState.categories ? "" : [productState.categories].join(", ")
        }
      />

      <TopProductShare className={styles.shareLinks} />
    </div>
  );
};

export default InfoTopProductPage;
