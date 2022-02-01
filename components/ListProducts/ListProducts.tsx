import React, { FC, useContext, useEffect, useState } from "react";
import classNames from "classnames";

import { ListProductsProps } from "./ListProducts.props";
import styles from "./ListProducts.module.css";

import CardProduct from "./CardProduct/CardProduct";
import { AppContext, IAppContext } from "../../context/appContext";

import { ViewProductModel } from "../../interfaces/product.interface";

import { ListProductViewSelect, TopList } from "./TopList/TopList";
import { getProductsWithSelected } from "../../lib/getProductsWithSelected.api";
import { getProductsOnSale } from "../../lib/getProductsOnSale.api";

const ListProducts: FC<ListProductsProps> = ({ className, products }) => {
  const {
    store: [
      {
        productState: { selectCategory, selectSize, activePage },
      },
      dispatch,
    ],
  } = useContext<IAppContext>(AppContext);

  const [viewProducts, setViewProducts] = useState<ViewProductModel[]>([
    ...products,
  ]);

  const [selectView, setSelectView] = useState(ListProductViewSelect.all);

  const handleViewSelect = (select: ListProductViewSelect) => {
    setSelectView(select);
  };

  useEffect(() => {
    switch (selectView) {
      case ListProductViewSelect.all: {
        (async () => {
          const selectedProducts = await getProductsWithSelected(
            [
              !selectCategory ? null : selectCategory?._id,
              !selectSize ? null : selectSize?._id,
            ],
            activePage.toString()
          );
          setViewProducts(selectedProducts);
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

      default:
        setViewProducts(products);
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
