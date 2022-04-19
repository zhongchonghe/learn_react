const initState = {
    counter: 0
}

function const initialState = {

}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case ADD_NUMBER:
        return { ...state, ...payload }

    default:
        return state
    }
}


 
