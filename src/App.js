import Homepage from "./pages/Homepage";
import { Routes, Route } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GamesPage from "./pages/GamesPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Games" element={<GamesPage />} />
      </Routes>
    </>
  );
}

export default App;
