import "./App.css";
import { Mike } from "./components/mike";
import StoryCard from "./components/storyCard";
import s1 from "./assets/images/s1.jpeg";
import s2 from "./assets/images/s2.jpeg";
import s3 from "./assets/images/s3.jpeg";
function App() {
  return (
    <div className="grid lg:grid-cols-5 gap-4 grid-cols-1 font-poiret_one">
      <div className="col-span-2" style={{ height: "100vh" }}>
        <Mike></Mike>
      </div>
      <div className="col-span-3 text-white">
        <div className="col-span-3 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 w-full text-white px-5">
          <StoryCard
            heading="The lion King"
            content="A Lion lay asleep in the forest, his great head resting on his paws..."
            imgSrc={s1}
          ></StoryCard>
          <StoryCard
            heading="The Ant and the Grasshopper"
            content="Once upon a time, there lived an ant and a grasshopper in a grassy meadow..."
            imgSrc={s2}
          ></StoryCard>
          <StoryCard
            heading="The hare and the turtle"
            content="A Hare was making fun of the Tortoise one day for being so slow..."
            imgSrc={s3}
          ></StoryCard>
        </div>
      </div>
    </div>
  );
}

export default App;
