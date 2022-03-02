import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { withLayout } from "../../Layout/layout";
import ProductPageComponent from "../../page-component/ProductPage/ProductPageComponent";
import { GetStaticPaths, GetStaticProps } from "next";
import axios from "axios";
import { getStaticAPI } from "../../lib/static.api";
import { ProductModel } from "../../interfaces/product.interface";
import { ProductContext, ProductProvider } from "../../context/productContext";

// export const getStaticPaths: GetStaticPaths = async () => {
//   try {
//     const { products } = await getStaticAPI.getStaticData();
//
//     if (!products) {
//       return {
//         paths: [],
//         fallback: false,
//       };
//     }
//
//     const paths = products.map((p) => {
//       return {
//         params: { id: p._id },
//       };
//     });
//
//     return {
//       paths,
//       fallback: false,
//     };
//   } catch (e) {
//     return {
//       paths: [],
//       fallback: false,
//     };
//   }
// };
//
// export const getStaticProps: GetStaticProps = async () => {
//   return {
//     props: {
//       data: true,
//     },
//   };
// };

const ProductId = () => {
  const router = useRouter();

  const {
    query: { id },
  } = router;

  const product_id = Array.isArray(id) ? id.shift() : id;

  return (
    <ProductProvider product={null} setProduct={(f) => f}>
      <ProductPageComponent id={product_id as string} />
    </ProductProvider>
  );
};

export default withLayout(ProductId);
