import "../styles/song-row.css"
import { useRef, useContext } from "react";
import { DataContext } from "../context/context-provider";

//ICONS
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';

const SongRow = ({ track }) => {
    const [{ song, playing }, dispatch] = useContext(DataContext);

    const [state, setState] = useState("paused");

    let Icon = song?.preview_url === track?.preview_url
        ? <PauseCircleFilledIcon />
        : <PlayCircleFilledIcon />

    const player = useRef();
    const playSong = async () => {
        player.current.src = track.preview_url;
        player.current.play();
        dispatch({
            type: 'SET_SONG',
            song: track
        })
        dispatch({
            type: 'SET_PLAYING',
            playing: !playing
        })
    };
    return (
        <div className="songRow" onClick={() => playSong()}>
            <audio ref={player} />
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