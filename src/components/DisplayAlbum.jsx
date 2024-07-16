import { albumsData, assets, songsData } from "../assets/assets";
import Navbar from "./Navbar"
import {useParams} from 'react-router-dom'

const DisplayAlbum = () => {

    const {id} = useParams();
    const albumData = albumsData[id];

  return (
    <>
       <Navbar/> 
       <div className="flex gap-5 flex-col md:flex-row mt-5">
        <img src={albumData.image} alt="" className="max-w-40 rounded"/>
        <div className="flex justify-center flex-col w-full">
          <h3 className="text-sm text-gray-300">Playlist</h3>
          <h1 className="text-6xl font-bold">{albumData.name}</h1>
          <p className="text-sm text-gray-300 mt-3">{albumData.desc}</p>
          <div className="mt-3 flex gap-1 items-center">
            <img src={assets.spotify_logo} alt="" className="w-5"/>
            <span className="font-semibold">Spotify <span className="font-bold">.</span></span>
            <span className="text-gray-300 text-sm">1,654 <span>likes</span></span>
            <span className="font-semibold"><span className="font-bold">.</span> 50 <span>songs</span></span>
            <span className="text-sm text-gray-300"><span className="font-bold text-base">.</span> about <span>4hr 30min</span></span>
          </div>
        </div>
       </div>
       <div className="mt-5 grid grid-cols-3 sm:grid-cols-4 text-[#a7a7a7]">
        <p className=""><b className="mr-4">#</b>Title</p>
        <p className="">Album</p>
        <p className="hidden sm:block">Date Added</p>
        <img src={assets.clock_icon} alt="" className="w-5 m-auto"/>
       </div>
       <hr className="my-3 border-gray-500"/>
        {songsData.map((item, index)=>(
          <div key={index} className="grid grid-cols-3 sm:grid-cols-4 text-[#a7a7a7] hover:bg-[#ffffff2b] gap-2 items-center p-2 cursor-pointer">
            <p className="text-white">
              <b className="mr-4 text-[#a7a7a7]">{item.id+1}</b>
              <img src={item.image} alt="" className="inline w-10 mr-4 rounded"/>
              {item.name}</p>
            <p className="text-[15px]">{albumData.name}</p>
            <p className="hidden sm:block text-sm">5 days ago</p>
            <p className="text-sm text-center">{item.duration}</p>
          </div>
        ))}
    </>
  )
}

export default DisplayAlbum