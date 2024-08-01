import { useSearchRecipesQuery, RecipesList } from "entities/recipe";
import { useState } from "react";
import { SearchInput } from "shared/ui";
import { useDebounce } from "use-debounce";

export const SearchRecipes = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm] = useDebounce(searchTerm, 300);

  const { data, isLoading } = useSearchRecipesQuery({
    searchTerm: debouncedSearchTerm,
  });

  return (
    <div className="flex flex-col gap-5">
      <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <RecipesList recipes={data?.recipes ?? []} isLoading={isLoading} />
    </div>
  );
};
