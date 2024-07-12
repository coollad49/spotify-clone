import Player from "./components/Player"
import Sidebar from "./components/Sidebar"

const App = () => {
  return (
    <div className="h-screen bg-black">
      <div className="p-2 h-[90%]">
        <Sidebar/>
      </div>
      <Player/>
    </div>
  )
}

export default App