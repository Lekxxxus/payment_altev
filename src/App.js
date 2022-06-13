// import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

// import Home from "./component/Home";
import Payment from "./component/Payment";
import Summary from "./component/Summary";

function App() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div>
      <div className="flex items-center justify-between w-full h-12 text-center text-white bg-black md:items-center sm:pb-1 lg-black">
        <div className="font-semibold text-white md:text-white">
          <h1 className="pl-2 ">LEXUS</h1>
        </div>
        <button
          onClick={() => setNavOpen(!navOpen)}
          className="text-right bg-black md:hidden"
        >
          <i className="pt-2 pr-2 text-white fas fa-bars"></i>
        </button>
        <ul className="justify-around hidden md:flex w-96 ">
          <li className="">HOME</li>
          <li className="">LIST</li>
          <li className="">CART</li>
          <li className="">PROFILE</li>
        </ul>
      </div>

      {navOpen ? (
        <div>
          <ul className="flex flex-col justify-around gap-2 mx-auto font-bold text-right md:text-right w-96 md:hidden ">
            <li className="">HOME</li>
            <li className="">LIST</li>
            <li className="">CART</li>
            <li className="">PROFILE</li>
          </ul>
        </div>
      ) : null}
      <Routes>
        <Route path="/" element={<Payment />} />
        <Route path="/summary" element={<Summary />} />
        {/* <Route path="/home" element={<Home />} /> */}
      </Routes>
    </div>

    // <div className="App">
    //   <Home />
    //   <Payment />
    //   <Summary />
    // </div>
  );
}

export default App;
