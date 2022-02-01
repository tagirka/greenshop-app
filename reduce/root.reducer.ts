import { ProductReducer } from "./product/product.reducer";
import { CartReducer, CartStateType } from "./cart/cart.reducer";

import { ProductStateType } from "./product/product.state";
import { ActionType } from "./root.action";

export type MainStateType = {
  productState: ProductStateType;
  cartState: CartStateType;
};

export const RootReducer = (
  { productState, cartState }: MainStateType,
  action: ActionType
) => ({
  productState: ProductReducer(productState, action),
  cartState: CartReducer(cartState, action),
});
