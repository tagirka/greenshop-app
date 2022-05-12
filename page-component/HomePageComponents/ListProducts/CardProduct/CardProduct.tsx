import React from "react";
import classNames from "classnames";
import { CardProductProps } from "./CardProduct.props";
import styles from "./CardProduct.module.css";

import Image from "next/image";
import Link from "next/link";
import { RiShoppingCart2Line } from "react-icons/ri";
import { FaRegHeart, FaSearch } from "react-icons/fa";
import Tag from "../../../../components/Tag/tag";
import AddToCart from "./AddToCart/AddToCart";
import AddToFavorite from "./AddToFavorite/AddToFavorite";
import SearchItem from "./SearchItem/SearchItem";

const stringCost = (
  sale = false,
  cost: number,
  costOnSale: number | null
): JSX.Element => {
  if (!sale || costOnSale === null)
    return <span className={styles.cost}>${cost}</span>;

  return sale ? (
    <>
      <span className={styles.cost}>${costOnSale}</span>
      <span className={styles.costOnSale}>${cost}</span>
    </>
  ) : (
    <span className={styles.cost}>${cost}</span>
  );
};

const handlerAddToCart = (id: string) => {
  console.log("add to cart", id);
};

const handlerAddToFavorite = (id: string) => {
  console.log("add to favorite", id);
};
const handlerSearchItem = (id: string) => {
  console.log("search item", id);
};

const CardProduct = ({
  item: {
    _id,
    image = "/product4.png",
    title,
    cost,
    sale,
    costOnSale = null,
    costOnSalePercent = null,
  },
  ...props
}: CardProductProps): JSX.Element => {
  return (
    <div className={classNames(props.className, styles.cardItem)}>
      <div className={styles.cardBody}>
        <Link href={`/product/${_id}`} passHref>
          <a>
            <Image
              className={styles.image}
              src={image}
              alt={"item1"}
              height={250}
              width={250}
            />
          </a>
        </Link>

        <div className={styles.icons}>
          <AddToCart id={_id} onHandler={handlerAddToCart} />
          <AddToFavorite id={_id} onHandler={handlerAddToFavorite} />
          <SearchItem id={_id} onHandler={handlerSearchItem} />
        </div>

        {sale && costOnSalePercent && (
          <Tag className={styles.sale}>{costOnSalePercent}%</Tag>
        )}
      </div>

      <div className={styles.cardBottom}>
        <p className={styles.title}>{title}</p>
        <p>{stringCost(sale, cost, costOnSale)}</p>
      </div>
    </div>
  );
};

export default CardProduct;
