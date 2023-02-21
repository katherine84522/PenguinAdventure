import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Grow from "./Grow";
import Kingdom from "./Kingdom";
import NavBar from "./NavBar";
import Cart from "./Cart";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {

  const [penguins, setPenguins] = useState([])
  const [cartItems, setCartItems] = useState([])

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/grow" element={<Grow penguins={penguins} setPenguins={setPenguins} />} />
        <Route path="/adventure" element={<Kingdom penguins={penguins} setPenguins={setPenguins} cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
      </Routes>
    </div>
  );
}

export default App
