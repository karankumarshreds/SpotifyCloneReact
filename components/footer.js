import '../styles/footer.css';
import ContinuousSlider from './slider';
import { useContext } from 'react';
import { DataContext } from '../context/context-provider';
// ICONS
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';

const Footer = () => {
    const [{ item }] = useContext(DataContext)
    return (
        <div className="footer">
            <div className="footer__left">
                <img
                    className="footer__albumLogo"
                    src={item?.album.images[0].url || "/art.jpg"}
                    alt={item?.name}
                />
                {item ? (
                    <div className="footer__songInfo">
                        <h4>{item.name || "Song name"}</h4>
                        {/* <p>{item.artists.map((artist) => artist.name).join(", ")}</p> */}
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
                <PlayCircleOutlineIcon className="footer__playButton" style={{ fontSize: 40 }} />
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