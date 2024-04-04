import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ScopedCssBaseline from "@mui/material/ScopedCssBaseline";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ScopedCssBaseline>
      <App />
    </ScopedCssBaseline>
  </React.StrictMode>
);
