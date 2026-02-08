import React, { useState } from "react";

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product"
import Type from "./components/Type";
import ProductDetail from "./pages/Product/ProductDetail";
import Login from "./pages/Login_Sign/Login"

function App() {
 
  const [showlogin,Setshowlogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
 
  return (
    <div className="px-6 sm:px-[5vw] md:px-[6vw] lg:px-[2vw]" > {/* corrected vw unit & removed extra bracket */}
    {showlogin?<Login Setshowlogin={Setshowlogin}/>:<></>}
      <Navbar Setshowlogin={Setshowlogin} setIsLoggedIn={setIsLoggedIn}/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/type/:id" element={<Type/>}/>
        <Route path="/product/:categoryId/:subId" element={<Product/>} />
        <Route path="/productDetail/:id" element={<ProductDetail/>} />
      </Routes>
    </div>
  );
}

export default App;
