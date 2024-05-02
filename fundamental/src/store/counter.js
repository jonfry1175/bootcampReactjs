const DEFAULT_STATE = {
    count: 0,
    // message: "Hello"
}

// ...state = mengembalikan semua state
// action atau dispatch
// ketika dispatch dipanggil, semua reducer akan dijalankan, maka dari itu membutuhkan type
export const counterReducer = (state = DEFAULT_STATE, action) => {
    if (action.type === "INCREMENT") {
        return { ...state, count: state.count + 1 }
    } else if (action.type === "DECREMENT") {
        // sama saja
        const duplicateState = { ...state }
        duplicateState.count = state.count - 1
        return duplicateState
    } else if (action.type === "SET") {
        return { ...state, count: action.payload }
    } else {

        return state
    }

}