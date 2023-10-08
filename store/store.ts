import { apiPost } from "@/features/posts/apiPosts";
import { apiProducts } from "@/features/products/apiProducts";
import { apiUsers } from "@/features/users/apiUsers";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import productSliceReducer from "@/features/products/productSlice";
import userSliceReducer from "@/features/users/userSlice";

export const store = configureStore({
  reducer: {
    [apiPost.reducerPath]: apiPost.reducer,
    [apiProducts.reducerPath]: apiProducts.reducer,
    [apiUsers.reducerPath]: apiUsers.reducer,
    product: productSliceReducer,
    user: userSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      apiPost.middleware,
      apiProducts.middleware,
      apiUsers.middleware,
    ]),
});

setupListeners(store.dispatch);
