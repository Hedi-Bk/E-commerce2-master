//React Imortations
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
//Bootstrap Imporatations
import "bootstrap/dist/css/bootstrap.min.css";
//
import CartContext from "./context/CartContext";
import ThemeContextProvider from "./context/ThemeContextProvider";
import FilterBar from "./context/FilterBar";
//

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartContext>
      <ThemeContextProvider>
        <FilterBar>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </FilterBar>
      </ThemeContextProvider>
    </CartContext>
  </React.StrictMode>
);
