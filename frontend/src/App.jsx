import React from "react";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import ProductListing from "./components/ProductListing/ProductListing";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productListing" element={<ProductListing />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
