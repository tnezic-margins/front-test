import { baseApi } from "shared/api";
import { Recipe, RecipeResponse } from "../model/types";
import { generateRandomNumber } from "shared/lib";

export const recipesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getMultipleRecipes: build.query<RecipeResponse, void>({
      query: () => ({
        url: "/recipes",
      }),
    }),
    getSingleRecipe: build.query<Recipe, { id?: number }>({
      query: ({ id }) => {
        const recipeId = !id ? generateRandomNumber(1, 10) : id;

        return {
          url: `/recipes/${recipeId}`,
        };
      },
    }),
    searchRecipes: build.query<RecipeResponse, { searchTerm: string }>({
      query: ({ searchTerm }) => ({
        url: `/recipes/search?q=${searchTerm}&limit=20`,
      }),
    }),
  }),
});

export const {
  useGetMultipleRecipesQuery,
  useLazyGetMultipleRecipesQuery,
  useLazyGetSingleRecipeQuery,
  useGetSingleRecipeQuery,
  useSearchRecipesQuery,
  useLazySearchRecipesQuery,
} = recipesApi;
