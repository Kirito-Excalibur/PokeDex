import React from "react";
import ReactDOM from "react-dom/client";
import {
  Routes,
  Route,
  Router,
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from "./App";
import Pokemon from "./components/Pokemon";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/pokemon/:value",
    element: <Pokemon />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
