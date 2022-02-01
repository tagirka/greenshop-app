import React from "react";
import classNames from "classnames";
import { CardProductProps } from "./CardProduct.props";
import styles from "./CardProduct.module.css";

import Image from "next/image";
import Link from "next/link";
import { RiShoppingCart2Line } from "react-icons/ri";
import { FaRegHeart, FaSearch } from "react-icons/fa";
import Tag from "../../Tag/tag";

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

const CardProduct = ({
  item: {
    _id,
    image,
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
          <RiShoppingCart2Line size={20} />
          <FaRegHeart size={20} />
          <FaSearch size={20} />
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
