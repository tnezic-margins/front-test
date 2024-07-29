import { ConfigureStoreOptions } from "@reduxjs/toolkit";
import { baseApi } from "../../shared/api/baseApi";
import { recipesReducer } from "entities/recipe";

export const rootReducer: ConfigureStoreOptions["reducer"] = {
  [baseApi.reducerPath]: baseApi.reducer,
  recipes: recipesReducer,
};
