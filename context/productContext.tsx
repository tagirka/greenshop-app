import { createContext, PropsWithChildren, useState } from "react";
import { ProductModel } from "../interfaces/product.interface";

export interface IProductContext {
  product: ProductModel | null;
  setProduct: (item: ProductModel) => void;
}

export const initialProductContext = {
  product: null,
  setProduct: (f: any) => f,
};

export const ProductContext = createContext<IProductContext>(
  initialProductContext
);

export const ProductProvider = ({
  product,
  children,
}: PropsWithChildren<IProductContext>) => {
  const [productState, setProductState] = useState<ProductModel>(
    product as ProductModel
  );

  const setProduct = (newProduct: ProductModel) => {
    setProductState(newProduct);
  };

  return (
    <ProductContext.Provider value={{ product: productState, setProduct }}>
      {children}
    </ProductContext.Provider>
  );
};
