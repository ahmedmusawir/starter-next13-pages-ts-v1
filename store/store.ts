import { apiPost } from "@/features/posts/apiPosts";
import { apiProducts } from "@/features/products/apiProducts";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import productSliceReducer from "@/features/products/productSlice";

export const store = configureStore({
  reducer: {
    [apiPost.reducerPath]: apiPost.reducer,
    [apiProducts.reducerPath]: apiProducts.reducer,
    product: productSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([apiPost.middleware, apiProducts.middleware]),
});

setupListeners(store.dispatch);
