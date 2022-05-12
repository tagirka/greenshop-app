import React, { FC, useContext } from "react";

import classNames from "classnames";
import styles from "./sidebar.module.css";
import MenuSideBar from "./MenuSideBar/MenuSideBar";

import Button from "../../../components/Button/button";
import Banner from "./Banner/banner";

import { SidebarProps } from "./sidebar.props";
import { AppContext, IAppContext } from "../../../context/appContext";
import { RootAction } from "../../../reduce/root.action";
import { ProductAction } from "../../../reduce/product/product.action";
import { HomeContext, IHomeContext } from "../../../context/homePageContext";
import {
  CategorySizeModel,
  SizeModel,
} from "../../../interfaces/product.interface";

const Sidebar: FC<SidebarProps> = ({ className, categories, sizes }) => {
  const {
    storeMemoCategory: [selectCategory, setCategory],
    storeMemoSize: [selectSize, setSize],
    // useCategory: { selectCategory, setCategory },
    // useSize: { selectSize, setSize },
  } = useContext<IHomeContext>(HomeContext);

  // const {
  //   store: [state, dispatch],
  // } = useContext<IAppContext>(AppContext);
  //
  // const {
  //   productState: { selectCategory, selectSize },
  // } = state;

  const handleSelectCategory = (item: CategorySizeModel | null): void => {
    // dispatch(ProductAction.selectCategory(item));
    setCategory(item);
  };

  const handleSelectSize = (item: SizeModel | null): void => {
    // dispatch(RootAction.selectSize(item));
    setSize(item);
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
