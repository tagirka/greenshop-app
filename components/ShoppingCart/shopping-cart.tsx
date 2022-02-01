import React from "react";
import { RiShoppingCart2Line } from "react-icons/ri";
import TagRound from "../TagRound/tag-round";

import styles from "./shopping-cart.module.css";
import { ShoppingCartProps } from "./shopping-cart.props";

const ShoppingCart = ({
  totalCountInCart = 0,
  ...props
}: ShoppingCartProps) => {
  return (
    <>
      <span className={styles.cart}>
        <RiShoppingCart2Line size={24} />
        {totalCountInCart > 0 && (
          <TagRound className={styles.cartPoint}>{totalCountInCart}</TagRound>
        )}
      </span>
    </>
  );
};

export default ShoppingCart;
