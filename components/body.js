import '../styles/body.css';
import Header from './header';
import { useContext, useRef, useEffect } from 'react';
import { DataContext } from '../context/context-provider';
import SongRow from './song-row';
import BodyInfo from './body-info';

const Body = ({ spotify }) => {
    const player = useRef();
    const [{ user, weekly, song, playing }, dispatch] = useContext(DataContext);

    useEffect(() => {
        if (playing === true && song) {
            player.current.src = song.preview_url;
            console.log('PLAYING SONG ', song.name);
            player.current.play();
        }
        if (playing === false) player.current.pause();
    }, [playing, song]);

    const changeSongState = async (track) => {
        console.log(track.name);
        if (song?.id === track.id && playing === true) {
            await dispatch({
                type: 'SET_SONG',
                song: null
            });
            await dispatch({
                type: 'SET_PLAYING',
                playing: false
            });
        } else {
            await dispatch({
                type: 'SET_SONG',
                song: track
            });
            await dispatch({
                type: 'SET_PLAYING',
                playing: true
            });
        }
    }

    const songRows = weekly?.tracks?.items?.map(
        each => <SongRow
            key={each.id}
            track={each.track}
            changeSongState={changeSongState}
            song={song}
            playing={playing}
        />
    )

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