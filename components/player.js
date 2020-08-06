import '../styles/player.css';
import Sidebar from './sidebar';
import Body from './body';
import Footer from './footer';

const Player = ({ spotify }) => {
    return (
        <div className="player">
            <div className="player__body">
                <Sidebar />
                <Body spotify={spotify} />
            </div>
            <Footer />
        </div>
    )
};

export default Player;