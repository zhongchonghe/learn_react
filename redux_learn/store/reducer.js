

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case ADD_NUMBER:
            return { ...state, counter: state.counter + payload }
        case SUB_NUMBER:
            return { ...state, counter: state.counter - payload }
        default:
            return state
    }
}



