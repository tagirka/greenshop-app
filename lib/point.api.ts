export const pointAPI = {
  products: {
    pointGetProducts: () => `${process.env.NEXT_PUBLIC_API_DOMAIN}/product`,
    pointGetProductsSale: () => `${process.env.NEXT_PUBLIC_API_DOMAIN}/sale`,
  },

  apiPaths: {
    getProducts: "/api/product",
    getSearch: "/api/search",
    getSaleProducts: "/api/sale",
    getProductPath: "/api/product",
  },
};
