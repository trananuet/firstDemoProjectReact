function reducer(state = null, action) {
    switch (action.type) {
        case 'SET_DATA_COMPUTER':
            return action.payload;
        default:
            return state
    }
}

export default reducer;