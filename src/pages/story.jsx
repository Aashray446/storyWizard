import React, { useLayoutEffect } from "react";
import { useState } from "react";
// get param from url
import { useParams } from "react-router-dom";
import { getStory } from "../services/stories";
import { askFollowUp, getFollowUp } from "../services/stories";

export const Story = () => {
  const { id } = useParams();
  const [isActive, setIsActive] = useState(false);
  const [story, setStory] = useState({});
  const [storyLines, setStoryLines] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = React.useRef(null);
  const [questions, setQuestions] = useState("");

  const [recording, setRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState(null);
  const [audioTime, setAudioTime] = useState(0);

  const [loading, isloading] = useState(false);

  let mediaRecorder = null;

  const startRecording = () => {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        mediaRecorder = new MediaRecorder(stream);
        const audioChunks = [];

        mediaRecorder.addEventListener("dataavailable", (event) => {
          audioChunks.push(event.data);
        });

        mediaRecorder.addEventListener("stop", () => {
          const audioBlob = new Blob(audioChunks, { type: "audio/wav" });
          setAudioBlob(audioBlob);
        });

        mediaRecorder.start();
        setRecording(true);

        setTimeout(() => {
          stopRecording();
          sendAudio();
        }, 5000);
      })
      .catch((err) => console.log(err));
  };

  const stopRecording = () => {
    setRecording(false);
    mediaRecorder.stop();
  };

  const sendAudio = () => {
    // generate a unqiue session id
    const sessionId =
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15);
    askFollowUp(id, audioBlob, sessionId).then((res) => {
      console.log(res);
    });
  };

  useLayoutEffect(() => {
    getStory(id).then((res) => {
      setStory(res.story[0]);
      setStoryLines(res.story[0].story.split("\n\n"));
      console.log(story);
    });
  }, []);

  const toggleClass = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
    setIsActive(!isActive);
  };

  const handleMicClick = () => {
    console.log("mic clicked");
    startRecording();
  };

  const handleInputChange = (e) => {
    setQuestions(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    isloading(true);
    setAudioTime(audioRef.current.currentTime);
    getFollowUp(id, questions).then((res) => {
      // set audioRef src to new audio
      audioRef.current.src = res.audio;
      audioRef.current.play();
      isloading(false);
    });
  };

  const loopAudio = () => {
    audioRef.current.src = story.audio;
    audioRef.current.currentTime = audioTime;
    audioRef.current.play();
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
        <div className="absolute left-1/2 transform -translate-x-1/2 flex ">
          {/* <div className="botón" onClick={handleMicClick}>
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
          </div> */}
          <div className="relative flex justify-center items-center h-screen">
            {/* <input type="text" className="bg-white rounded-lg w-80 h-10 p-4" placeholder="Ask Questions" /> */}
            <input
              type="text"
              placeholder="Ask any question..."
              className="bg-white bg-opacity-40 focus:outline-none h-12 px-4 rounded-full w-96 text-black font-bold"
              onChange={handleInputChange}
            />
            {!loading ? (
              <button onClick={handleFormSubmit}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="relative -left-16 h-10 text-white"
                >
                  <path
                    d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                    fill="#fff"
                  />
                </svg>
              </button>
            ) : (
              <div class="lds-dual-ring relative -left-16 mb-5 h-10"></div>
            )}
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
      <audio ref={audioRef} src={story.audio} onEnded={loopAudio} />
    </>
  );
};
