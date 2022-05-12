import React, { FC, useContext, useEffect, useState } from "react";
import classNames from "classnames";

import { ListProductsProps } from "./ListProducts.props";
import styles from "./ListProducts.module.css";

import CardProduct from "./CardProduct/CardProduct";

import { ViewProductModel } from "../../../interfaces/product.interface";

import { ListProductViewSelect, TopList } from "./TopList/TopList";
import {
  getProductsWithSelected,
  getViewProducts,
} from "../../../lib/getProductsWithSelected.api";
import { getProductsOnSale } from "../../../lib/getProductsOnSale.api";
import { HomeContext } from "../../../context/homePageContext";

const ListProducts: FC<ListProductsProps> = ({ className, products }) => {
  const {
    // useCategory: { selectCategory },
    // useSize: { selectSize },
    // useActivePage: { activePage },
    storeMemoActivePage: [activePage],
    storeMemoCategory: [selectCategory],
    storeMemoSize: [selectSize],
  } = useContext(HomeContext);

  const [viewProducts, setViewProducts] = useState<ViewProductModel[]>([
    ...products,
  ]);

  const [selectView, setSelectView] = useState(ListProductViewSelect.all);

  const handleViewSelect = (select: ListProductViewSelect) => {
    setSelectView(select);
  };

  const getDataFirstPage = async () => {
    const viewStaticProducts = await getViewProducts(
      products.slice(
        0,
        process.env.NEXT_PUBLIC_ITEMS_ON_PAGE
          ? +process.env.NEXT_PUBLIC_ITEMS_ON_PAGE
          : 9
      )
    );
    setViewProducts(viewStaticProducts);
  };

  const getDataSelectedPage = async () => {
    const selectedProducts = await getProductsWithSelected(
      [
        !selectCategory ? null : selectCategory?._id,

        !selectSize ? null : selectSize?._id,
      ],
      activePage.toString()
    );
    setViewProducts(selectedProducts);
  };

  useEffect(() => {
    switch (selectView) {
      case ListProductViewSelect.all: {
        if (activePage === 1 && selectCategory === selectSize) {
          (async () => {
            await getDataFirstPage();
          })();

          break;
        }

        (async () => {
          await getDataSelectedPage();
        })();

        break;
      }
      case ListProductViewSelect.new: {
        if (activePage === 1 && selectCategory === selectSize) {
          (async () => {
            await getDataFirstPage();
          })();

          break;
        }

        (async () => {
          await getDataSelectedPage();
        })();

        break;
      }
      case ListProductViewSelect.sale:
        {
          (async () => {
            const selectedProduct = await getProductsOnSale(
              [
                !selectCategory ? null : selectCategory?._id,

                !selectSize ? null : selectSize?._id,
              ],
              activePage.toString()
            );
            setViewProducts(selectedProduct);
          })();
        }

        break;

      case ListProductViewSelect.default:
        (async () => {
          const viewProducts = await getViewProducts(
            products.slice(
              0,
              process.env.NEXT_PUBLIC_ITEMS_ON_PAGE
                ? +process.env.NEXT_PUBLIC_ITEMS_ON_PAGE
                : 9
            )
          );
          setViewProducts(viewProducts);
        })();

        break;
    }
  }, [selectCategory, selectSize, activePage, selectView]);

  return (
    <>
      {!viewProducts.length ? (
        <>Please change select Category or Size</>
      ) : (
        <section className={classNames(className, styles.wrapper)}>
          <TopList
            className={styles.top}
            activeSelectView={selectView}
            handleSelect={handleViewSelect}
          />

          <div className={styles.body}>
            {viewProducts.map((p, idx) => {
              return (
                <CardProduct key={idx + p.title + p.cost + p.image} item={p} />
              );
            })}
          </div>
        </section>
      )}
    </>
  );
};

export default ListProducts;
