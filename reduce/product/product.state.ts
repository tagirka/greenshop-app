import {
  CategoryModelCount,
  ProductModel,
  SizeModelCount,
} from "../../interfaces/product.interface";

export interface ProductStateType {
  products: ProductModel[];
  activePage: number;
  selectCategory: CategoryModelCount | null;
  selectSize: SizeModelCount | null;
}

export const initialProductState: ProductStateType = {
  products: [],
  activePage: 1,
  selectCategory: null,
  selectSize: null,
};
