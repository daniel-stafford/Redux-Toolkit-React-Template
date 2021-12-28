import React from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'redux/store'
import { themeSlice } from 'redux/themeSlice'
import { Theme, StoreState } from 'redux/types'

export function Toggle() {
  const { theme } = useSelector((state: StoreState) => state)
  const dispatch = useAppDispatch()

  function handleToggle() {
    theme === 'light'
      ? dispatch(themeSlice.actions.set(Theme.dark))
      : dispatch(themeSlice.actions.set(Theme.light))
  }
  return (
    <>
      <button onClick={handleToggle}>Toggle Theme</button>
    </>
  )
}
