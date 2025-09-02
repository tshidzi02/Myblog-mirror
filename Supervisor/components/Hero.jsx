// src/components/Hero.jsx
import React from "react";
import profileImg from "../assets/profile.jpg"; // adjust path if needed

export default function Hero() {
  return (
    <section className="w-full min-h-screen bg-[#f7f7fb] flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 relative bg-gradient-to-br from-grey-100 to-pink-100">
     {}
      <div className="absolute top-0 left-0 w-[250px] h-[250px] bg-gradient-to-br from-purple-600 to-pink-600 rounded-full opacity-40 z-0"></div>
      <div className="absolute bottom-0 left-[-100px] w-[400px] h-[400px] bg-gradient-to-br from-pink-200 to-purple-200 rounded-full opacity-30 z-0"></div>
      <div className="absolute top-[30%] right-[-80px] w-[180px] h-[180px] bg-gradient-to-br from-purple-200 to-pink-100 rounded-full opacity-40 z-0"></div>
      <div className="absolute bottom-[10%] right-[10%] w-[120px] h-[120px] bg-gradient-to-br from-purple-100 to-pink-200 rounded-full opacity-40 z-0"></div>


      {}
        <div className ="w-full md:w-1/2 z-10 flex justify-center">
        <img
  src={profileImg}
  alt="Profile"
 className="rounded-full w-100 h-100 object-cover border-4 border-white shadow-xl"
/>
      </div>

      {}
      <div className="w-full md:w-1/2 mt-10 md:mt-0 text-center md:text-left">
        <h1 className="text-7xl font-bold leading-tight relative inline-block">
          <span className="absolute -inset-1 transform -skew-x-12 bg-purple-300 opacity-50 rounded-md z-0"></span>
          <span className="relative z-10">Hello!</span>
        </h1>

        <p className="mt-6 text-xl text-gray-800 font-medium leading-relaxed">
          I'm <strong>Mutshidzi</strong>. Mathematics student and future Data Scientist.
          <br />
          Welcome to my personal blog and digital space.
        </p>
      </div>
    </section>

  );
}
