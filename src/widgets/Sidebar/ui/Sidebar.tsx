import { SIDEBAR_LENGTH } from "shared/lib";
import { FavoriteRecipesDialog } from "widgets/FavoriteRecipesDialog";
import { Dispatch, SetStateAction } from "react";
import { Button } from "shared/ui";
import { HeartIcon } from "@heroicons/react/24/solid";
import { TRANSITION } from "app/layouts/types";
import { IndicatorArrows } from "./elements/IndicatorArrows/IndicatorArrows";

type SidebarProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export const Sidebar = ({ isOpen, setIsOpen }: SidebarProps) => {
  return (
    <div
      style={{
        width: SIDEBAR_LENGTH,
        transform: isOpen ? "translateX(0)" : `translateX(-10rem)`,
        ...TRANSITION,
      }}
      className={`flex flex-col self-start gap-12 pb-8 pt-5 px-5 bg-[#282828] h-[100vh] fixed left-0 top-0 bottom-0 rounded-sm`}
    >
      <div className="flex flex-row items-center self-center">
        <a href="/">
          <h1 className="text-xl text-white">Recipes 👨‍🍳</h1>
        </a>

        <IndicatorArrows isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>

      <FavoriteRecipesDialog
        dialogTriggerButton={
          isOpen ? (
            <Button size="sm">Favorites</Button>
          ) : (
            <HeartIcon
              style={{
                width: "1.5rem",
                alignSelf: "end",
                marginRight: "-8px",
                cursor: "pointer",
                ...TRANSITION,
              }}
            />
          )
        }
      />
    </div>
  );
};
