import { Button } from "shared/ui";
import { useGetRandomRecipe } from "../model/fetch-recipe";

export const FetchRecipe = () => {
  const { getRecipe } = useGetRandomRecipe();

  return <Button onClick={getRecipe}>Get random recipe</Button>;
};
