import { combineReducers } from "@reduxjs/toolkit";
import { baseApi } from "../../shared/api/baseApi";
import { recipesReducer } from "entities/recipe";

export const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  recipes: recipesReducer,
});
