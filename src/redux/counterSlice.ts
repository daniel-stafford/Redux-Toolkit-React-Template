import { createSlice } from '@reduxjs/toolkit'

const initialState = 0 as number

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      //as initial state is primitive, must return state (e.g. the old way)
      return state + 1
    },
    decrement: (state) => {
      return state - 1
    },
  },
})
