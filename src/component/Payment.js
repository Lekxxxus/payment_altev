import React, { useState } from "react";
import infinite from "../component/images/infinite.png";
import paypal from "../component/images/paypal.png";
import Gcash from "../component/images/Gcash.png";
import { Link } from "react-router-dom";

function Payment() {
  return (
    <div>
      {/* <div className="flex items-center hidden pb-1 bg-black md:flex justify-evenly md:items-center sm:pb-1 lg-black">
        <div className="text-lg font-semibold text-yellow-600 md:text-lg hover:text-green-500 ">
          <u>L</u>exus
        </div>
        <div>
          <ul className="flex justify-around w-96">
            <li className="">HOME</li>
            <li className="">LIST</li>
            <li className="">CART</li>
            <li className=""></li>
          </ul>
        </div>
      </div> */}

      <div className="flex items-center justify-center w-full mt-20 bg--400">
        <div className="bg--500 h-96 w-96 ">
          <div className="flex items-center justify-center text-2xl bg--500">
            <h1 className="font-extrabold ">PAYMENT</h1>
          </div>
          <div className="flex items-center justify-around h-24 mx-auto mt-5 font-bold bg-gray-200 border opacity-70 w-96 ">
            <h1 className="pr-20 ">Flannel Polo Shirt: 1 </h1>
            <h1>P800.00 </h1>
          </div>
          <div className="flex items-center justify-between h-32 font-semibold pt-7 bg--500 w-96">
            <div className="h-24 pt-3 bg-gray-900 border w-28">
              <div className="flex flex-col items-center justify-center ">
                <h1 className="flex justify-center w-8 h-7">
                  <img className="w-16 h-10" src={infinite} alt="infinite" />
                </h1>

                <h1 className="pt-5 font-medium text-white bg--500">Card</h1>
              </div>
            </div>
            <div className="h-24 bg-white border w-28">
              <div className="flex flex-col items-center justify-center pt-3">
                <h1 className="w-10 h-10 bg--500">
                  <img src={paypal} alt="paypal" />
                </h1>

                <h1 className="w-16 h-10 pt-3 text-black bg--500">Paypal</h1>
              </div>
            </div>

            <div className="h-24 bg-white border w-28">
              <div className="flex flex-col items-center justify-center pt-3">
                <h1 className="w-10 h-10 bg--500">
                  <img src={Gcash} alt="Gcash" />
                </h1>
                <h1 className="h-10 pt-3 bg--500 w-14">GCash</h1>
              </div>
            </div>
          </div>
          <div className="pt-5 bg--500">
            <div className="flex flex-col">
              <input
                className="h-10 pl-2 mb-2 border-2"
                placeholder="Name on Card"
              />
              <input
                className="h-10 pl-2 mb-2 border-2"
                placeholder="Card Number"
              />
              <div className="flex justify-between h-10 ">
                <input
                  className="w-48 h-10 pl-2 mb-2 border-2"
                  placeholder="Expiry Date"
                />
                <input
                  className="h-10 pl-2 mb-2 border-2 w-44"
                  placeholder="CVV"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center mt-5 font-medium text-white bg-black h-9">
            <Link to="/summary">SUBMIT PAYMENT</Link>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
