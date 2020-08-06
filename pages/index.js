import '../styles/global.css';
import Login from '../components/login';
import { useEffect, useState, useContext } from 'react';
import { getToken } from '../components/spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from '../components/player';
import { DataContext } from '../context/context-provider';

const spotify = new SpotifyWebApi();

const LandingPage = () => {

    const [{ user, token }, dispatch] = useContext(DataContext);

    useEffect(() => {
        const _token = getToken();
        if (_token) {
            // set token in state
            dispatch({
                type: 'SET_TOKEN',
                token: _token
            });
            // clear the token from the url
            window.location.hash = "";
            // authenticate using this token 
            const authenticate = async () => {
                spotify.setAccessToken(_token);
                const user = await spotify.getMe();
                console.log('USER', user);
                // dispatch an action
                dispatch({
                    type: 'SET_USER',
                    user
                });
                const playlist = await spotify.getUserPlaylists();
                console.log('PLAYLIST', playlist)
                dispatch({
                    type: 'SET_PLAYLIST',
                    playlist
                })
                const weekly = await spotify.getPlaylist('44hjVgTeQ1RnMmslYupmlQ');
                console.log('WEEKLY', weekly)
                dispatch({
                    type: 'SET_WEEKLY',
                    weekly
                })
            };
            authenticate();
        }
    }, [user, token]);

    return (
        <div>
            {token ?
                <Player spotify={spotify} />
                :
                <div>
                    <Login />
                </div>
            }
        </div>
    )
};

export default LandingPage;