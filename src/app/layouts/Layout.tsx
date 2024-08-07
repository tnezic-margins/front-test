import { useState } from "react";
import { Outlet } from "react-router-dom";
import { SIDEBAR_LENGTH, SIDEBAR_LENGTH_COLLAPSED } from "shared/lib";
import { Header } from "widgets/Header/ui/Header";
import { Sidebar } from "widgets/Sidebar";
import { TRANSITION } from "./types";

export const Layout = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex flex-row">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      <div
        style={{
          width: isOpen
            ? `calc(100vw - ${SIDEBAR_LENGTH})`
            : `calc(100vw - ${SIDEBAR_LENGTH_COLLAPSED})`,
          marginLeft: isOpen ? `${SIDEBAR_LENGTH}` : "3rem",
          ...TRANSITION,
        }}
        className="flex flex-col justify-between"
      >
        <Header />

        <div className="gap-8 py-8 pl-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
