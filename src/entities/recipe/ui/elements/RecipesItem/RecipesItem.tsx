import { Link } from "react-router-dom";
import { Recipe } from "entities/recipe/model/types";

export const RecipesItem = (item: Recipe) => {
  return (
    <Link to={`./${item.id}`} className="text-sm text-white hover:text-yellow-700 underline-offset-1">
      {item.name}
    </Link>
  );
};
