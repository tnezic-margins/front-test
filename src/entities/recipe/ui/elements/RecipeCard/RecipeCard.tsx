import { RecipeType } from "entities/recipe/model/types";
import { Link } from "react-router-dom";

type RecipeCardProps = {
  recipe: RecipeType;
};

export const RecipeCard = ({ recipe }: RecipeCardProps) => {
  return (
    <Link to={`/${recipe.id}`}>
      <div className="flex flex-col gap-2 items-center text-center bg-[#282828] w-[8.5rem] h-[190px] rounded-md">
        <img src={recipe.image} />

        <p className="text-sm text-white">{recipe.name}</p>
      </div>
    </Link>
  );
};
