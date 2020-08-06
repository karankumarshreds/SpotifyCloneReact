import '../styles/player.css';
import Sidebar from './sidebar';
import Body from './body';
import Footer from './footer';
import { useContext } from 'react';
import { DataContext } from '../context/context-provider';

const Player = ({ spotify }) => {
    const [{ token }, dispatch] = useContext(DataContext);
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