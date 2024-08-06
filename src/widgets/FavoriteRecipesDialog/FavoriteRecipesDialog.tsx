import { RecipeCardList } from "entities/recipe";
import { useAppSelector } from "shared/lib";
import { DialogWrapper } from "shared/ui/elements/Dialog/DialogWrapper";

export const FavoriteRecipesDialog = () => {
  const favoriteRecipes = useAppSelector(
    (state) => state.recipes.favoriteRecipes
  );

  const isFavoritesRecipesEmpty = favoriteRecipes.length === 0;

  return (
    <DialogWrapper
      dialogTitle="Favorite recipes"
      dialogTriggerButtonLabel="Favorites"
      dialogContent={(onClick) =>
        isFavoritesRecipesEmpty ? (
          <p>You don't have any favorite recipes yet.</p>
        ) : (
          <RecipeCardList
            recipes={favoriteRecipes ?? []}
            recipeCardClassName="w-[8.5rem]"
            onCardClick={onClick}
          />
        )
      }
    />
  );
};
