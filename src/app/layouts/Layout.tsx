import { Outlet } from "react-router-dom";
import { SIDEBAR_LENGTH } from "shared/lib";
import { Sidebar } from "widgets/Sidebar";

export const Layout = () => {
  return (
    <>
      <Sidebar />

      <div
        style={{
          width: `calc(100vw - ${SIDEBAR_LENGTH})`,
          marginLeft: `${SIDEBAR_LENGTH}`,
        }}
        className="flex flex-col gap-8 p-8 justify-between"
      >
        <Outlet />
      </div>
    </>
  );
};
