import { RecipeType } from "entities/recipe";
import { useAppDispatch, useAppSelector } from "shared/lib";
import {
  removeFavoriteRecipe,
  setFavoriteRecipes,
} from "entities/recipe/model/recipesSlice";

export const useMutateFavoriteRecipes = (recipe: RecipeType) => {
  const dispatch = useAppDispatch();

  const favoriteRecipes = useAppSelector(
    (state) => state.recipes.favoriteRecipes
  );

  const ids = favoriteRecipes.map((item: RecipeType) => item.id);

  const isFavorite = ids.includes(recipe.id);

  const favorite = () => dispatch(setFavoriteRecipes(recipe));
  const unfavorite = () => dispatch(removeFavoriteRecipe(recipe.id));

  return {
    isFavorite,
    favorite,
    unfavorite,
  };
};
