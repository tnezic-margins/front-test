import { useGetMultipleRecipesQuery } from "entities/recipe/api/recipesApi";
import { RecipesItem } from "../RecipesItem/RecipesItem";

const NUMBER_OF_ITEMS = 7;

export const RecipesList = () => {
  const { data, error, isLoading } = useGetMultipleRecipesQuery();

  const recipes = data?.recipes;

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    <p>error...</p>;
  }

  return (
    <ul>
      {recipes &&
        recipes
          .map((item) => <RecipesItem key={item.id} {...item} />)
          .slice(0, NUMBER_OF_ITEMS)}
    </ul>
  );
};
