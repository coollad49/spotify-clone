import { useContext } from "react";
import { assets} from "../assets/assets"
import { PlayerContext } from "../context/PlayerContext";

const Player = () => {
    const {play, pause, playStatus, track, time, seekBar} = useContext(PlayerContext);
  return (
    <div className="h-[10%] flex px-2 items-center justify-center lg:justify-between">
        <div className="lg:flex items-center gap-7 hidden">
            <img src={track.image} alt="" className="w-12 rounded-sm"/>
            <div className="gap-3">
                <h3 className="text-white font-bold">{track.name}</h3>
                <p className="text-gray-300 text-xs font-light">{track.desc.slice(0,12)}</p>
            </div>
            <div className="w-5 h-5 font-bold rounded-full border-2 border-gray-400 text-gray-400 flex items-center justify-center cursor-pointer">
                <span className="pe-[1px] pb-[1.7px]">+</span>
            </div>
        </div>
        <div className="flex flex-col items-center gap-2">
            <div className="flex gap-5">
                <img src={assets.shuffle_icon} alt="" className="w-4 cursor-pointer"/>
                <img src={assets.prev_icon} alt="" className="w-4 cursor-pointer"/>
                {playStatus ?<img onClick={()=>pause()} src={assets.pause_icon} alt="" className="w-4 cursor-pointer"/> : <img onClick={()=>play()} src={assets.play_icon} alt="" className="w-4 cursor-pointer"/>}
                
                
                <img src={assets.next_icon} alt="" className="w-4 cursor-pointer"/>
                <img src={assets.loop_icon} alt="" className="w-4 cursor-pointer"/>
            </div>
            <div className="flex gap-3 text-white items-center">
                <p className="text-sm text-gray-400">{time.currentTime.minutes}:{time.currentTime.seconds}</p>
                <div className="bg-gray-600 w-[50vw] max-w-[400px] rounded-full">
                    <hr ref={seekBar} className="h-1 bg-white border-none rounded-full"/>
                </div>
                <p className="text-sm text-gray-400">{time.totalTime.minutes}:{time.totalTime.seconds}</p>
            </div>
        </div>

        <div className="lg:flex gap-3 items-center hidden">
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