import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import { baseApi } from "../../shared/api/baseApi";
import { errorMiddleware } from "./errorMiddleware";

export const store = configureStore({
  reducer: rootReducer,
  // Adding the api middleware enables caching, invalidation, polling,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware, errorMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
