import React from "react";

function Home() {
  return (
    <div>
      <div className="flex items-center justify-around w-full h-12 text-white bg-black">
        <div className="">LEXUS</div>
        <ul className="flex justify-around w-96">
          <li className="">HOME</li>
          <li className="">LIST</li>
          <li className="">CART</li>
          <li className="">PROFILE</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
