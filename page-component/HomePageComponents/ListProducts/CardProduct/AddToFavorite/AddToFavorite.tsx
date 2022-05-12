import React, { FC } from "react";
import { RiShoppingCart2Line } from "react-icons/ri";
import { AddToFavoriteProps } from "./AddToFavorite.props";
import { FaRegHeart } from "react-icons/fa";

const AddToFavorite = ({ id, onHandler }: AddToFavoriteProps): JSX.Element => {
  return (
    <div onClick={() => onHandler(id)}>
      <FaRegHeart size={20} />
    </div>
  );
};

export default AddToFavorite;
