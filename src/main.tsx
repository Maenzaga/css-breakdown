import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import { Basics } from "./pages/Basics/Basics.tsx";
import { Flex } from "./pages/Flex/Flex.tsx";
import { Grid } from "./pages/Grid/Grid.tsx";
import { Intro } from "./pages/Intro/Intro.tsx";
import { Selectors } from "./pages/Selectors/Selectors.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Intro />} />
          <Route path="selectors" element={<Selectors />} />
          <Route path="basics" element={<Basics />} />
          <Route path="flex" element={<Flex />} />
          <Route path="grid" element={<Grid />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
