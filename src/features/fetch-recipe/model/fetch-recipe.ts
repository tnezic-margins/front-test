import { useLazyGetSingleRecipeQuery } from "entities/recipe/api/recipesApi";
import { Recipe } from "entities/recipe/model/types";
import { useState } from "react";

export const useGetRandomRecipe = () => {
  const [randomRecipe, setRandomRecipe] = useState<Recipe | null>(null);

  const [trigger] = useLazyGetSingleRecipeQuery({});

  const getRecipe = async () => {
    const { data } = await trigger({});

    if (data) {
      setRandomRecipe(data);
    }
  };

  return {
    randomRecipe,
    getRecipe,
  };
};
