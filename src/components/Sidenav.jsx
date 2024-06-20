import React, { useState } from "react";
import Drawer from "@mui/joy/Drawer";

const Sidenav = () => {
  return (
    <aside className=" z-30 border-r-4   max-w-80 hidden xl:block bg-[#292825]   ">
      <div className="   px-5 h-full">
        <h3 className=" text-[#dfe0f1]   text-center py-[40px] text-4xl font-bold">
          <a href="/">CodingBandit</a>
        </h3>
        <ul className="  flex flex-col justify-between text-[#dfe0f1]  ">
          <li className=" mt-[5px]  pt-4">
            <a
              className="  pl-[40px]"
              href="https://www.youtube.com/channel/UCP4zeTPxObHY3hK6a7xY-1Q"
            >
              Youtube
            </a>
          </li>
          <li className=" mt-[5px] pt-4">
            <a className="pl-[40px]" href="https://x.com/TheCodingBandit">
              Twitter
            </a>
          </li>
          <li className=" mt-[5px] pt-4 ">
            <a
              className="pl-[40px]"
              href="https://discord.com/invite/HgQ9AjqWQf"
            >
              Discord
            </a>
          </li>
          <li className=" mt-[5px] pt-4 ">
            <a className="pl-[40px]" href="#">
              Medium
            </a>
          </li>
          <li className=" mt-[5px] pt-4 ">
            <a className="pl-[40px]" href="#">
              Github
            </a>
          </li>
          <li className=" mt-[5px] pt-4   ">
            <a
              className="pl-[40px]"
              href="https://buymeacoffee.com/codingbandit"
            >
              Donate
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidenav;
