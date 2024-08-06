import { createSlice } from "@reduxjs/toolkit";
import { RecipeType } from "./types";

interface RecipesState {
  favoriteRecipes: RecipeType[];
}

const initialState: RecipesState = { favoriteRecipes: [] };

const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    setFavoriteRecipes: (state, action) => {
      state.favoriteRecipes = [...state.favoriteRecipes, action.payload];
    },
    removeFavoriteRecipe: (state, action) => {
      state.favoriteRecipes = state.favoriteRecipes.filter(
        (recipe) => recipe.id !== action.payload
      );
    },
  },
});

export const { setFavoriteRecipes, removeFavoriteRecipe } =
  recipesSlice.actions;

export const recipesReducer = recipesSlice.reducer;
