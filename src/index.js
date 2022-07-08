import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css";
import GlobalStyle from "./styles/global";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <GlobalStyle />
    <App />
  </Router>
);
