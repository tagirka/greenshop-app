import { FC } from "react";
import classNames from "classnames";

import { TopListProps } from "./TopList.props";
import styles from "./TopList.module.css";

export const enum ListProductViewSelect {
  all = "All plants",
  new = "New Arrival",
  sale = "Sale",
}

const TopMenu = [
  ListProductViewSelect.all,
  ListProductViewSelect.new,
  ListProductViewSelect.sale,
];

export const TopList: FC<TopListProps> = ({
  className,
  handleSelect,
  activeSelectView,
}) => {
  return (
    <div className={className}>
      <ul className={styles.menu}>
        {TopMenu.map((m, idx) => (
          <li
            key={m}
            className={classNames(styles.menuItem, {
              [styles.menuItemActive]: activeSelectView === TopMenu[idx],
            })}
            onClick={() => handleSelect(TopMenu[idx])}
          >
            {TopMenu[idx]}
          </li>
        ))}
      </ul>
      <div className={styles.sorting}>Sort by: Default sorting</div>
    </div>
  );
};
