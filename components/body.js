import '../styles/body.css';
import Header from './header';
import { Avatar } from '@material-ui/core';
import { useContext } from 'react';
import { DataContext } from '../context/context-provider';
import SongRow from './song-row';

//ICONS
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const Body = ({ spotify }) => {
    const [{ user, weekly }] = useContext(DataContext);
    const songRows = weekly?.tracks?.items?.map(each => <SongRow key={each.added_at} track={each.track} />)
    return (
        <div className="body">
            <Header spotify={spotify} />
            <div className="body__info">
                <Avatar
                    className="body__avatar"
                    src={user?.images[0]?.url || "/face.jpg"}
                    style={{ width: 230, height: 230 }}
                />
                <div className="body__infoText">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>{weekly?.description}</p>
                </div>
            </div>
            <div className="body__songs">
                <div className="body__icons">
                    <PlayCircleFilledIcon
                        className="body__playButton"
                        style={{ fontSize: 70 }} />
                    <FavoriteIcon />
                    <MoreHorizIcon />
                </div>
            </div>
            <div className="body__songsList">
                {songRows}
            </div>
        </div>
    )
}
export default Body;