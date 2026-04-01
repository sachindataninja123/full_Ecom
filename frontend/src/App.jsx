import React from "react";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ProductListing from "./pages/ProductListing/ProductListing";
import ProductDetails from "./pages/ProductDetails/ProductDetails";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productListing" element={<ProductListing />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
