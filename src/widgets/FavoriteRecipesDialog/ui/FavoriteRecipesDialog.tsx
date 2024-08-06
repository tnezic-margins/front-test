import { RecipeCardList } from "entities/recipe";
import { ReactNode } from "react";
import { useAppSelector } from "shared/lib";
import { DialogWrapper } from "shared/ui/elements/Dialog/DialogWrapper";

type FavoriteRecipesDialogProps = {
  dialogTriggerButton: ReactNode | string;
};

export const FavoriteRecipesDialog = ({
  dialogTriggerButton,
}: FavoriteRecipesDialogProps) => {
  const favoriteRecipes = useAppSelector(
    (state) => state.recipes.favoriteRecipes
  );

  const isFavoritesRecipesEmpty = favoriteRecipes.length === 0;

  return (
    <DialogWrapper
      dialogTitle="Favorite recipes"
      dialogTriggerButton={dialogTriggerButton}
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
