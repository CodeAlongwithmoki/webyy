import React from "react";
import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState(false);

  return (
    <div className="flex flex-row justify-between items-center h-12 pt-3    xl:hidden px-4">
      <div className="logo  text-bold text-2xl">
        <a href="/">CodingBandit</a>
      </div>
      {active ? (
        <ul className=" absolute bg-[#dfe0f1] text-[#292825] text-xl mx-auto pt-5 sm:text-2xl  h-3/6 w-screen right-[0px] top-[50px] text-center">
          <li className="py-5">
            <a href="#">Youtube</a>
          </li>
          <li className="py-5">
            <a href="#">Twitter</a>
          </li>
          <li className="py-5">
            <a href="#">Discord</a>
          </li>
          <li className="py-5">
            <a href="#">Donate</a>
          </li>
        </ul>
      ) : (
        <div className="hidden"></div>
      )}
      <div className="hamburger  " onClick={() => setActive(!active)}>
        <span className="bg-[#dfe0f1] w-6 h-1 block mb-1"></span>
        <span className="bg-[#dfe0f1] w-6 h-1 block mb-1"></span>
        <span className="bg-[#dfe0f1] w-6 h-1 block mb-1"></span>
      </div>
    </div>
  );
};

export default Navbar;
