import { useLazyGetSingleRecipeQuery } from "entities/recipe/api/recipesApi";
import { Recipe } from "entities/recipe/model/types";
import { useState } from "react";
import { Button } from "shared/ui";

export const RandomRecipe = () => {
  const [randomRecipe, setRandomRecipe] = useState<Recipe | null>(null);
  const [trigger] = useLazyGetSingleRecipeQuery();

  const getRandomRecipe = async () => {
    const randomNum = Math.floor(Math.random() * 10) + 1; // gets random number between 1-10

    const { data } = await trigger(randomNum);

    if (data) setRandomRecipe(data);

    // FIXME: could also store it in redux store
  };

  return (
    <div className="flex flex-col gap-4">
      <Button onClick={getRandomRecipe}>Get random recipe</Button>

      <p>{randomRecipe?.name}</p>
    </div>
  );
};
