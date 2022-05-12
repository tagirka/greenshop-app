import { ProductModel } from "../../interfaces/product.interface";

export enum CartActionType {
  add = "CART.ADD",
  dic = "CART.DIC",
  inc = "CART.INC",
  del = "CART.DEL.ITEM",
  reset = "CART_RESET",

  favorite = "ADD_TO_FAVORITE",
}

export const CartAction = {
  add: (item: any) => ({
    type: CartActionType.add,
    payload: item,
  }),
  dic: (item: any) => ({
    type: CartActionType.dic,
    payload: item,
  }),
  inc: (item: any) => ({
    type: CartActionType.inc,
    payload: item,
  }),
  del: (item: any) => ({
    type: CartActionType.del,
    payload: item,
  }),

  favorite: (item: any) => ({
    type: CartActionType.favorite,
    payload: item,
  }),

  reset: () => ({
    type: CartActionType.reset,
  }),
};
