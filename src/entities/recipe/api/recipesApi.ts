import { baseApi } from "shared/api";
import { RecipeType, RecipeResponse } from "../model/types";
import { generateRandomNumber } from "shared/lib";

export const recipesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getMultipleRecipes: build.query<RecipeResponse, void>({
      query: () => ({
        url: "/recipes",
      }),
    }),
    getMultipleRecipesByTag: build.query<
      RecipeResponse,
      { tag: string | null }
    >({
      query: ({ tag }) => ({
        url: `/recipes/tag/${tag}`,
      }),
    }),
    getSingleRecipe: build.query<RecipeType, { id?: number }>({
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
  useGetMultipleRecipesByTagQuery,
  useLazyGetMultipleRecipesByTagQuery,
} = recipesApi;
