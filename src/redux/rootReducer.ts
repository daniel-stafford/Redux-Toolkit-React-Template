import { combineReducers } from '@reduxjs/toolkit'
import { counterSlice } from 'redux/counterSlice'
import { todoSlice } from 'redux/todoSlice'

const reducer = combineReducers({
  counter: counterSlice.reducer,
  todo: todoSlice.reducer
})

export type ReducerType = ReturnType<typeof reducer>
export default reducer
