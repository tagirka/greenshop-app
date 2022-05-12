import React, { FC } from "react";
import { RiShoppingCart2Line } from "react-icons/ri";
import { AddToCartProps } from "./AddToCart.props";

const AddToCart = ({ id, onHandler }: AddToCartProps): JSX.Element => {
  return (
    <div onClick={() => onHandler(id)}>
      <RiShoppingCart2Line size={20} />
    </div>
  );
};

export default AddToCart;
