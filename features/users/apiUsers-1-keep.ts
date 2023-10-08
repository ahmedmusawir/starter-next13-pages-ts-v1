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
      query: ({ searchTerm, cardTerm, currencyTerm, genderTerm }) => {
        if (searchTerm) {
          return `users/search?q=${searchTerm}`;
        }

        if (currencyTerm) {
          console.log("CurrencyTerm in api:", currencyTerm);

          // -- Dollar, Euro, Peso, Rial, Ringgit
          return `users/filter?key=bank.currency&value=${currencyTerm}&${dataSelect}`;
        }

        if (genderTerm) {
          console.log("GenderTerm in api:", genderTerm);

          // -- male/female
          return `users/filter?key=gender&value=${genderTerm}&${dataSelect}`;
        }

        if (cardTerm) {
          console.log("CardTerm in api:", cardTerm);
          // -- visa, mastercard, jcb, bankcard, americanexpress
          return `users/filter?key=bank.cardType&value=${cardTerm}&${dataSelect}`;
        }

        return `users?limit=8&${dataSelect}`;
      },
    }),
  }),
});

export const { useGetUsersQuery } = apiUsers;
