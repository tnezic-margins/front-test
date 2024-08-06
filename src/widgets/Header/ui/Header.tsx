import { SearchRecipes } from "features/search-recipes/ui/SearchRecipes";
import { Link } from "react-router-dom";
import { headerItems } from "../model/header";

export const Header = () => {
  return (
    <div className="flex flex-row items-center px-6 bg-[#282828] h-16 justify-between">
      <nav>
        <ul className="flex flex-row gap-10">
          {headerItems.map((header) => (
            <li key={header.id}>
              <Link to="/" className="text-white hover:text-white">
                {header.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <SearchRecipes />
    </div>
  );
};
