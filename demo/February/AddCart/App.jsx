import { Navbar } from "./Components/Navbar";
import Products from "./PagesComponent/Products";
import "./App.css";
import React from "react";
import { Footer } from "./Components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Cart } from "./PagesComponent/Cart";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Products></Products>}></Route>
          <Route path="/cart" element={<Cart></Cart>}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
