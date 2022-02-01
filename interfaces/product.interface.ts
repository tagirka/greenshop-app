export interface CategoryModel {
  _id: string;
  title: string;
}

export interface CategoryModelCount extends CategoryModel {
  count: number;
}

export interface SizeModel {
  _id: string;
  title: string;
}

export interface SizeModelCount extends SizeModel {
  count: number;
}

export interface SaleModel {
  _id: string;
  product: ProductModel;
  dateStart?: Date;
  dateEnd?: Date;
  costOnSale: number;
  costOnSalePercent: number;
}

export interface SaleModelStrict {
  productID: string;
  cost: number;
  costOnSalePercent: number;
  costOnSale: number;
}

export interface ProductModel {
  _id: string;
  title: string;
  image: string;
  cost: number;
  categories: CategoryModel[];
  size: SizeModel[];
}

export interface ViewProductModel extends ProductModel {
  sale?: boolean;
  costOnSale?: number | null | undefined;
  costOnSalePercent?: number | null;
}
