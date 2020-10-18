import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

import { rootReducer } from 'redux/rootReducer'

export const store = configureStore({ reducer: rootReducer })

//allows correct types from dispatch, such as dispatch.abort() when
//cleaning up dispatch in a useEffect hook
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
