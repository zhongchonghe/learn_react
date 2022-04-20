import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 1,
        title: 'redux toolkit learn'
    },
    reducers: {
        increment(state, action) {
            state.count = state.count + 1;
        },
        decrement(state) {
            state.count -= 1;
        }
    }
})

export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer
