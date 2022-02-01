export enum CartActionType {
  add = "CART.ADD",
}

export const CartAction = {
  add: (id: string) => ({
    type: CartActionType.add,
  }),
};
