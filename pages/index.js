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
                // dispatch an action
                dispatch({
                    type: 'SET_USER',
                    user
                });
            };
            const getPlaylist = async () => {
                const playlist = await spotify.getUserPlaylists();
                dispatch({
                    type: 'SET_PLAYLIST',
                    playlist
                })
            }

            authenticate();
        }
    }, [user, token]);

    return (
        <div>
            {token ?
                <Player />
                :
                <div>
                    <Login />
                </div>
            }
        </div>
    )
};

export default LandingPage;