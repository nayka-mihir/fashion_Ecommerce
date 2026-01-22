import React, { useState } from "react";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import Navbar from "./components/layout/Navbar";
import ProductDetail from "./pages/productDetail";
import Type from "./components/Type";
import Login from "./components/Login_Sign/Login";

function App() {
 
  const [showlogin,Setshowlogin] = useState(false);
 
  return (
    <div className="px-6 sm:px-[5vw] md:px-[6vw] lg:px-[2vw]" > {/* corrected vw unit & removed extra bracket */}
    {showlogin?<Login Setshowlogin={Setshowlogin}/>:<></>}
      <Navbar Setshowlogin={Setshowlogin}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/type/:id" element={<Type/>}/>
        <Route path="/product/:categoryId/:subId" element={<Product />} />
        <Route path="/productDetail/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
