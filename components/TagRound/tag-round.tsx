import React from "react";
import classNames from "classnames";
import { TagRoundProps } from "./tag-round.props";
import styles from "./tag-round.module.css";

const TagRound = ({ children, ...props }: TagRoundProps): JSX.Element => {
  return (
    <div className={classNames(props.className, styles.tag)}>{children}</div>
  );
};

export default TagRound;
