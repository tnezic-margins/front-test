import { RecipeType } from "entities/recipe/model/types";
import { RecipeCard } from "../RecipeCard/RecipeCard";

type RecipeCardListProps = {
  recipes: RecipeType[];
};

export const RecipeCardList = ({ recipes }: RecipeCardListProps) => {
  return (
    <div className="flex flex-row gap-x-6 overflow-x-scroll">
      {recipes.map((it) => (
        <RecipeCard key={it.id} recipe={it} />
      ))}
    </div>
  );
};
