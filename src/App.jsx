
import './App.css'
import { Mike } from './components/mike'


function App() {

  return (
    <div className="App">
      <nav className="flex justify-between items-center p-4">
        <div className="flex items-center">
          <h1 className="text-2xl text-white font-bold ml-2">Story Wizard</h1>
        </div>
      </nav>
      <div className="grid lg:grid-cols-5 gap-4 grid-cols-1">
        <div className="col-span-2" style={{height: '100vh'}}>
          <Mike></Mike>
      </div>
      <div className="col-span-3 text-white">
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla mollitia consequuntur numquam laboriosam ducimus amet totam nobis eaque saepe ipsam doloremque, excepturi, quis ullam. Amet, ut. Repellendus dolore earum tempore distinctio. At cumque amet nisi commodi autem quod numquam nihil possimus praesentium, voluptas non sapiente eos, facilis animi cupiditate enim iusto unde saepe! Officiis, ad corrupti quasi fugit eum soluta suscipit expedita ipsum rem quos atque rerum natus. Illo earum eligendi corrupti! Quod, consectetur harum. Expedita fuga error ducimus optio sed nulla laboriosam nostrum praesentium quasi unde illo molestias, voluptate, dolores, nesciunt dolorum. Quod laborum quam dignissimos quia? Aspernatur, nesciunt!  
      </div>
      </div>
    </div>
  )
}

export default App
