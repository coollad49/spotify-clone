import { createContext, useRef, useState } from "react";
import PropTypes from 'prop-types';
import { songsData } from "../assets/assets";

const PlayerContext = createContext();

const PlayerContextProvider = ({children}) => {
    const audioRef = useRef()
    const [track, setTrack] = useState(songsData[0])
    const [playStatus, setPlayStatus] = useState(false)

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
        pause
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