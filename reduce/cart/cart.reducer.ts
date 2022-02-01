import { ActionType } from "../root.action";

export interface CartStateType {
  cart: any;
}

export const initialCartState: CartStateType = {
  cart: [],
};

export const CartReducer = (
  state = initialCartState,
  { type, payload }: ActionType
) => {
  switch (type) {
    default:
      return state;
  }
};
