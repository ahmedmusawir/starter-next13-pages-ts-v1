import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiProducts = createApi({
  reducerPath: "apiProducts",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({ searchTerm, categoryTerm }) => {
        if (searchTerm) {
          return `products/search?q=${searchTerm}`;
        }
        if (categoryTerm) {
          return `products/category/${categoryTerm}`;
        }
        return `products?limit=10`;
      },
    }),
    getCategories: builder.query({
      query: () => `products/categories`,
    }),
  }),
});

export const { useGetProductsQuery, useGetCategoriesQuery } = apiProducts;
