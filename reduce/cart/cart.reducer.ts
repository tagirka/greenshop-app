import { ActionType } from "../root.action";
import { CartActionType } from "./cart.action";
import {
  CartItemModel,
  ProductModel,
  SizeModel,
} from "../../interfaces/product.interface";

export interface CartStateType {
  cart: CartItemModel[];
}

export const initialCartState: CartStateType = {
  cart: [],
};

const calculateSum = (cost: number = 0, count: number = 0): number => {
  console.log("cost", cost, "count", count);
  if (cost <= 0 || count <= 0) return 0;

  return +cost.toFixed(2) * Math.round(count);
};

const correctCount = (
  cart: CartItemModel[],
  product: ProductModel,
  size: SizeModel,
  countBuy: number
): CartItemModel[] => {
  const itemIdx = cart.findIndex(
    (p) => p.product._id === product._id && p.size._id === size._id
  );

  if (itemIdx < 0)
    return [
      ...cart,
      {
        product,
        size,
        count: countBuy,
        sum: calculateSum(product.cost, countBuy),
      },
    ];

  const currentItem = cart[itemIdx];

  const newCart = cart.filter((c) => c != currentItem);
  const newCount =
    cart[itemIdx].count + countBuy ? cart[itemIdx].count + countBuy : 0;

  return [
    ...newCart,
    {
      ...currentItem,
      count: newCount,
      size,
      sum: calculateSum(currentItem.product.cost, newCount),
    },
  ].filter((c) => c.sum !== 0);
};

export const CartReducer = (
  state = initialCartState,
  { type, payload }: ActionType
) => {
  switch (type) {
    case CartActionType.add: {
      const { product, count: countBuy, size } = payload as CartItemModel;

      const newCart = correctCount(state.cart, product, size, countBuy);

      return {
        ...state,
        cart: newCart,
      };
    }
    case CartActionType.inc: {
      console.log("cart reducer state + item", payload);
      return state;
    }
    case CartActionType.dic: {
      console.log("cart reducer state - item", payload);
      return state;
    }

    case CartActionType.del: {
      console.log("cart reducer state del item", payload);
      return state;
    }

    case CartActionType.reset: {
      console.log("cart reset", payload);
      return state;
    }

    case CartActionType.favorite: {
      console.log("add item to favorite", payload);
      return state;
    }
    default:
      return state;
  }
};
