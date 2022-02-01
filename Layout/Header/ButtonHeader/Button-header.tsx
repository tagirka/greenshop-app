import React from "react";
import Button from "../../../components/Button/button";
import { ButtonHeaderProps } from "./ButtonHeader.props";
import { FaSearch } from "react-icons/fa";
import { RiShoppingCart2Line } from "react-icons/ri";
import { FiLogIn } from "react-icons/fi";
import classNames from "classnames";

import styles from "./button-header.module.css";

import ShoppingCart from "../../../components/ShoppingCart/shopping-cart";

const ButtonHeader = ({ ...props }: ButtonHeaderProps) => {
  return (
    <div className={classNames(props.className, styles.wrapper)}>
      <FaSearch size={24} />
      <ShoppingCart totalCountInCart={0} />

      <Button fontWeight={"normal"}>
        <FiLogIn size={20} />
        <span>Login</span>
      </Button>
    </div>
  );
};

export default ButtonHeader;
