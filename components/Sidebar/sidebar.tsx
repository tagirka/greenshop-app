import React, { FC, useContext } from "react";

import classNames from "classnames";
import styles from "./sidebar.module.css";
import MenuSideBar from "./MenuSideBar/MenuSideBar";

import Button from "../Button/button";
import Banner from "./Banner/banner";

import { SidebarProps } from "./sidebar.props";
import { AppContext, IAppContext } from "../../context/appContext";
import { RootAction } from "../../reduce/root.action";
import { ProductAction } from "../../reduce/product/product.action";

const Sidebar: FC<SidebarProps> = ({
  className,
  categories,
  sizes,
  ...props
}) => {
  const {
    store: [state, dispatch],
  } = useContext<IAppContext>(AppContext);
  const {
    productState: { selectCategory, selectSize },
  } = state;

  const handleSelectCategory = (item: any) => {
    dispatch(ProductAction.selectCategory(item));
  };

  const handleSelectSize = (item: any) => {
    dispatch(RootAction.selectSize(item));
  };

  return (
    <aside className={classNames(className, styles.sidebar)}>
      <div className={styles.menuWrapper}>
        <MenuSideBar
          title={"Category"}
          dataList={categories}
          selectItem={!!selectCategory ? selectCategory._id : null}
          handleClick={handleSelectCategory}
        />
        <div className={styles.ranger}>
          <h3>Price Ranger</h3>
          <span>Price: $39-$1230</span>
          <Button>Filter</Button>
        </div>
        <MenuSideBar
          title={"Size"}
          dataList={sizes}
          selectItem={!!selectSize ? selectSize._id : null}
          handleClick={handleSelectSize}
        />
      </div>
      <Banner />
    </aside>
  );
};

export default Sidebar;
