import React, { FC } from "react";
import { TopProductSizeProps } from "./TopProductSize.props";
import styles from "./TopProductSize.module.css";
import classNames from "classnames";

const sizesArray = [
  {
    _id: "1",
    title: "Small",
    short: "S",
  },
  { _id: "2", title: "Medium", short: "M" },
  { _id: "3", title: "Large", short: "L" },
  { _id: "4", title: "XLarge", short: "XL" },
];

const TopProductSize: FC<TopProductSizeProps> = ({
  sizes,
  size: { _id: selectID, short },
  handleSelect = (f) => f,
}) => {
  const arraySizes = !sizes.length ? sizesArray : sizes;

  return (
    <>
      <h4 className={styles.title}>Size</h4>

      <div className={styles.groupIconSize}>
        {arraySizes.map((s, idx) => {
          return (
            <span
              onClick={() => handleSelect(s)}
              key={s.title}
              className={classNames(styles.iconSize, {
                [styles.iconSizeActive]: selectID === s._id,
              })}
            >
              <span>{s.short}</span>
            </span>
          );
        })}
      </div>
    </>
  );
};

export default TopProductSize;
