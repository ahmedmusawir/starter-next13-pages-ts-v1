import { apiPost } from "@/services/apiPosts";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    [apiPost.reducerPath]: apiPost.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiPost.middleware),
});

setupListeners(store.dispatch);
