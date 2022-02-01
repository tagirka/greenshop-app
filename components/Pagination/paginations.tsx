import React, { useContext } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

import { PaginationProps } from "./paginationsProps";
import styles from "./pagination.module.css";

import { RootAction } from "../../reduce/root.action";
import { AppContext } from "../../context/appContext";
import { PaginationRender } from "./PaginationRender";
import { createArray } from "../../lib/utils";

const startPage = (limit: number, activePage: number) => {
  return limit * (Math.ceil(activePage / limit) - 1) + 1;
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

  const onSelect = (i: number | "next" | "prev") => {
    switch (i) {
      case "next": {
        dispatch(RootAction.nextPagesPagination(limit));

        return;
      }
      case "prev": {
        dispatch(RootAction.prevPagesPagination(limit));

        return;
      }

      default:
        dispatch(RootAction.selectPagePagination(i));
    }
  };

  return (
    <section className={[className, styles.pagination].join(" ")} {...props}>
      <div className={styles.wrapper}>
        {Page > limit && (
          <PaginationRender onSelected={() => onSelect("prev")}>
            <FaAngleLeft />
          </PaginationRender>
        )}

        {createArray(limit).map((p, idx) => {
          return (
            <PaginationRender
              onSelected={() => onSelect(idx + startPage(limit, Page))}
              key={idx}
              select={Page === idx + startPage(limit, Page)}
            >
              {idx + startPage(limit, Page)}
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
