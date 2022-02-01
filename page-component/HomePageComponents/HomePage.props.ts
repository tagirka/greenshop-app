import {
  CategoryModelCount,
  ProductModel,
  SizeModelCount,
} from "../../interfaces/product.interface";

export interface HomePageProps {
  products: ProductModel[];
  categories: CategoryModelCount[];
  sizes: SizeModelCount[];
}
