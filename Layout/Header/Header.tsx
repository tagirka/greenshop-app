import React from "react";
import classNames from "classnames";

import { HeaderProps } from "./Header.props";
import styles from "./Header.module.css";

import Nav from "./Nav/nav";
import ButtonHeader from "./ButtonHeader/Button-header";
import Brand from "../../components/Brand/Brand";

const Header = ({ ...props }: HeaderProps): JSX.Element => {
  return (
    <header className={classNames(props.className, [styles.header])}>
      <div className={styles.navbar}>
        <Brand className={styles.brand} />
        <Nav />
        <ButtonHeader className={styles.right} />
      </div>
    </header>
  );
};

export default Header;
