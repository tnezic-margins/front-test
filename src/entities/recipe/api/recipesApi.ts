import { baseApi } from "shared/api";
import { Recipe, RecipeResponse } from "../model/types";

export const recipesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getMultipleRecipes: build.query<RecipeResponse, void>({
      query: () => ({
        url: "/recipes",
      }),
    }),
    getSingleRecipe: build.query<Recipe, number>({
      query: (id) => {
        return {
          url: `/recipes/${id}`,
        };
      },
    }),
  }),
});

export const { useGetMultipleRecipesQuery, useLazyGetSingleRecipeQuery } =
  recipesApi;
