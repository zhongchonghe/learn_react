import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// createAsyncThunk     创建一个异步的action,这个方法被触发的时候创建三个状态
// pending  fulfilled   rejected
import { increment } from './counterSlice'


const loadMoviesAPI = () => fetch('https://pcw-api.iqiyi.com/video/video/videoinfowithuser/206293401?type=2&subkey=206293401&subscribe=1&preview=2&agent_type=1&source=210400&appid=21&authcookie=&uid=&flashuid=5f07ac129e0c9e1b6a073157a3078b7f&cid=4&aid=206293401&tvId=206293401&credentials=false').then(res => res.json())


export const loadData = createAsyncThunk('movie/loadData', async () => {
    const res = await loadMoviesAPI()
    return res //  此处的结果会在fulfilled中作为payload值
})

const moveiSlice = createSlice({
    name: 'movie',
    initialState: {
        list: [],
        totals: 0
    },
    reducers: {
        loadDataEnd(state, { payload }) {
            console.log(payload);
            state.list = payload
            state.totals = payload.length
        }
    },
    /** 关联其他reducer */
    extraReducers: {
        // [increment](state, payload) {
        //     console.log(payload);
        //     state.list.push(1)
        //     state.totals += 1
        // },
        [loadData.fulfilled](state, { payload }) {
            console.log(payload);
            state.list = payload.data.categories
        }
    }
})
export const { loadDataEnd } = moveiSlice.actions

export default moveiSlice.reducer
