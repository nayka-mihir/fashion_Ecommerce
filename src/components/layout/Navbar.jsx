import React from 'react'
import { Link } from "react-router-dom";

function Navbar({Setshowlogin}) {
  return (
     <div className="w-full flex  items-center justify-between py-5 shadow-xl text-[#1C1C1C]">
      <div className="flex items-center gap-10">
          <Link to={"/"}>
        <div className="flex justify-between items-center">
            <div className=" mx-5 align-center">Logo</div>
            <div className="text-4xl font-'Playfair Display', serif" id="Logo-Name">Golden Luxe</div>
        </div>
          </Link>
        <div className="flex justify-between">
            <div className="mx-2">location <span>navsari</span></div>
            {/* <div>navsari</div> */}
        </div>
        <div className="flex items-center gap-5 w-[280px] bg-[#f1f1f1] rounded-sm px-2 ">
                <h4>icon</h4>
                <input className="bg-transparent text-[#333]" type="text" placeholder="search " />
        </div>
      </div>
      <div className="flex gap-10 pr-5 items-center">
        <div>
          <h3>Seller</h3>
        </div>
        <div><img src="mm" alt="notification" /></div>
        <div><img src="mm" alt="addTocart" /></div>
      
        <div className="bg-[#D4AF37] px-5 py-2 rounded-2xl" onClick={()=>Setshowlogin("true")}>Login</div>
    
      </div>
    </div>
  )
}

export default Navbar