import React from "react";
import classNames from "classnames";
import { ButtonProps } from "./button.props";

import styles from "./button.module.css";

const Button = ({
  buttonType = "primary",
  fontWeight = "bold",
  fontSize = "normal",
  children,
  className,
  ...props
}: ButtonProps): JSX.Element => {
  const buttonStyle = classNames(styles.button, className, {
    [styles.primary]: buttonType === "primary",
    [styles.secondary]: buttonType === "secondary",
    [styles.normalWeightFont]: fontWeight === "normal",
    [styles.upperSizeFont]: fontSize === "upper",
  });

  return (
    <button className={buttonStyle} {...props}>
      {children}
    </button>
  );
};

export default Button;
