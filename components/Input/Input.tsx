import React from "react";

import classNames from "classnames";

import { InputProps } from "./Input.props";
import styles from "./Input.module.css";

export const Input = ({ ...props }: InputProps): JSX.Element => {
  return (
    <div className={classNames(props.className, styles.wrapper)}>
      <input className={styles.input} {...props} />
    </div>
  );
};
