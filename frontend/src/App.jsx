import React from "react";
import Header from "./components/Header/header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
