import React, { FC } from "react";
import classNames from "classnames";

import { MenuSideBarProps } from "./MenuSideBar.props";
import styles from "./MenuSideBar.module.css";

const MenuSideBar: FC<MenuSideBarProps> = ({
  title,
  dataList,
  handleClick,
  selectItem,
  ...props
}) => {
  return (
    <div className={props.className}>
      <h3>{title}</h3>
      <ul className={styles.itemsList}>
        <li className={styles.listItem} onClick={() => handleClick(null)}>
          All {title.toLocaleLowerCase()}
        </li>
        {dataList.map((item) => {
          return (
            <li
              key={item.title}
              className={classNames(styles.listItem, {
                [styles.listItemActive]: item._id === selectItem,
              })}
              onClick={() => handleClick(item)}
            >
              <span className={styles.itemTitle}>{item.title}</span>
              <span className={styles.itemCount}>({item.count})</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MenuSideBar;
