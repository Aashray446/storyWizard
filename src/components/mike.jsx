import React from "react";
import microphone from "../assets/microphone.svg";

export const Mike = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex justify-center items-center h-48 w-48 rounded-full bg-gradient-to-r from-brilliant-rose to-energy-yellow">
        <img src={microphone} className="w-28 h-28" />
      </div>
      <div className="relative mt-8">
        <input
          type="text"
          placeholder="Search..."
          className="bg-white bg-opacity-20 focus:outline-none h-12 px-4 rounded-full w-96 text-white font-bold"
        />
      </div>
    </div>
  );
};
