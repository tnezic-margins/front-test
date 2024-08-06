import { useMutateFavoriteRecipes } from "../model/mutate-favorite-recipes";
import { RecipeType } from "entities/recipe";
import { HeartIcon } from "@heroicons/react/24/solid";
import { HeartIcon as HeartIconOutlined } from "@heroicons/react/24/outline";

type MutateFavoriteRecipesProps = {
  recipe: RecipeType;
  className?: any;
};

export const MutateFavoriteRecipes = ({
  recipe,
  className,
}: MutateFavoriteRecipesProps) => {
  const heartIconSharedStyles = {
    width: "1.8rem",
    right: 0,
    color: "red",
    ...className,
  };

  const { isFavorite, favorite, unfavorite } = useMutateFavoriteRecipes(
    (recipe as RecipeType) ?? {}
  );

  return isFavorite ? (
    <HeartIcon
      style={{ ...(heartIconSharedStyles as any) }}
      onClick={(e) => {
        e.stopPropagation();
        unfavorite();
      }}
    />
  ) : (
    <HeartIconOutlined
      style={{ ...(heartIconSharedStyles as any) }}
      onClick={(e) => {
        e.stopPropagation();
        favorite();
      }}
    />
  );
};
