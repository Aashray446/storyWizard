import "./App.css";
import { Mike } from "./components/mike";
import S1 from "./assets/images/s1.jpeg";
import S2 from "./assets/images/s2.jpeg";
import S3 from "./assets/images/s3.jpeg";

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
          <div className="col-span-3 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 text-white px-5">
            <div
              className=" p-5 rounded-lg"
              style={{
                background: `url(${S1})`,
                backgroundSize: "cover",
              }}
            >
              <h2 className="text-2xl font-bold">Story Preview 1</h2>
              <p className="mt-2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Tempore soluta odit, mollitia enim distinctio quia totam numquam
                inventore est maxime officia, expedita incidunt consequuntur
                eveniet porro, aut eaque cum voluptatibus?
              </p>
            </div>
            <div
              className="p-5 rounded-lg"
              style={{ background: `url(${S2})`, backgroundSize: "cover" }}
            >
              <h2 className="text-2xl font-bold">Story Preview 2</h2>
              <p className="mt-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptas necessitatibus eveniet aliquam hic quis quaerat quo,
                magni magnam harum quae nesciunt ullam impedit fugiat! Adipisci
                voluptatum assumenda porro eum aut.
              </p>
            </div>
            <div
              className=" p-5 rounded-lg"
              style={{
                background: `url(${S3})`,
                backgroundSize: "cover",
              }}
            >
              <h2 className="text-2xl font-bold">Story Preview 2</h2>
              <p className="mt-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
                ipsum tempora animi consequuntur quos veniam quibusdam sed.
                Perspiciatis ab aspernatur corrupti ducimus! Exercitationem
                animi neque aliquid ad dolores dolorum reiciendis!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
