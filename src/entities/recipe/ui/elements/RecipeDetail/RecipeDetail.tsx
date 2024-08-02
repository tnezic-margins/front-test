import { Tag, useGetSingleRecipeQuery } from "entities/recipe";
import { ComponentProps } from "react";
import { useParams } from "react-router-dom";
import { DataGroup } from "shared/ui";

type RecipeDetailProps = {
  className?: ComponentProps<"div">["className"];
};

export const RecipeDetail = ({ className }: RecipeDetailProps) => {
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
      <div className={`flex flex-col gap-4 ${className}`}>
        <DataGroup labelText="Cuisine:" items={[data?.cuisine]} />

        <DataGroup
          labelText="Prep time (minutes):"
          items={[`${String(data?.prepTimeMinutes)}'`]}
        />

        <DataGroup
          labelText="Cook time (minutes):"
          items={[`${String(data?.cookTimeMinutes)}'`]}
        />

        <DataGroup
          labelText="Difficulty:"
          items={[data?.difficulty as string]}
        />

        <DataGroup labelText="Meal type:" items={data?.mealType as any} />

        <DataGroup labelText="Tags:" items={data?.tags as Tag[]} />

        <DataGroup labelText="Rating:" items={[String(data?.rating)]} />
      </div>
    )
  );
};
