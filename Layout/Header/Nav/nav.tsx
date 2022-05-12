import React, { useContext, useEffect } from "react";
import classNames from "classnames";

import styles from "./nav.module.css";
import Link from "next/link";

import { useRouter } from "next/router";
import { router } from "next/client";

const menu = [
  {
    _id: 1,
    title: "Home",
    link: "/",
  },
  {
    _id: 2,
    title: "Shop",
    link: "/shop",
  },
  {
    _id: 3,
    title: "Care",
    link: "/care",
  },
  {
    _id: 4,
    title: "Blogs",
    link: "/blog",
  },
];

const Nav = () => {
  // const { menu } = useContext(AppContext);

  const router = useRouter();

  return (
    <ul className={styles.nav}>
      {menu.map((m) => {
        return (
          <li
            key={m._id}
            className={classNames(styles.navItem, {
              [styles.navItemActive]: router.pathname === m.link,
            })}
          >
            <Link href={m.link}>
              <a>{m.title}</a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Nav;
