// export interface CategoryModel {
//   _id: string;
//   title: string;
// }

export interface CategorySizeModel {
  _id: string;
  title: string;
  count?: number
}

export interface SizeModel extends CategorySizeModel{
  short?: string;
}

export interface ShortSize {
  _id: string;
  title: "S" | "M" | "L" | "XL";
}

// export interface CategoryModelCount extends CategoryModel {
//   count: number;
// }



// export interface SizeModelCount extends SizeModel {
//   count: number;
// }



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
  image?: string;
  cost: number;
  categories: CategorySizeModel[];
  size: SizeModel[];
  rating?: RatingProductModel | null;
  description?: string;
  review?: ReviewModel[] | null;
  sku?: string;
  editable?: boolean;
}

export interface RatingModel {
  date?: string;
  count: number;
  user?: string;
}

export interface RatingProductModel {
  _id: string;
  product: ProductModel;
  rating: RatingModel;
}

export interface DescriptionProductModel {
  _id: string;
  product: string;
  short: string;
  full?: string;
}

export interface RatingProductStrictModel {
  _id: string;
  product: string;
  rating: RatingModel;
}

export interface ViewProductModel extends ProductModel {
  sale?: boolean;
  costOnSale?: number | null | undefined;
  costOnSalePercent?: number | null;
}

export interface UserModel {
  _id: string;
  email: string;
  password: string;
}

export interface ReviewModel {
  _id: string;
  title: string;
  user: UserModel;
  review: string;
}

export interface CartModel {
  _id: string;
  table: CartItemModel[];
  order: {
    date?: string;
    user?: string;
    count: number;
    sum: number;
  };
}

export interface CartItemModel {
  product: ProductModel;
  size: SizeModel;
  count: number;
  sum?: number;
}

export interface HotProduct {
  _id: string;
  product: ProductModel;
}
