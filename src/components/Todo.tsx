import React from 'react'

import { useSelector } from 'react-redux'
import { useAppDispatch } from 'redux/store'
import { fetchTodo } from 'redux/todoSlice'
import { StoreState } from 'redux/types'

export function Todo() {
  const dispatch = useAppDispatch()

  const { todo } = useSelector((state: StoreState) => state)

  function handleGetTodo() {
    dispatch(fetchTodo())
  }

  return (
    <div>
      <button onClick={handleGetTodo}>Get random todo</button>
      {todo?.data?.title}
    </div>
  )
}
