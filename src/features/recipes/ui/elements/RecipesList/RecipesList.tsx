// import { useAppDispatch } from "../../../../../shared/lib/utils/typedRedux";
// import { useRecipesQuery } from "../../../../../entities/recipe/api/recipesApi";
// import { setRecipes } from "../../../../../entities/recipe/model/recipesSlice";
import { useAppDispatch } from "shared/lib";
import { useGetMultipleRecipesQuery } from "entities/recipe/api/recipesApi";
import { setRecipes } from "entities/recipe/model/recipesSlice";
import { useEffect } from "react";
import { RecipesItem } from "../RecipesItem/RecipesItem";

const NUMBER_OF_ITEMS = 7;

export const RecipesList = () => {
  const { data, error, isLoading } = useGetMultipleRecipesQuery();

  const dispatch = useAppDispatch();

  const recipes = data?.recipes;

  useEffect(() => {
    if (recipes) {
      dispatch(setRecipes(recipes));
    }
  }, [recipes, dispatch]);

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
