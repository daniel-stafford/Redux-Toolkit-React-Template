import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTodo } from 'redux/todoSlice'
import { StoreState } from 'redux/types'

export function Todo() {
  const dispatch = useDispatch()
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
