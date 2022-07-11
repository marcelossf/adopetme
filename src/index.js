import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Providers from "./Providers";
import GlobalStyle from "./styles/global";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <GlobalStyle />
    <Providers>
      <App />
    </Providers>
  </BrowserRouter>
);
