import { ActionType } from "../root.action";
import { ProductStateType } from "./product.state";
import { ProductActionType } from "./product.action";
// import { ProductModel } from "../../interfaces/product.interface";

export const ProductReducer = (
  state: ProductStateType,
  { type, payload }: ActionType
): ProductStateType => {
  switch (type) {
    // case ProductActionType.fill: {
    //   return { ...state, products: payload as ProductModel[] };
    // }
    // case ProductActionType.selectPagePagination: {
    //   return { ...state, activePage: payload as number };
    // }
    // case ProductActionType.nextPagesPagination: {
    //   return {
    //     ...state,
    //     activePage: startPage(payload, state.activePage),
    //   };
    // }
    // case ProductActionType.prevPagesPagination: {
    //   return {
    //     ...state,
    //     activePage:
    //       startPage(payload, state.activePage, -1) > 0
    //         ? startPage(payload, state.activePage, -1)
    //         : state.activePage,
    //   };
    // }
    // case ProductActionType.selectCategoryID: {
    //   return { ...state, selectCategory: payload };
    // }
    // case ProductActionType.selectSizeID: {
    //   return { ...state, selectSize: payload };
    // }
    case ProductActionType.reset: {
      return {
        ...state,
        selectSize: null,
        selectCategory: null,
        activePage: 1,
      };
    }
    default: {
      return { ...state };
    }
  }
};

const startPage = (limit: number, active: number, sign = 1) => {
  return limit * (Math.ceil((active + limit * sign) / limit) - 1) + 1;
};
