import { createContext, Dispatch, PropsWithChildren } from "react";

import { MainStateType, RootReducer } from "../reduce/root.reducer";

import { ActionType } from "../reduce/root.action";
import { IOrder } from "../interfaces/order.interface";
import { IUser } from "../interfaces/user.interface";

export interface IAppContext {
  order: IOrder | null;
  user: IUser | null;
}

export const initialContext: IAppContext = {
  order: null,
  user: null,
};

export const AppContext = createContext<IAppContext>(initialContext);

export const AppContextProvider = ({
  children,
}: PropsWithChildren<IAppContext>) => {
  return (
    <AppContext.Provider value={{ order: null, user: null }}>
      {children}
    </AppContext.Provider>
  );
};
