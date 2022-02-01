import {
  createContext,
  Dispatch,
  PropsWithChildren,
  useMemo,
  useReducer,
} from "react";

import { MainStateType, RootReducer } from "../reduce/root.reducer";

import { ActionType } from "../reduce/root.action";
import { initialProductState } from "../reduce/product/product.state";
import { initialCartState } from "../reduce/cart/cart.reducer";

type IStore = [MainStateType, Dispatch<ActionType>];

export interface IAppContext {
  store: IStore;

  // state: MainStateType;
  // dispatch: Dispatch<ActionType>;
}

export const InitialState: MainStateType = {
  productState: initialProductState,
  cartState: initialCartState,
};

const initialContext: IAppContext = {
  store: [InitialState, () => undefined],
};

export const AppContext = createContext<IAppContext>(initialContext);

export const AppContextProvider = ({ children }: PropsWithChildren<any>) => {
  const initState: MainStateType = {
    ...InitialState,
  };

  const [state, dispatch] = useReducer(RootReducer, initState);
  const storeMemo = useMemo<IStore>(() => [state, dispatch], [state]);

  return (
    <AppContext.Provider value={{ store: storeMemo }}>
      {children}
    </AppContext.Provider>
  );
};
