import { RecipeType } from "entities/recipe/model/types";
import { ComponentProps } from "react";
import { useNavigate } from "react-router-dom";
import { HeartIcon } from "@heroicons/react/24/solid";
import { HeartIcon as HeartIconOutlined } from "@heroicons/react/24/outline";
import { useAppDispatch, useAppSelector } from "shared/lib";
import {
  removeFavoriteRecipe,
  setFavoriteRecipes,
} from "entities/recipe/model/recipesSlice";

type RecipeCardProps = {
  recipe: RecipeType;
  className?: ComponentProps<"div">["className"];
  onCardClick?: () => void;
};

const heartIconSharedStyles = {
  position: "absolute",
  width: "1.8rem",
  right: 0,
  color: "red",
};

export const RecipeCard = ({
  recipe,
  className,
  onCardClick,
}: RecipeCardProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const favoriteRecipes = useAppSelector(
    (state) => state.recipes.favoriteRecipes
  );

  const ids = favoriteRecipes.map((item: RecipeType) => item.id);

  const isFavorite = ids.includes(recipe.id);

  return (
    <div
      className={`relative flex flex-col gap-2 items-center text-center bg-[#282828] w-[8.5rem] min-w-[8.5rem] h-[190px] rounded-md ${className}`}
      onClick={() => {
        onCardClick?.();
        navigate(`/${recipe.id}`);
      }}
    >
      <img src={recipe.image} />

      <p className="text-sm text-white">{recipe.name}</p>

      {isFavorite ? (
        <HeartIcon
          style={{ ...(heartIconSharedStyles as any) }}
          onClick={(e) => {
            e.stopPropagation();
            dispatch(removeFavoriteRecipe(recipe.id));
          }}
        />
      ) : (
        <HeartIconOutlined
          style={{ ...(heartIconSharedStyles as any) }}
          onClick={(e) => {
            e.stopPropagation();
            dispatch(setFavoriteRecipes(recipe));
          }}
        />
      )}
    </div>
  );
};
