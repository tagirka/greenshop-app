import { FC } from "react";
import type { GetStaticProps } from "next";

import { withLayout } from "../Layout/layout";

import {
  CategorySizeModel,
  ProductModel,
  SizeModel,
} from "../interfaces/product.interface";
import HomePageComponent from "../page-component/HomePageComponents/HomePageComponent";
import { getStaticAPI } from "../lib/static.api";
import { HomeProvider, initialHomeContext } from "../context/homePageContext";

export interface IHomeProps extends Record<string, unknown> {
  products: ProductModel[];
  categories: CategorySizeModel[];
  sizes: SizeModel[];
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
    <>
      <HomeProvider {...initialHomeContext}>
        <HomePageComponent
          products={products}
          categories={categories}
          sizes={sizes}
        />
      </HomeProvider>
    </>
  );
};

export default withLayout(Home);
