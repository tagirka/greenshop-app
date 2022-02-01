import React from "react";
import Link from "next/link";
import { CardBottomProps } from "./card-bottom.props";
import styles from "./card-bottom.module.css";

const CardBottom = ({
  link: menuItem,
  ...props
}: CardBottomProps): JSX.Element => {
  return (
    <div className={props.className}>
      <h3 className={styles.title}>{menuItem.title}</h3>

      <ul className={styles.menu}>
        {menuItem.links.map((l) => {
          return (
            <li className={styles.menuItem} key={l.linksTitle}>
              <Link href={l.href}>
                <a>{l.linksTitle}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CardBottom;
