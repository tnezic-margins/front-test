import { RecipeType } from "entities/recipe/model/types";
import { ComponentProps } from "react";
import { useNavigate } from "react-router-dom";
import { MutateFavoriteRecipes } from "features/mutate-favorite-recipes";

type RecipeCardProps = {
  recipe: RecipeType;
  className?: ComponentProps<"div">["className"];
  onCardClick?: () => void;
};

export const RecipeCard = ({
  recipe,
  className,
  onCardClick,
}: RecipeCardProps) => {
  const navigate = useNavigate();

  return (
    <div
      className={`relative flex flex-col gap-2 items-center text-center bg-[#282828] w-[8.5rem] min-w-[8.5rem] h-[190px] rounded-md cursor-pointer ${className}`}
      onClick={() => {
        onCardClick?.();
        navigate(`/${recipe.id}`);
      }}
    >
      <img src={recipe.image} />

      <p className="text-sm text-white">{recipe.name}</p>

      <MutateFavoriteRecipes
        recipe={recipe}
        className={{ position: "absolute" }}
      />
    </div>
  );
};
