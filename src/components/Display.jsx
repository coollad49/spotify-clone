import {Routes, Route} from 'react-router-dom'
import Home from './Home'
import DisplayAlbum from './DisplayAlbum'

const Display = () => {
  return (
    <div className="text-white w-full lg:w-[78%] overflow-auto">
        <div className="bg-[#121212] h-full rounded p-5 overflow-auto">
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/album/:id' element={<DisplayAlbum/>} />
            </Routes>
        </div>
        
    </div>
  )
}

export default Display