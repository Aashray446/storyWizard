import "./App.css";
import { Mike } from "./components/mike";
import StoryCard from "./components/storyCard";
import { useLayoutEffect, useState } from "react";
import { fetchStories } from "./services/stories";
function App() {
  const [stories, setStories] = useState([]);

  useLayoutEffect(() => {
    fetchStories().then((res) => {
      setStories(res.stories);
    });
  }, []);

  return (
    <div className="grid lg:grid-cols-5 gap-4 grid-cols-1 font-poiret_one">
      <div className="col-span-2" style={{ height: "100vh" }}>
        <Mike></Mike>
      </div>
      <div className="col-span-3 text-white h-[87vh] overflow-y-scroll">
        <div className="col-span-3 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 w-full text-white px-5">
          {stories?.map((story) => (
            <StoryCard
              key={story.id}
              id={story.id}
              heading={story.title}
              imgSrc={story.img}
              content={story.story}
            ></StoryCard>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;