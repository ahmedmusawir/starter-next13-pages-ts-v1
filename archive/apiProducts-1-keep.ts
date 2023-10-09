import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiProducts = createApi({
  reducerPath: "apiProducts",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (searchTerm) => {
        if (searchTerm) {
          return `products/search?q=${searchTerm}`;
        }

        return `products?limit=10`;
      },
    }),
  }),
});

export const { useGetProductsQuery } = apiProducts;
