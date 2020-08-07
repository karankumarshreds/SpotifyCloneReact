export const authEndpoint = "https://accounts.spotify.com/en/authorize";
const redirectUri = "https://spotify-clone-d9af8.web.app/";
const clientId = "379a18794eed412a83946d11a16fb463";
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
    // for playback 
    "streaming", "user-read-email", "user-read-private"
];
export const getToken = () => {
    // goes to the hash in the current url 
    return window.location.hash.split('&')[0].split("=")[1];
}
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;