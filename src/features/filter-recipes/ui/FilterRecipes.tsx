import { RecipeCardList } from "entities/recipe";
import { Chip } from "shared/ui";
import {
  INITIAL_TAGS_LENGTH,
  TAGS_LENGTH,
  useFilterRecipes,
} from "../model/filter-recipes";

export const FilterRecipes = () => {
  const {
    isFetching,
    isLoading,
    recipes,
    setFilter,
    setTags,
    tags,
    defaultTags,
  } = useFilterRecipes();

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row gap-1 overflow-x-auto">
        {tags.map((item) => (
          <Chip
            key={item.id}
            id={item.id}
            text={item.value}
            isActive={item.isActive}
            onClick={(id, text) => {
              setTags(() =>
                tags.map((tag) => {
                  if (tag.id === id) {
                    if (tag.isActive) {
                      setFilter(null);
                    } else {
                      setFilter(text);
                    }

                    return { ...tag, isActive: !tag.isActive };
                  } else {
                    return { ...tag, isActive: false };
                  }
                })
              );
            }}
          />
        ))}

        {tags.length === INITIAL_TAGS_LENGTH ? (
          <Chip text="..." onClick={() => setTags(defaultTags(TAGS_LENGTH))} />
        ) : (
          <Chip text="⬅️" onClick={() => setTags(defaultTags())} />
        )}
      </div>

      {isLoading || isFetching ? (
        <p>loading...</p>
      ) : (
        <RecipeCardList recipes={recipes ?? []} />
      )}
    </div>
  );
};
