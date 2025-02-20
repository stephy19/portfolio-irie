import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import Projets from "@/pages/projets";

import AboutPage from "@/pages/about";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<Projets />} path="/projets" />
      <Route element={<AboutPage />} path="/about" />
    </Routes>
  );
}

export default App;
