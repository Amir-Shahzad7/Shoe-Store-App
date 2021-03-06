import React from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import { Header, Home, Products, ProductDetails, Footer, NotFound, Contact, About } from "./Components";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Products" element={<Products />}></Route>
        <Route path="/Products/:ID" element={<ProductDetails />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <br />
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
