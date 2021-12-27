import React from 'react'

import { useSelector } from 'react-redux'
import { counterSlice } from 'redux/counterSlice'
import { useAppDispatch } from 'redux/store'
import { StoreState } from 'redux/types'

export function Counter() {
  const dispatch = useAppDispatch()
  const { counter } = useSelector((state: StoreState) => state)

  function handleAdd() {
    dispatch(counterSlice.actions.increment())
  }

  function handleSubtract() {
    dispatch(counterSlice.actions.decrement())
  }

  function handleReset() {
    dispatch(counterSlice.actions.reset())
  }

  return (
    <div>
      <button onClick={handleAdd}>Add One</button>
      <button onClick={handleSubtract}>Subtract One</button>
      <button onClick={handleReset}>Reset</button>
      {counter}
    </div>
  )
}
