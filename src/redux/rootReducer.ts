import { counterSlice } from 'redux/counterSlice'
import { todoSlice } from 'redux/todoSlice'

export const rootReducer = {
  counter: counterSlice.reducer,
  todo: todoSlice.reducer,
}
