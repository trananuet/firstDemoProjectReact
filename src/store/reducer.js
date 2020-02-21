const INITIAL_STATE = {
    dataSony: {
        type: 'XP',
        value: 'Computer'
    }
};

function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'getData':
            return { ...state, oke: 'oke' }
        case 'ADD_DATA':
            return { ...state, data: action.value }
        default:
            return state
    }
}

export default reducer;