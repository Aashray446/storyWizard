import React from "react";

const StoryCard = ({ heading, content, imgSrc }) => {
  return (
    <div className="p-4 w rounded-lg">
      <div className="relative">
        <img src={imgSrc} className="w-full h-64 rounded-lg" />
        <div className="absolute card w-full bottom-0 ">
          <h2 className="text-2xl p-1 font-bold">{heading}</h2>
          <p className="p-2 truncate line-clamp-2">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default StoryCard;
