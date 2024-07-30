import { Recipe } from "entities/recipe/model/types";

export const RecipesItem = (item: Recipe) => {
  return <li>{item.name}</li>;
};
