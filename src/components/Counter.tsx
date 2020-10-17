import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { counterSlice } from 'redux/counterSlice'
import { StoreState } from 'redux/types'

export function Counter() {
  const dispatch = useDispatch()
  const { counter } = useSelector((state: StoreState) => state)
  function handleAdd() {
    dispatch(counterSlice.actions.increment())
  }

  function handleSubtract() {
    dispatch(counterSlice.actions.decrement())
  }

  return (
    <div>
      <button onClick={handleAdd}>Add One</button>
      <button onClick={handleSubtract}>Subtract One</button>
      {counter}
    </div>
  )
}
