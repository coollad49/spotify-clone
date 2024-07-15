import {Routes, Route} from 'react-router-dom'
import Home from './Home'

const Display = () => {
  return (
    <div className="text-white w-full lg:w-[78%] overflow-auto">
        <Routes>
            <Route path='/' element={<Home/>} />
        </Routes>
    </div>
  )
}

export default Display