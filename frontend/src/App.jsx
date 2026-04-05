import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ProductListing from "./pages/ProductListing/ProductListing";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Login from "./pages/Login/Login";
import Regsiter from "./pages/Register/Register";
import CartPage from "./components/Cart/CartPage";
import EmailVerify from "./components/Verify/EmailVerify";



const App = () => {


  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productListing" element={<ProductListing />} />
        <Route path="/product/:id" element={<ProductDetails />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Regsiter />} />
        <Route path="/cartpage" element={<CartPage />} />
         <Route path="/verify" element={<EmailVerify />} />
      </Routes>
      <Footer />

     
    </div>
  );
};

export default App;
