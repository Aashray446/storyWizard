import React, { useState } from "react";
import microphone from "../assets/microphone.svg";
import { generateStory } from "../services/stories";
import { useNavigate } from "react-router-dom";
export const Mike = () => {

  const [textInput, setTextInput] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setTextInput(e.target.value);
  };

  const handleClick = () => {
    setLoading(true)
    generateStory(textInput).then((res) => {
      setLoading(false)
      navigate("/story/" + res.id);
    });
  };

  return (
    <>
      {loading && <div className='cover'>
        <div className='loader'>
          <div className="lds-ripple"><div></div><div></div></div>
        </div>
      </div>}
      <div className="flex flex-col items-center justify-center h-screen overflow-hidden group">
        <div className="flex justify-center items-center h-48 w-48 rounded-full bg-gradient-to-r from-brilliant-rose to-energy-yellow transition-all duration-500 ease-in-out transform group-hover:scale-110 hover:cursor-pointer">
          <img src={microphone} className="w-28 h-28 " />
        </div>
        <div className="relative mt-8 flex justify-between w-1/2">
          <input
            type="text"
            placeholder="Search..."
            className="bg-white bg-opacity-20 focus:outline-none h-12 px-4 rounded-full w-96 text-white font-bold"
            onChange={handleChange}
          />
          <button onClick={handleClick} >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="absolute right-4 top-3  h-1/2 text-white"
            >
              <path
                d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                fill="#fff"
              />
            </svg>
          </button>
        </div>
      </div>
    </>

  );
};
