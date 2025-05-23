import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  BrowserRouter as Router,
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import { Items } from "./Items";
import { Cart } from "./Cart";
import { Home } from "./Home";
import { Layout } from "./Layout";
import { ItemView } from "./ItemView";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            index: true,
            element: <Items />,
          },
          {
            path: "/:itemID",
            element: <ItemView />,
          },
        ],
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
