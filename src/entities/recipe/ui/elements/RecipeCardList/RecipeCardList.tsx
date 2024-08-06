import { RecipeType } from "entities/recipe/model/types";
import { RecipeCard } from "../RecipeCard/RecipeCard";
import { ComponentProps } from "react";

type RecipeCardListProps = {
  recipes: RecipeType[];
  className?: ComponentProps<"div">["className"];
  recipeCardClassName?: ComponentProps<"div">["className"];
  onCardClick?: () => void;
};

export const RecipeCardList = ({
  recipes,
  className,
  recipeCardClassName,
  onCardClick,
}: RecipeCardListProps) => {
  return (
    <div
      className={`flex flex-row gap-x-6 overflow-x-scroll ${className}`}
    >
      {recipes.map((it) => (
        <RecipeCard
          key={it.id}
          recipe={it}
          className={recipeCardClassName}
          onCardClick={onCardClick}
        />
      ))}
    </div>
  );
};
