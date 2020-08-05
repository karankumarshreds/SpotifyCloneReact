export const initialState = {
    user: null,
    playlist: [],
    playing: false,
    token: null
};

const reducer = (state, action) => {
    // console.log("Calling action: ", action);
    switch (action.type) {
        case 'SET_USER':
            return { ...state, user: action.user };
        case 'SET_TOKEN':
            return { ...state, token: action.token };
        default:
            return state;
    }
}

export default reducer;
