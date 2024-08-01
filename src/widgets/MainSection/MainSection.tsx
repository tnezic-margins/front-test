import { useGetSingleRecipeQuery } from "entities/recipe";
import { ComponentProps } from "react";
import { useParams } from "react-router-dom";
import { DataGroup } from "shared/ui";

type MainSectionProps = {
  className?: ComponentProps<"div">["className"];
};

export const MainSection = ({ className }: MainSectionProps) => {
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
      <div className={`flex flex-col gap-7 max-w-[48rem] ${className}`}>
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-bold">{data.name}</h1>

          <img src={data?.image} className="w-[260px] rounded-md" />
        </div>

        <DataGroup labelText="Ingredients:" items={data.ingredients} />

        <DataGroup
          labelText="Instructions:"
          items={data.instructions}
          listItemType="text"
        />
      </div>
    )
  );
};
