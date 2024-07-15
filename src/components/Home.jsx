import Display_chart from "./Display_chart"
import Navbar from "./Navbar"

const Home = () => {
  return (
    <div className="bg-[#121212] h-full rounded p-5 overflow-auto">
        <Navbar/>
        <Display_chart/>
    </div>
  )
}

export default Home