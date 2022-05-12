import { SizeModel, ViewProductModel } from "./product.interface";
import { ICustomer } from "./customer.interface";

export interface IOrder {
  id: string;
  date: Date;
  cart: ICart[];
  customer: ICustomer;
  address: string;
}

export interface ICart {
  id: string;
  product: ViewProductModel;
  size: SizeModel;
  count: number;
  cost: number;
  total: number;
}
