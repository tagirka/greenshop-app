import React, { FC, useContext, useEffect, useState } from "react";
import { TopProductBuyProps } from "./TopProductBuy.props";
import styles from "./TopProductBuy.module.css";
import Button from "../../../../components/Button/button";
import { FaRegHeart } from "react-icons/fa";
import TopProductSize from "../TopProduct.Size/TopProductSize";
import { SizeModel } from "../../../../interfaces/product.interface";
import { OperationProductBtn } from "../types";

const initialSize = (sizes: SizeModel[]): SizeModel => {
  if (!sizes.length) return { _id: "1", title: "Small", short: "S" };

  return sizes[0];
};

const TopProductBuy: FC<TopProductBuyProps> = ({ sizes, handleClickBuy }) => {
  const [count, setCount] = useState(1);
  const [currentSize, setCurrentSize] = useState(initialSize(sizes));

  useEffect(() => {
    setCurrentSize(
      initialSize(
        sizes.sort((a, b) => {
          if (a.short > b.short) return 1;
          if (b.short > a.short) return -1;

          return 0;
        })
      )
    );
  }, [sizes]);

  const handleSelectSize = (select: any) => {
    setCurrentSize(select);
  };
  const handleCount = (sign: number) => {
    setCount((prev) => (prev + sign > 1 ? prev + sign : 1));
  };

  const handleBuy = (operation: OperationProductBtn) => {
    handleClickBuy(operation, currentSize, count);
  };

  return (
    <>
      <TopProductSize
        sizes={sizes}
        size={currentSize}
        handleSelect={handleSelectSize}
      />
      <div className={styles.countGroup}>
        <div className={styles.changeCount}>
          <span className={styles.iconSign} onClick={() => handleCount(-1)}>
            -
          </span>
          <span className={styles.count}>{count}</span>
          <span className={styles.iconSign} onClick={() => handleCount(1)}>
            +
          </span>
        </div>
        <div className={styles.buttonGroup}>
          <Button
            onClick={() => handleBuy("buy_now")}
            className={styles.button}
            buttonType={"primary"}
            fontSize={"upper"}
          >
            Buy now
          </Button>
          <Button
            onClick={() => handleBuy("add_cart")}
            className={styles.button}
            buttonType={"secondary"}
            fontSize={"upper"}
          >
            add to cart
          </Button>
          <Button
            buttonType={"secondary"}
            onClick={() => handleBuy("favorite")}
          >
            <FaRegHeart />
          </Button>
        </div>
      </div>
    </>
  );
};

export default TopProductBuy;
