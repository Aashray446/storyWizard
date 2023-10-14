import React, { useState } from "react";
import add from "../assets/images/add.png";
import { generateStory } from "../services/stories";
import { useNavigate } from "react-router-dom";

export const Mike = () => {
  const [textInput, setTextInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setTextInput(e.target.value);
  };

  const handleClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = (e) => {
    if (e.target.nodeName !== "TEXTAREA") {
      setIsModalOpen(false);
    }
  };

  const handleGenerateStory = () => {
    setLoading(true);
    generateStory(textInput).then((res) => {
      setLoading(false);
      navigate("/story/" + res.id);
    });
    handleCloseModal();
  };

  return (
    <>
      {loading && (
        <div className="cover">
          <div className="loader">
            <div className="lds-ripple">
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      )}
      <div className="flex flex-col items-center justify-center h-screen overflow-hidden group">
        <h1 className="text-white block m-10 text-4xl font-bold uppercase text-center">
          Let's Get Creative: Make Your Own Amazing Stories!
        </h1>

        <div
          className="flex justify-center items-center h-48 w-48 rounded-full bg-gradient-to-r from-brilliant-rose to-energy-yellow transition-all duration-500 ease-in-out transform group-hover:scale-110 hover:cursor-pointer"
          onClick={handleClick}
        >
          <img src={add} className="w-28 h-28 " />
        </div>

        {isModalOpen && (
          <div className="custom-modal" onClick={handleCloseModal}>
            <div className="custom-modal-content">
              <div className="flex w-full justify-between">
                <p className="text-4xl font-bold">Create a New Story</p>
                <span
                  className="close text-5xl transition-all duration-500 ease-in-out transform hover:scale-150"
                  onClick={handleCloseModal}
                >
                  &times;
                </span>
              </div>
              <textarea
                value={textInput}
                className="p-2 text-2xl"
                onChange={handleChange}
                placeholder="Enter the topic on which story should be created..."
              />
              <button className="btn btn-primary" onClick={handleGenerateStory}>
                Generate Story
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};