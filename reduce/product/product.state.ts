import {
  CategorySizeModel,
  ProductModel,
  SizeModel,
} from "../../interfaces/product.interface";

export interface ProductStateType {
  // products: ProductModel[];
  activePage: number;
  selectCategory: CategorySizeModel | null;
  selectSize: SizeModel | null;
}

export const initialProductState: ProductStateType = {
  // products: [],
  activePage: 1,
  selectCategory: null,
  selectSize: null,
};
