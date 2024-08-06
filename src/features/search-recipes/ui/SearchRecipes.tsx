import { RecipesList, useLazySearchRecipesQuery } from "entities/recipe";
import { useState } from "react";
import { SearchInput } from "shared/ui";
import { useDebouncedCallback } from "use-debounce";

export const SearchRecipes = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleOnSearch = useDebouncedCallback(() => {
    trigger({ searchTerm: searchTerm });
  }, 300);

  const [trigger, { data, isLoading }] = useLazySearchRecipesQuery();

  return (
    <div className="flex flex-col gap-5 relative w-[240px]">
      <SearchInput
        searchTerm={searchTerm}
        onChange={(value) => {
          setSearchTerm(value);
          handleOnSearch();
        }}
      />

      {searchTerm !== "" && data?.recipes && (
        <RecipesList
          recipes={data?.recipes ?? []}
          isLoading={isLoading}
          className="h-[200px] absolute top-10 z-50 w-full px-4"
        />
      )}
    </div>
  );
};
