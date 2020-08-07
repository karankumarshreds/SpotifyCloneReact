import "../styles/song-row.css"
import { useContext, useEffect } from "react";
import { DataContext } from "../context/context-provider";

//ICONS
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';

const SongRow = ({ track, changeSongState, song, playing }) => {

    let Icon = song?.id === track.id && playing
        ? <PauseCircleFilledIcon />
        : <PlayCircleFilledIcon />

    const playSong = async () => {
        changeSongState(track);
    };
    return (
        <div className="songRow" onClick={() => playSong()}>
            <img className="songRow__album"
                src={track.album.images[0]?.url}
                alt="album-art" />
            <div className="songRow__info">
                <h1>{track.name}</h1>
                <p>
                    {track.artists.map(artist => artist.name).join(",")} -{" "}
                    {track.album.name}
                </p>
            </div>
            <div className="songRow__play">
                {Icon}
            </div>
        </div>
    )
};
export default SongRow;