import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ContextProvider } from "./contexts/ContextProvider.jsx";
import { AuthContextProvider } from "./contexts/AuthContextProvider.jsx";
import { ColorContextProvider } from "./contexts/ColorContextProvider.jsx";
import "react-circular-progressbar/dist/styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <ContextProvider>
        <ColorContextProvider>
          <App />
        </ColorContextProvider>
      </ContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
