import React from "react";
import ReactDOM from "react-dom/client";
import { StyledGlobal } from "./styles/global";
import App from "./App";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <StyledGlobal />
      <Toaster />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
