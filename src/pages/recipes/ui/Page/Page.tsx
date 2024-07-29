import { RandomRecipe, RecipesList } from "features/recipes";
import { useAppSelector } from "shared/lib";

export const RootPage = () => {
  const recipes = useAppSelector((state) => state.recipes);

  // console.log(recipes);

  return (
    <div className="flex flex-col items-center gap-4">
      <h1>Recipes 👨‍🍳</h1>

      <RecipesList />

      <RandomRecipe />
    </div>
  );
};
