import { createSlice } from "@reduxjs/toolkit";
import { Recipe } from "./types";

interface RecipesState {
  recipes: Recipe[] | null;
}

const initialState: RecipesState = { recipes: null };

const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    setRecipes: (state, action) => {
      state.recipes = action.payload;
    },
  },
});

export const { setRecipes } = recipesSlice.actions;

export const recipesReducer = recipesSlice.reducer;
