import React from "react";
import ReactDOM from "react-dom/client";
import { Routes,Route,Router, BrowserRouter} from "react-router-dom";

import App from "./App";
import Pokemon from "./components/Pokemon";
import "./index.css";



ReactDOM.createRoot(document.getElementById("root")).render(
 
  <BrowserRouter>
  
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/pokemon/:value" element={<Pokemon />} />
</Routes>
  </BrowserRouter>

);
