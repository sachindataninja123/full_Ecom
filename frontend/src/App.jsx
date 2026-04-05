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
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import ResetPassword from "./components/ResetPassword/ResetPassword";
import CheckOut from "./pages/CheckOut/CheckOut";
import MyProfile from "./pages/MyProfile/MyProfile";

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
        <Route path="/emailverify" element={<EmailVerify />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
         <Route path="/checkout" element={<CheckOut />} />

         <Route path="/myprofile" element={<MyProfile />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
