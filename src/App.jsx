import Display from "./components/Display"
import Player from "./components/Player"
import Sidebar from "./components/Sidebar"

const App = () => {
  return (
    <div className="h-screen bg-black p-2">
      <div className="h-[90%] flex gap-3">
        <Sidebar/>
        <Display/>
      </div>
      <Player/>
    </div>
  )
}

export default App