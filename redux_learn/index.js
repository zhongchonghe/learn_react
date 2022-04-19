// const redux = require('redux')
// import { configureStore } from '@reduxjs/toolkit'
// import { createSlice } from '@reduxjs/toolkit'
// const initState = {
//     counter: 0
// }



// // reducer
// const todosSlice = createSlice({
//     name: 'todos',
//     initialState: [initState],
//     reducers: {
//         todoAdded(state, action) {
//             state.push({
//                 id: action.payload.id,
//                 text: action.payload.text,
//                 completed: false
//             })
//         },
//         todoToggled(state, action) {
//             const todo = state.find(todo => todo.id === action.payload)
//             todo.completed = !todo.completed
//         }
//     }
// })


// // store
// const store = configureStore({
//     reducer: {
//         todos: todosSlice.reducer,
//     }
// });


// // actions

import store from './store/index'

import { addAction, subAction } from './store/actionCreator.js'

store.subscribe(store.getState())

store.dispatch(addAction(5))
store.dispatch(addAction(10))
