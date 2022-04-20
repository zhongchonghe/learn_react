import { createSlice } from '@reduxjs/toolkit'

/** 同步 */
export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 10,
        title: 'redux toolkit learn'
    },
    reducers: {
        increment(state, { payload }) {
            console.log(payload);
            state.count = state.count + payload.step;
        },
        decrement(state) {
            state.count -= 1;
        }
    }
})

export const { increment, decrement } = counterSlice.actions
/** 异步 */
export const asyncIncrement = (payload) => dispatch => {
    setTimeout(() => {
        dispatch(increment(payload))
    }, 2000)
}

export default counterSlice.reducer
