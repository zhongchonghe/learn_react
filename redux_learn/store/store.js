import redux from 'redux'
import { configureStore } from '@reduxjs/toolkit'

import counterReducer from './slice.js'


const store = configureStore({
    reducer: {
        counter: counterReducer
    }
});

export {
    store,

}
// https://www.bilibili.com/video/BV1MK411w7vt?spm_id_from=333.337.search-card.all.click