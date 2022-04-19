import { createSlice } from '@reduxjs/toolkit'



// 创建一个计数器的状态切片
const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        counter: 0
    },
    reducers: {
        addAction: (state, action) => {
            return { ...state, counter: action.num }
        },
    }
})

export const { addAction} = counterSlice.actions
export default counterSlice.reducer