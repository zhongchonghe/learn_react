import { configureStore } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import reducer from './reduce.js'


const store = configureStore({
    reducer
});

