import {
  Tag,
  Tags,
  useGetMultipleRecipesQuery,
  useGetMultipleRecipesByTagQuery,
} from "entities/recipe";
import { useState } from "react";

export const INITIAL_TAGS_LENGTH = 10;
export const TAGS_LENGTH = Array.from(Tags).length;

export const useFilterRecipes = () => {
  const [filter, setFilter] = useState<Tag["value"] | null>("");

  const defaultTags = (sliceBound: number = INITIAL_TAGS_LENGTH) =>
    Array.from(Tags)
      .slice(0, sliceBound)
      .map(([, value], index) => {
        return { id: index + 1, value: value, isActive: false };
      });

  const [tags, setTags] = useState(defaultTags());

  const { data: defaultRecipes } = useGetMultipleRecipesQuery();
  const {
    data: filteredByTagRecipes,
    isLoading,
    isFetching,
  } = useGetMultipleRecipesByTagQuery({
    tag: filter,
  });

  const recipes = filteredByTagRecipes?.recipes?.length
    ? filteredByTagRecipes.recipes
    : defaultRecipes?.recipes;

  return {
    recipes,
    isLoading,
    isFetching,
    filter,
    setFilter,
    tags,
    setTags,
    defaultTags,
  };
};
