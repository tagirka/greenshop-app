import React, { useContext } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

import { PaginationProps } from "./paginationsProps";
import styles from "./pagination.module.css";

import { RootAction } from "../../reduce/root.action";
import { AppContext } from "../../context/appContext";
import { PaginationRender } from "./PaginationRender";
import { createArray } from "../../lib/utils";
import { HomeContext, IHomeContext } from "../../context/homePageContext";

const startPage = (limit = 4, activePage = 1, sign = 1) => {
  return Math.ceil(activePage / limit) * limit - (limit - 1);
};

const Pagination = ({
  limit,
  className,
  ...props
}: PaginationProps): JSX.Element => {
  const {
    store: [
      {
        productState: { activePage: Page },
      },
      dispatch,
    ],
  } = useContext(AppContext);

  const { useActivePage } = useContext<IHomeContext>(HomeContext);

  const onSelect = (i: number | "next" | "prev") => {
    switch (i) {
      case "next": {
        useActivePage.setActivePage(
          startPage(limit, useActivePage.activePage + limit)
        );
        // dispatch(RootAction.nextPagesPagination(limit));

        return;
      }
      case "prev": {
        // dispatch(RootAction.prevPagesPagination(limit));

        useActivePage.setActivePage(
          startPage(
            limit,
            useActivePage.activePage - limit
              ? useActivePage.activePage - limit
              : 1
          )
        );

        return;
      }

      default:
        // dispatch(RootAction.selectPagePagination(i));
        useActivePage.setActivePage(i);
    }
  };

  return (
    <section className={[className, styles.pagination].join(" ")} {...props}>
      <div className={styles.wrapper}>
        {useActivePage.activePage > limit && (
          <PaginationRender onSelected={() => onSelect("prev")}>
            <FaAngleLeft />
          </PaginationRender>
        )}

        {createArray(limit).map((p, idx) => {
          return (
            <PaginationRender
              onSelected={() =>
                onSelect(idx + startPage(limit, useActivePage.activePage))
              }
              key={idx}
              select={
                useActivePage.activePage ===
                idx + startPage(limit, useActivePage.activePage)
              }
            >
              {idx + startPage(limit, useActivePage.activePage)}
            </PaginationRender>
          );
        })}

        <PaginationRender onSelected={() => onSelect("next")}>
          <FaAngleRight />
        </PaginationRender>
      </div>
    </section>
  );
};

export default Pagination;
