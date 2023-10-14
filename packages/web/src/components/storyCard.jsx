import React from "react";
// react-router-dom
import { useNavigate } from "react-router-dom";

const StoryCard = ({ heading, content, imgSrc, id }) => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/story/" + id);
  };


  return (
    <div onClick={handleClick} className="p-4 w rounded-lg overflow-hidden group">
      <div className="relative transition-all duration-500 ease-in-out transform group-hover:scale-110">
        <img src={imgSrc} className="w-full h-64 rounded-lg " />
        <div className="absolute card w-full bottom-0 rounded-lg">
          <h2 className="text-2xl p-1 font-bold">{heading}</h2>
          <p className="p-2 truncate line-clamp-3">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default StoryCard;
