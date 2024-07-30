import { useGetSingleRecipeQuery } from "entities/recipe";
import { FetchRecipe } from "features/fetch-recipe";
import { baseApi } from "shared/api";

export const RandomRecipe = () => {
  // const data = useAppSelector((state) => state);

  // const randomRecipe = data.api.queries["getSingleRecipe({})"]?.data?.name;

  const { data } = useGetSingleRecipeQuery({});

  return (
    <div className="flex flex-col gap-4">
      <FetchRecipe />

      <p>{data && data.name}</p>
    </div>
  );
};
