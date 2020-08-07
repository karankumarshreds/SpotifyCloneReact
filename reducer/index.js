export const initialState = {
    user: null,
    playlist: [],
    playing: false,
    token: null,
    tracks: [],
    weekly: [],
    song: null
};

const reducer = (state, action) => {
    console.log("Calling action: ", action);
    switch (action.type) {
        case 'SET_USER':
            return { ...state, user: action.user };
        case 'SET_TOKEN':
            return { ...state, token: action.token };
        case 'SET_PLAYLIST':
            return { ...state, playlist: action.playlist };
        case 'SET_TRACKS':
            return { ...state, tracks: action.tracks };
        case 'SET_WEEKLY':
            return { ...state, weekly: action.weekly };
        case 'SET_SONG':
            return { ...state, song: action.song };
        case 'SET_PLAYING':
            return { ...state, playing: action.playing }
        default:
            return state;
    }
}

export default reducer;
