import React from "react";
import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";
import { getStaticAPI } from "../../lib/static.api";

// export const getStaticPaths: GetStaticPaths = async () => {
//   const { products } = await getStaticAPI.getStaticData();
//
//   const paths = products.map((product) => {
//     return {
//       params: { id: product._id },
//     };
//   });
//
//   console.log("paths", paths);
//
//   return {
//     paths,
//     fallback: false,
//   };
// };

// export const getStaticProps: GetStaticProps = async (context) => {
//   return {
//     props: {
//       product: {},
//     },
//   };
// };

const ProductId = () => {
  const router = useRouter();

  const {
    query: { id },
  } = router;

  return <div>{id}</div>;
};

export default ProductId;
