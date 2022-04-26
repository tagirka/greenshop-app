import {
  CategorySizeModel,
  SizeModel,
} from "../../interfaces/product.interface";

export enum ProductActionType {
  fill = "PRODUCT.FILL",
  selectPagePagination = "PRODUCT.PAGE.PAGINATION.SELECT",
  nextPagesPagination = "PRODUCT.NEXT.PAGES.PAGINATION",
  prevPagesPagination = "PRODUCT.PREV.PAGES.PAGINATION",
  selectCategoryID = "PRODUCT.BY.CATEGORY",
  selectSizeID = "PRODUCT.BY.SIZE",
  reset = "PRODUCT.RESET",
}

export const ProductAction = {
  resetProduct: <ActionType>() => ({ type: ProductActionType.reset }),
  // selectPagePagination: <ActionType>(selectPageIdx: number) => ({
  //   type: ProductActionType.selectPagePagination,
  //   payload: selectPageIdx,
  // }),
  // nextPagesPagination: <ActionType>(limit: number) => ({
  //   type: ProductActionType.nextPagesPagination,
  //   payload: limit,
  // }),
  // prevPagesPagination: <ActionType>(limit: number) => ({
  //   type: ProductActionType.prevPagesPagination,
  //   payload: limit,
  // }),
  // selectCategory: <ActionType>(categoryID: CategorySizeModel | null) => ({
  //   type: ProductActionType.selectCategoryID,
  //   payload: categoryID,
  // }),
  // selectSize: <ActionType>(sizeID: SizeModel | null) => ({
  //   type: ProductActionType.selectSizeID,
  //   payload: sizeID,
  // }),
};
