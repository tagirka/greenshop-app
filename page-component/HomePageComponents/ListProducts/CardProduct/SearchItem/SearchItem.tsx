import React, { FC } from "react";

import { SearchItemProps } from "./SearchItem.props";
import { FaSearch } from "react-icons/fa";

const SearchItem = ({ id, onHandler }: SearchItemProps): JSX.Element => {
  return (
    <div onClick={() => onHandler(id)}>
      <FaSearch size={20} />
    </div>
  );
};

export default SearchItem;
