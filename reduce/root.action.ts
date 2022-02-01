import { ProductAction, ProductActionType } from "./product/product.action";
import { CartAction, CartActionType } from "./cart/cart.action";

export interface ActionType {
  type: ProductActionType | CartActionType;
  payload?: any;
  error?: unknown;
}

export const RootAction = {
  ...ProductAction,
  ...CartAction,
};
