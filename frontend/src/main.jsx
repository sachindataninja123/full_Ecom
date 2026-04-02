import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import MyContext from "./context/MyContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MyContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MyContext>
  </StrictMode>,
);
