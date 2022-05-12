export const api = {
  // products: {
  //   pointGetProducts: () => `${process.env.NEXT_PUBLIC_API_DOMAIN}/product`,
  //   pointGetProductsSale: () => `${process.env.NEXT_PUBLIC_API_DOMAIN}/sale`,
  //   // pointGetRatingProducts: () =>
  //   //   `${process.env.NEXT_PUBLIC_API_DOMAIN}/rating`,
  // },

  outPaths: {
    getProducts: `${process.env.NEXT_PUBLIC_API_DOMAIN}/product`,
    getProductsSale: `${process.env.NEXT_PUBLIC_API_DOMAIN}/sale`,
    getRatingProducts: `${process.env.NEXT_PUBLIC_API_DOMAIN}/rating`,
  },

  paths: {
    getProducts: "/api/product",
    getSearch: "/api/search",
    getSaleProducts: "/api/sale",
    getProductPath: "/api/product",
    getRating: "/api/rating",
  },
};
