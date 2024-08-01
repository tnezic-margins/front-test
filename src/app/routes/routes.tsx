import { Layout } from "app/layouts/Layout";
import { RootPage } from "pages/recipes";
import { type RouteObject } from "react-router-dom";

export const routes: RouteObject[] = [
  {
    element: <Layout />,
    children: [
      {
        index: true,
        element: <RootPage />,
      },
      {
        path: ":id",
        element: <RootPage />,
      },
    ],
  },
];
