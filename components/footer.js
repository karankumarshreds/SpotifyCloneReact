import '../styles/footer.css';
import ContinuousSlider from './slider';
// ICONS
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';


const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__left">
                <p>Song details here</p>
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