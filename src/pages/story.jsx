import React, { useLayoutEffect } from "react";
import { useState } from "react";
// get param from url
import { useParams } from "react-router-dom";
import { getStory } from "../services/stories";

export const Story = () => {
  const { id } = useParams();
  const [isActive, setIsActive] = useState(false);
  const [story, setStory] = useState({});
  const [storyLines, setStoryLines] = useState([]);

  useLayoutEffect(() => {
    getStory(id).then((res) => {
      setStory(res.story[0]);
      setStoryLines(res.story[0].story.split("\n\n"));
      // console.log(res.story[0]);
    });
  }, []);

  const toggleClass = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <div className="grid lg:grid-cols-5 gap-4 grid-cols-1 font-poiret_one mx-10 min-h-screen sm:max-h-fit">
        <div className="lg:col-span-2 flex justify-center">
          <img
            src={story.img}
            className="rounded-lg w-full lg:h-2/3 sm:h-full"
            alt="The Lion King"
          />
        </div>
        <div className="lg:col-span-3">
          <div className="text-center lg:text-xl text-sm text-white">
            <h1 className="text-4xl font-bold text-white">{story.title}</h1>
            {/* <p className="text-xl">{story.story}</p> */}
            {storyLines &&
              storyLines.map((line, index) => {
                return (
                  <p key={index} className="text-2xl my-5">
                    {line}
                  </p>
                );
              })}
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 w-full h-16 m-8 flex justify-around items-center">
        <div className="absolute left-1/2 transform -translate-x-1/2 flex">
          <div className="botón">
            <div className="fondo">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="absolute top-[25%] left-[55%] transform -translate-x-1/2 h-1/2 text-white"
              >
                <path
                  d="M192 0C139 0 96 43 96 96V256c0 53 43 96 96 96s96-43 96-96V96c0-53-43-96-96-96zM64 216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 89.1 66.2 162.7 152 174.4V464H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h72 72c13.3 0 24-10.7 24-24s-10.7-24-24-24H216V430.4c85.8-11.7 152-85.3 152-174.4V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 70.7-57.3 128-128 128s-128-57.3-128-128V216z"
                  fill="#fff"
                />
              </svg>
            </div>
          </div>
          <div
            className={` botón ${isActive ? "active" : ""}`}
            onClick={toggleClass}
          >
            <div className="fondo"></div>
            <div className="icono">
              <div
                className="parte izquierda"
                x="0"
                y="0"
                width="200"
                height="200"
                fill="#fff"
              ></div>
              <div
                className="parte derecha"
                x="0"
                y="0"
                width="200"
                height="200"
                fill="#fff"
              ></div>
            </div>
            <div className="puntero"></div>
          </div>
        </div>
      </div>
    </>
  );
};
