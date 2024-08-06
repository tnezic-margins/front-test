import { Link } from "react-router-dom";
import { RecipeType } from "entities/recipe/model/types";

export const RecipesItem = (item: RecipeType) => {
  return (
    <Link to={`./${item.id}`} className="text-sm text-white hover:text-yellow-700 underline-offset-1 w-full">
      {item.name}
    </Link>
  );
};
