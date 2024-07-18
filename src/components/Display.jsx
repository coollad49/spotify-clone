import {Routes, Route, useLocation} from 'react-router-dom'
import Home from './Home'
import DisplayAlbum from './DisplayAlbum'
import { useEffect, useRef } from 'react'
import { albumsData } from '../assets/assets'

const Display = () => {
  const displayRef = useRef()
  const location = useLocation()
  const isAlbum = location.pathname.includes("album");
  const albumId = isAlbum ? location.pathname.slice(-1) : "";
  
  const bgColor = albumsData[Number(albumId)].bgColor;

  useEffect(()=>{
    if (isAlbum){
      displayRef.current.style.background = `linear-gradient(${bgColor}, #121212)`;
    }
    else{
      displayRef.current.style.background = `#121212`;
    }
  })

  return (
    <div ref={displayRef} className="text-white w-full lg:w-[78%] overflow-auto">
        <div className="h-full rounded p-5 overflow-auto">
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/album/:id' element={<DisplayAlbum/>} />
            </Routes>
        </div>
        
    </div>
  )
}

export default Display