const DEFAULT_STATE = {
    whislist: []
}

export const whislistReducer = (state = DEFAULT_STATE, action) => {
    if (action.type === "GET_WHISLIST") {
        return { ...state, whislist: action.payload }
    } else if(action.type === "ADD_WHISLIST") {
        return { ...state, whislist: [...state.whislist, action.payload] }
    } else {

        return state
    }
}