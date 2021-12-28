import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Theme } from 'redux/types'

const initialState = 'light'

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    set: (state, action: PayloadAction<Theme>) => {
      state = action.payload
      return state
    },
  },
})
