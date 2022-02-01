import { FC } from "react";
import type { GetStaticProps } from "next";

import { withLayout } from "../Layout/layout";

import {
  CategoryModelCount,
  ProductModel,
  SizeModelCount,
} from "../interfaces/product.interface";
import HomePageComponent from "../page-component/HomePageComponents/HomePageComponent";
import { getStaticAPI } from "../lib/static.api";

export interface IHomeProps extends Record<string, unknown> {
  products: ProductModel[];
  categories: CategoryModelCount[];
  sizes: SizeModelCount[];
}

export const getStaticProps: GetStaticProps<IHomeProps> = async (ctx) => {
  try {
    //TODO load all Product !!!! Need load Favorite Products
    const { products, categories, sizes } = await getStaticAPI.getStaticData();

    if (!products || !categories || !sizes) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        products,
        categories,
        sizes,
      },
      revalidate: 30 * 60,
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};

const Home: FC<IHomeProps> = ({ products, categories, sizes }: IHomeProps) => {
  return (
    <HomePageComponent
      products={products}
      categories={categories}
      sizes={sizes}
    />
  );
};

export default withLayout(Home);
