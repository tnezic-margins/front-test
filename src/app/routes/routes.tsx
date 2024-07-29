import { RootPage } from "pages/recipes";
import { type RouteObject } from "react-router-dom";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <RootPage />,
  },
];
