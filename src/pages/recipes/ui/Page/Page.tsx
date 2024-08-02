import { Recipe, RecipeDetail } from "entities/recipe";
import { FilterRecipes } from "features/filter-recipes/ui/FilterRecipes";

export const RootPage = () => {
  return (
    <div className="flex flex-col gap-y-12">
      <FilterRecipes />

      <div className="flex flex-row gap-3">
        <Recipe />

        <RecipeDetail />
      </div>
    </div>
  );
};
