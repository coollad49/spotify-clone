import AlbumItem from "./AlbumItem";
import SongsItem from "./SongsItem";
import { albumsData, songsData } from "../assets/assets";

const Display_chart = () => {
  return (
    <div className="text-white mt-4">
        <div className="mb-3">
            <h1 className="font-bold text-2xl pt-1">Featured Charts</h1>
            <div className="flex mt-3 gap-2 overflow-auto">
                {albumsData.map((item, index)=>(
                    <AlbumItem key={index} img={item.image} name={item.name} desc={item.desc} id={item.id} />
                ))}
            </div>
        </div>
        <div className="mb-3">
            <h1 className="font-bold text-2xl pt-1">{"Today's biggest Hit"}</h1>
            <div className="flex mt-3 gap-2 overflow-auto">
                {songsData.map((item, index)=>(
                    <SongsItem key={index} img={item.image} name={item.name} desc={item.desc} id={item.id}/>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Display_chart