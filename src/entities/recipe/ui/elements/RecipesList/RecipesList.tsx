import { RecipesItem } from "../RecipesItem/RecipesItem";
import { RecipeType } from "entities/recipe";

type RecipesListProps = {
  recipes: RecipeType[];
  isLoading?: boolean;
};

export const RecipesList = ({ recipes, isLoading }: RecipesListProps) => {
  // ?
  // const { data, error } = useGetMultipleRecipesQuery();
  // const recipes = data?.recipes ?? recipesArr;

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <ul className="flex flex-col gap-2 overflow-y-auto">
      {recipes.map((item) => (
        <RecipesItem key={item.id} {...item} />
      ))}
    </ul>
  );
};
