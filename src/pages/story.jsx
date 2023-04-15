import React, { useLayoutEffect } from "react";
import { useState } from "react";
// get param from url
import { useParams } from "react-router-dom";
import { getStory } from "../services/stories";

export const Story = () => {

  const { id } = useParams();
  const [isActive, setIsActive] = useState(false);
  const [story, setStory] = useState({});

  useLayoutEffect(() => {
    getStory(id).then((res) => {
      setStory(res.story[0]);
      console.log(res.story[0]);
    });
  }, []);

  const toggleClass = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <div className="grid lg:grid-cols-5 gap-4 grid-cols-1 font-poiret_one mx-10 h-[100vh]">
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
            <p className="text-xl">{story.story}</p>
          </div>

        </div>

      </div>
      <div className="fixed bottom-0 left-0 w-full h-16 m-8 flex justify-around items-center">

        <div className="absolute w-18 h-18 right-1/2 translate-x-1/2">
          <div className={` botón ${isActive ? 'active' : ''}`} onClick={toggleClass} >
            <div className="fondo"></div>
            <div className="icono">
              <div className="parte izquierda" x="0" y="0" width="200" height="200" fill="#fff"></div>
              <div className="parte derecha" x="0" y="0" width="200" height="200" fill="#fff"></div>
            </div>
            <div className="puntero"></div>
          </div>
        </div>

      </div>
    </>
  );
};
