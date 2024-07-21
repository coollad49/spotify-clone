import { createContext, useEffect, useRef, useState } from "react";
import PropTypes from 'prop-types';
import { songsData } from "../assets/assets";

const PlayerContext = createContext();

const PlayerContextProvider = ({children}) => {
    const audioRef = useRef()
    const seekBar = useRef()
    const [track, setTrack] = useState(songsData[2])
    const [playStatus, setPlayStatus] = useState(false)
    const [time, setTime] = useState({
        currentTime:{
            seconds : 0,
            minutes : 0
        }, 
        totalTime : {
            seconds : 0,
            minutes : 0
        }
    });

    useEffect(()=>{
        
        setTimeout(()=>{
            audioRef.current.ontimeupdate = ()=>{
                seekBar.current.style.width = (Math.floor(audioRef.current.currentTime/audioRef.current.duration*100))+'%';
                setTime({
                    currentTime:{
                        seconds : Math.floor(audioRef.current.currentTime % 60),
                        minutes : Math.floor(audioRef.current.currentTime / 60),
                    }, 
                    totalTime : {
                        seconds : Math.floor(audioRef.current.duration % 60),
                        minutes : Math.floor(audioRef.current.duration / 60),
                    }
                })
            }
        }, 1000)
    }, [audioRef])

    const play = ()=>{
        audioRef.current.play()
        setPlayStatus(true)
    }
    const pause = ()=>{
        audioRef.current.pause()
        setPlayStatus(false)
    }

    const contextValue = {
        audioRef, 
        track,setTrack,
        playStatus,
        play,
        pause,
        time,setTime,
        seekBar
    }

    return (
        <PlayerContext.Provider value={contextValue}>
            {children}
        </PlayerContext.Provider>
    )
}



export { PlayerContext, PlayerContextProvider};

PlayerContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};