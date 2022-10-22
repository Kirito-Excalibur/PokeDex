import React from "react";
import ReactDOM from "react-dom/client";
import {
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
    path: "pokemon",
    element: <Pokemon />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
