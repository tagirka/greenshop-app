import React from "react";
import { TagProps } from "./tag.props";
import styles from "./tag.module.css";

const Tag = ({ children, ...props }: TagProps): JSX.Element => {
  return (
    <div className={[props.className, styles.tag].join(" ")}>{children}</div>
  );
};

export default Tag;
