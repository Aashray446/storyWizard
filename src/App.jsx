import "./App.css";
import { Mike } from "./components/mike";
import StoryCard from "./components/storyCard";
import s1 from "./assets/images/s1.jpeg";
import s2 from "./assets/images/s2.jpeg";
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
              content="Lorem ipsum bolayr ito s..."
              imgSrc={s1}
            ></StoryCard>
            <StoryCard
              heading="The lion King"
              content="Lorem ipsum bolayr ito sir..."
              imgSrc={s1}
            ></StoryCard>
            <StoryCard
              heading="The lion King"
              content="Lorem ipsum bolayr ito sir..."
              imgSrc={s1}
            ></StoryCard>
            <StoryCard
              heading="The lion King"
              content="Lorem ipsum bolayr ito sir..."
              imgSrc={s1}
            ></StoryCard>
          </div>
        </div>
      </div>
  );
}

export default App;
