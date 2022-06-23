import Homepage from "./pages/Homepage";
import { Routes, Route } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GamesPage from "./pages/GamesPage";
import SaleEventPage from "./pages/SaleEventPage";
import AboutPage from "./pages/AboutPage";
import MainGamePage from "./pages/MainGamePage";
import { LoginContext } from "./helper/Context";
import { useState } from "react";
import CartPage from "./pages/CartPage";

function App() {
  const [login, setLogin] = useState(false);
  const [cartData, setCartData] = useState([]);

  return (
    <>
      <LoginContext.Provider value={{ login, setLogin, cartData, setCartData }}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Games" element={<GamesPage />} />
          <Route path="/Games/SaleEvent" element={<SaleEventPage />} />
          <Route path="/About" element={<AboutPage />} />
          <Route path="/mainGame/:gamename" element={<MainGamePage />} />
          <Route path="/Cart" element={<CartPage />} />
        </Routes>
      </LoginContext.Provider>
    </>
  );
}

export default App;
