import { assets, songsData } from "../assets/assets"

const Player = () => {
  return (
    <div className="h-[10%] flex p-4 pb-6 items-center justify-between">
        <div className="flex items-center gap-4">
            <img src={songsData[0].image} alt="" className="w-12 rounded-md"/>
            <div className="gap-3">
                <h3 className="text-white font-bold">{songsData[0].name}</h3>
                <p className="text-gray-300 text-xs font-light">{songsData[0].desc.slice(0,12)}</p>
            </div>
            <div className="w-5 h-5 font-bold rounded-full border-2 border-gray-400 text-gray-400 flex items-center justify-center cursor-pointer">
                <span className="pe-[1px] pb-[1.7px]">+</span>
            </div>
        </div>
        <div className="flex flex-col items-center gap-3 ">
            <div className="flex gap-5">
                <img src={assets.shuffle_icon} alt="" className="w-4 cursor-pointer"/>
                <img src={assets.prev_icon} alt="" className="w-4 cursor-pointer"/>
                <img src={assets.play_icon} alt="" className="w-4 cursor-pointer"/>
                <img src={assets.next_icon} alt="" className="w-4 cursor-pointer"/>
                <img src={assets.loop_icon} alt="" className="w-4 cursor-pointer"/>
            </div>
            <div className="flex gap-3 text-white items-center">
                <p className="text-sm text-gray-400">1:00</p>
                <div className="bg-gray-300 w-[60vw] max-w-[500px] rounded-full">
                    <hr className="h-1 bg-green-500 border-none rounded-full w-[25%]"/>
                </div>
                <p className="text-sm text-gray-400">4:00</p>
            </div>
        </div>

        <div className="flex gap-3 items-center">
            <img src={assets.plays_icon} alt="" className="w-4 cursor-pointer"/>
            <img src={assets.mic_icon} alt="" className="w-4 cursor-pointer"/>
            <img src={assets.queue_icon} alt="" className="w-4 cursor-pointer"/>
            <img src={assets.speaker_icon} alt="" className="w-4 cursor-pointer"/>
            <img src={assets.volume_icon} alt="" className="w-4 cursor-pointer"/>
            <div className="bg-gray-500 w-[8vw] max-w-[500px] rounded-full">
                <hr className="h-1 bg-white border-none rounded-full w-[25%] cursor-pointer"/>
            </div>
            <img src={assets.mini_player_icon} alt="" className="w-4 cursor-pointer"/>
            <img src={assets.zoom_icon} alt="" className="w-4 cursor-pointer"/>
        </div>
    </div>
  )
}

export default Player;