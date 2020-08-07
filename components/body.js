import '../styles/body.css';
import Header from './header';
import { useContext, useRef } from 'react';
import { DataContext } from '../context/context-provider';
import SongRow from './song-row';
import BodyInfo from './body-info';

const Body = ({ spotify }) => {
    const player = useRef();
    const [{ user, weekly, song, playing }, dispatch] = useContext(DataContext);
    const songRows = weekly?.tracks?.items?.map(
        each => <SongRow
            key={each.id}
            track={each.track}
        />
    )

    if (playing && song) {
        if (player.current?.src === song.preview_url && playing === true) {
            player.current.pause();
            dispatch({
                type: 'SET_PLAYING',
                playing: false
            })
            console.log('PAUSING SAME SONG', playing)
        }
        else if (player.current?.src === song.preview_url && playing === false) {
            player.current.play();
            dispatch({
                type: 'SET_PLAYING',
                playing: true
            })
            console.log('PLAYING SAME SONG', playing)
        }
        else {
            player.current.pause();
            player.current.src = song.preview_url;
            player.current.play();
            console.log('PLAYING NEW SONG', playing)
        }
    }

    return (
        <div className="body">
            <Header spotify={spotify} />
            <BodyInfo user={user} weekly={weekly} />
            <div className="body__songsList">
                <audio ref={player} />
                {songRows}
            </div>
        </div>
    )
}
export default Body;