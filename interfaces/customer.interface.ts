import { IOrder } from "./order.interface";

export interface ICustomer {
  id: string;
  login: string;
  orders: IOrder[];
  address: string;
  payment: string;
}
