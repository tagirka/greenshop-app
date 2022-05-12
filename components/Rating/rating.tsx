import React, { FC } from "react";
import { RatingProps } from "./rating.props";
import styles from "./rating.module.css";
import { FaStar } from "react-icons/fa";
import classNames from "classnames";
import { createArray } from "../../lib/utils";

const Rating: FC<RatingProps> = ({
  handleClick,
  maxRating = 5,
  current = 1,
  reviews = null,
  className,
}) => {
  return (
    <div className={className}>
      {createArray(maxRating).map((_, idx) => {
        return (
          <FaStar
            onClick={() => handleClick(idx + 1)}
            key={idx}
            className={classNames(styles.star, {
              [styles.starActive]: idx + 1 <= (!current ? 1 : current),
            })}
          />
        );
      })}
      {reviews !== null && (
        <span className={styles.reviews}>{reviews} Customer Review</span>
      )}
    </div>
  );
};

export default Rating;
