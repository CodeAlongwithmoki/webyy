import React from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, PolarArea } from "react-chartjs-2";
import Navbar from "./Navbar";
import codingImg from "../assets/codintbandit.jpeg";
import Footer from "./Footer";

const Homepage = () => {
  return (
    <div className=" overflow-auto h-screen  w-full   bg-[#292825] text-[#dfe0f1] ">
      <Navbar />
      <div className="flex items-center w-full  flex-col text-center mt-20 xl:mt-2 px-10 ">
        <header className=" flex items-center flex-col xl:justify-between xl:px-40 xl:pt-10 ">
          <h1 className="pb-5 pt-3 text-[#544AC4] text-4xl sm:text-6xl xl:text-7xl font-bold ">
            Hi 👋 Im The Coding Bandit
          </h1>
          <p className=" text-2xl sm:text-4xl ">Here to help developers</p>
          <p className=" text-slate-200 sm:text-2xl text-md  pt-4">
            Developer, Youtuber, Blogger
          </p>
        </header>

        <div className="xl:px-[20%]  mt-[150px]">
          <section className=" ">
            <h3 className="font-semibold text-center sm:text-4xl text-2xl  xl:text-3xl pb-8">
              About Me
            </h3>
            <p className=" text-center sm:w-[70%]  sm:text-xl  sm:mx-auto   text-lg xl:text-2xl  ">
              I am a 23 year old Freelance Developer Located in Las Vegas. I
              started coding becuase i always thought it was interesting. as in
              the movies it was hacking was cool, a nerdy or a cool character
              pluging in is computer and shut down the whole school, or
              government. it made me want to try it and since ive started coding
              ive never looked back.
            </p>
          </section>
        </div>
        <div className="  xl:px-[20%] mt-[150px]">
          <section className="">
            <h3 className="font-semibold sm:text-4xl  text-3xl pb-8">
              Technology i Know
            </h3>
            <ul className=" grid grid-cols-2    xl:grid-cols-3 text-2xl ">
              <li className=" border-4 xl:mx-2 xl:my-8 xl:w-25 xl:px-5 xl:py-5 xl:h-20 rounded-lg">
                Js
              </li>
              <li className=" border-4 xl:mx-2 xl:my-8 xl:w-25 xl:px-5 xl:py-5 xl:h-20 rounded-lg">
                Css
              </li>
              <li className=" border-4 xl:mx-2 xl:my-8 xl:w-25 xl:px-5 xl:py-5 xl:h-20 rounded-lg">
                Html
              </li>
              <li className=" border-4 xl:mx-2 xl:my-8 xl:w-25 xl:px-5 xl:py-5 xl:h-20 rounded-lg">
                React
              </li>
              <li className=" border-4 xl:mx-2 xl:my-8 xl:w-25 xl:px-5 xl:py-5 xl:h-20 rounded-lg">
                Nodejs
              </li>
              <li className=" border-4 xl:mx-2 xl:my-8 xl:w-25 xl:px-5 xl:py-5 xl:h-20 rounded-lg">
                MongoDB
              </li>
            </ul>
          </section>
        </div>
        <div className="  xl:px-[20%] mt-[150px]">
          <section>
            <h3 className="font-semibold sm:text-4xl  text-3xl pb-8">Goals</h3>
            <ol className="text-lg sm:text-xl xl:text-2xl text-left">
              <li className="py-2">
                <p>1 - Get to 1 Million Subscribers</p>
              </li>
              <li className="py-2">
                <p>2 - Help people with coding</p>
              </li>
              <li className="py-2">
                <p>3 - Build my saas</p>
              </li>
              <li className="py-2">
                <p>4 - Work for netflix</p>
              </li>
              <li className="py-2">
                <p>5 - Beat the ai robots :)</p>
              </li>
            </ol>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
