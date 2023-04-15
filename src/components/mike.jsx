import React from "react";
import microphone from '../assets/microphone.svg';

export const Mike = () => {
    return (
    <div className="center">
    <div className="flex justify-center items-center h-48 w-48 rounded-full bg-gradient-to-r from-brilliant-rose to-energy-yellow">
      <img src={microphone} className="w-28 h-28" />
    </div>
</div>)
}