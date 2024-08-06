import { useGetSingleRecipeQuery } from "entities/recipe";
import { ComponentProps } from "react";
import { useParams } from "react-router-dom";
import { DataGroup } from "shared/ui";
import { MutateFavoriteRecipes } from "features/mutate-favorite-recipes";

type RecipeProps = {
  className?: ComponentProps<"div">["className"];
};

export const Recipe = ({ className }: RecipeProps) => {
  const params = useParams();

  // ?
  const { data, isLoading, isFetching } = useGetSingleRecipeQuery({
    id: params && params.id ? +params.id : undefined,
  });

  if (isLoading || isFetching) {
    return <p>loading...</p>;
  }

  return (
    data && (
      <div className={`flex flex-col gap-7 w-[70%] ${className}`}>
        <div className="flex flex-row">
          <div className="flex flex-col gap-3 w-[40%]">
            <div className="flex flex-row items-center gap-1">
              <h1 className="text-2xl font-bold">{data.name}</h1>

              <MutateFavoriteRecipes recipe={data} />
            </div>

            <img src={data?.image} className="w-[260px] rounded-md" />
          </div>

          <DataGroup
            labelText="Ingredients:"
            items={data.ingredients}
            className="w-[60%] mt-1"
          />
        </div>

        <DataGroup
          labelText="Instructions:"
          items={data.instructions}
          listItemType="text"
        />
      </div>
    )
  );
};
