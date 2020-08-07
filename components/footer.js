import '../styles/footer.css';
import ContinuousSlider from './slider';
import { useContext } from 'react';
import { DataContext } from '../context/context-provider';
// ICONS
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';

const Footer = () => {
    const [{ song, playing }] = useContext(DataContext)
    return (
        <div className="footer">
            <div className="footer__left">
                <img
                    className="footer__albumLogo"
                    src={song?.album.images[0].url || "/art.jpg"}
                    alt={song?.name}
                />
                {song ? (
                    <div className="footer__songInfo">
                        <h4>{song.name || "Song name"}</h4>
                        <p>{song.artists.map((artist) => artist.name).join(", ")}</p>
                    </div>
                ) : (
                        <div className="footer__songInfo">
                            <h4>No song is playing</h4>
                            <p>...</p>
                        </div>
                    )}
            </div>
            <div className="footer__center">
                <ShuffleIcon style={{ fontSize: 20 }} />
                <SkipPreviousIcon style={{ fontSize: 20 }} />
                {
                    playing === true
                        ?
                        <PauseCircleOutlineIcon className="songRow__active footer__playButton" style={{ fontSize: 40 }} />
                        :
                        <PlayCircleOutlineIcon className="footer__playButton" style={{ fontSize: 40 }} />

                }
                <SkipNextIcon style={{ fontSize: 20 }} />
                <RepeatIcon style={{ fontSize: 20 }} />
            </div>
            <div className="footer__right">
                <ContinuousSlider />
            </div>
        </div>
    )
}
export default Footer;