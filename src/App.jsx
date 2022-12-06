import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Grow from "./Grow";
import Kingdom from "./Kingdom";
import NavBar from "./NavBar";
import Cart from "./Cart";
import './App.css'

function App() {

  const [mushrooms, setMushrooms] = useState([])

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/grow" element={<Grow mushrooms={mushrooms} setMushrooms={setMushrooms} />} />
        <Route path="/kingdom" element={<Kingdom mushrooms={mushrooms} />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App
