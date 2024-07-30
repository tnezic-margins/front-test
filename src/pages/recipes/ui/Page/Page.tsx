import { RandomRecipe, RecipesList } from "entities/recipe";

export const RootPage = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <h1>Recipes 👨‍🍳</h1>

      <RecipesList />

      <RandomRecipe />
    </div>
  );
};
