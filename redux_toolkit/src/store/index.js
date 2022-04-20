import { configureStore } from '@reduxjs/toolkit'

import counterSlice from './feature/counterSlice'
import movieSlice from './feature/movieSlice'

export default configureStore({
    reducer: {
        counter: counterSlice,
        movie: movieSlice
    }
})