import React from "react";
import ReactDOM from "react-dom/client";
import {
  Routes,
  Route,
  Router,
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";

import App from "./App";
import Pokemon from "./components/Pokemon";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <div className="hidden sm:block  opacity-80   w-full h-full bg-[length:200px] bg-[url('assets/pokeball.svg')] fixed z-0"></div>
        <Outlet />
      </div>
    ),
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "pokemon/:value",
        element: <Pokemon />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
