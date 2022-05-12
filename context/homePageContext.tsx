import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useMemo,
  useState,
} from "react";
import { CategorySizeModel, SizeModel } from "../interfaces/product.interface";

type IStoreCategoryState = [
  CategorySizeModel | null,
  Dispatch<SetStateAction<any>>
];
type IStoreSizeState = [SizeModel | null, Dispatch<SetStateAction<any>>];
type IActivePageState = [number, Dispatch<SetStateAction<any>>];

export interface IHomeContext {
  storeMemoCategory: IStoreCategoryState;
  storeMemoSize: IStoreSizeState;
  storeMemoActivePage: IActivePageState;
}

export const initialHomeContext: IHomeContext = {
  storeMemoCategory: [null, () => undefined],
  storeMemoSize: [null, () => undefined],
  storeMemoActivePage: [1, () => undefined],
};

export const HomeContext = createContext<IHomeContext>(initialHomeContext);

export const HomeProvider = ({ children }: PropsWithChildren<IHomeContext>) => {
  const [selectCategory, setCategory] = useState(null);
  const [selectSize, setSize] = useState(null);
  const [activePage, setActivePage] = useState(1);

  const storeMemoCategory = useMemo<IStoreCategoryState>(
    () => [selectCategory, setCategory],
    [selectCategory]
  );

  const storeMemoSize = useMemo<IStoreSizeState>(
    () => [selectSize, setSize],
    [selectSize]
  );
  const storeMemoActivePage = useMemo<IActivePageState>(
    () => [activePage, setActivePage],
    [activePage]
  );

  return (
    <HomeContext.Provider
      value={{
        storeMemoCategory,
        storeMemoSize,
        storeMemoActivePage,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};
