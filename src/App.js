import Homepage from "./pages/Homepage";
import { Routes, Route } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GamesPage from "./pages/GamesPage";
import SaleEventPage from "./pages/SaleEventPage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Games" element={<GamesPage />} />
        <Route path="/Games/SaleEvent" element={<SaleEventPage />} />
        <Route path="/About" element={<AboutPage />} />
      </Routes>
    </>
  );
}

export default App;
