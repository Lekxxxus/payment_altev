import React from "react";
import { Link } from "react-router-dom";

function Summary() {
  return (
    <div>
      {/* <div className="flex items-center justify-around w-full h-12 text-white bg-black">
        <div className="">PAYMENT</div>
        <ul className="flex justify-around w-96">
          <li className="">HOME</li>
          <li className="">LIST</li>
          <li className="">CART</li>
          <li className="">PROFILE</li>
        </ul>
      </div> */}

      <div className="w-full mt-20 bg--400 h-80">
        <div className="flex justify-center ">
          <div className="w-48 h-24 pt-10 text-4xl font-bold bg--400 ">
            SUMMARY
          </div>
        </div>

        <div className="flex justify-center mx-auto h-44 ">
          <div className="h-40 bg-gray-200 border pt-7 w-80">
            <div className="flex justify-around ">
              <div className="font-medium">Flannel Polo Shirt: 1</div>
              <div className="font-medium">P800.00</div>
            </div>
            <div className="flex justify-between pt-2 px-7 ">
              <div className="font-medium">Tax:</div>
              <div className="font-medium">P18.00</div>
            </div>
            <div className="border-t-2 border-black w-[80%]  mx-auto mt-3 "></div>
            <div className="flex justify-between pt-4 px-7 ">
              <div className="font-bold">Using Card 3428</div>
              <div className="font-bold">P818.00</div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-5 text-center">
          <div className="pt-2 font-medium text-white bg-black border-2 h-11 text-1xl w-80 ">
            <Link to="/"> CONFIRM PAYMENT</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Summary;
