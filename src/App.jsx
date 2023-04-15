import "./App.css";
import { Mike } from "./components/mike";
import StoryCard from "./components/storyCard";
import s1 from "./assets/images/s1.jpeg";

function App() {
  return (
    <div className="App">
      <nav className="flex justify-between items-center p-4">
        <div className="flex items-center">
          <h1 className="text-2xl text-white font-bold ml-2">Story Wizard</h1>
        </div>
      </nav>
      <div className="grid lg:grid-cols-5 gap-4 grid-cols-1">
        <div className="col-span-2" style={{ height: "100vh" }}>
          <Mike></Mike>
        </div>
        <div className="col-span-3 text-white">
          <div className="col-span-3 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 text-white px-5">
          <StoryCard heading="The lion King" content="Lorem ipsum bolayr ito s..." imgSrc={s1}  ></StoryCard>
          <StoryCard heading="The lion King" content="Lorem ipsum bolayr ito sir..." imgSrc={s1}  ></StoryCard>
          <StoryCard heading="The lion King" content="Lorem ipsum bolayr ito sir..." imgSrc={s1}  ></StoryCard>
          <StoryCard heading="The lion King" content="Lorem ipsum bolayr ito sir..." imgSrc={s1}  ></StoryCard>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
