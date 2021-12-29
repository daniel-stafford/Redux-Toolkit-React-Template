import { combineReducers } from '@reduxjs/toolkit'
import { counterSlice } from 'redux/counterSlice'
import { themeSlice } from 'redux/themeSlice'
import { todoSlice } from 'redux/todoSlice'

const reducer = combineReducers({
  counter: counterSlice.reducer,
  todo: todoSlice.reducer,
  theme: themeSlice.reducer,
})

export type ReducerType = ReturnType<typeof reducer>
export default reducer
