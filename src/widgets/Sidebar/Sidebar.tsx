import { SearchRecipes } from "features/search-recipes/ui/SearchRecipes";
import { SIDEBAR_LENGTH } from "shared/lib";
import { Button } from "shared/ui";

export const Sidebar = () => {
  return (
    <div
      style={{ width: SIDEBAR_LENGTH }}
      className="flex flex-col self-start items-center gap-5 py-8 px-5 bg-[#282828] h-[100vh] fixed left-0 top-0 bottom-0 rounded-sm"
    >
      <a href="/">
        <h1 className="text-xl text-white">Recipes 👨‍🍳</h1>
      </a>

      <Button size="sm">Favorites</Button>

      <SearchRecipes />
    </div>
  );
};
