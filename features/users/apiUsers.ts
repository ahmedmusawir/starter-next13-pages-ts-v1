import { Filter } from "@/global-interfaces";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const dataSelect =
  "select=firstName,lastName,image,gender,bank,university,address,university,username";

export const apiUsers = createApi({
  reducerPath: "apiUsers",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com",
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: ({ filter }: { filter: Filter }) => {
        switch (filter.type) {
          case "search":
            return `users/search?q=${filter.value}`;
          case "card":
            return `users/filter?key=bank.cardType&value=${filter.value}&${dataSelect}`;
          case "currency":
            return `users/filter?key=bank.currency&value=${filter.value}&${dataSelect}`;
          case "gender":
            return `users/filter?key=gender&value=${filter.value}&${dataSelect}`;
          default:
            return `users?limit=8&${dataSelect}`;
        }
      },
    }),
  }),
});

export const { useGetUsersQuery } = apiUsers;
