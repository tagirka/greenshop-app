import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useState,
} from "react";
import { CategorySizeModel, SizeModel } from "../interfaces/product.interface";

export interface IHomeContext {
  useActivePage: {
    activePage: number;
    setActivePage: Dispatch<SetStateAction<any>>;
  };

  useCategory: {
    selectCategory: CategorySizeModel | null;
    setCategory: Dispatch<SetStateAction<any>>;
  };
  useSize: {
    selectSize: SizeModel | null;
    setSize: Dispatch<SetStateAction<any>>;
  };
}

export const initialHomeContext: IHomeContext = {
  useActivePage: {
    activePage: 1,
    setActivePage: () => {},
  },

  useCategory: {
    selectCategory: null,
    setCategory: () => {},
  },
  useSize: {
    selectSize: null,
    setSize: () => {},
  },
};

export const HomeContext = createContext<IHomeContext>(initialHomeContext);

export const HomeProvider = ({ children }: PropsWithChildren<IHomeContext>) => {
  const [selectCategory, setCategory] = useState(null);
  const [selectSize, setSize] = useState(null);
  const [activePage, setActivePage] = useState(1);

  return (
    <HomeContext.Provider
      value={{
        ...initialHomeContext,
        useActivePage: {
          activePage,
          setActivePage,
        },
        useCategory: {
          selectCategory,
          setCategory,
        },
        useSize: {
          selectSize,
          setSize,
        },
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};
