import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

import { StoreState } from 'redux/types'
import { Counter } from 'components/Counter'
import { Todo } from 'components/Todo'
import { Toggle } from 'components/Toggle'
import { Title } from 'Styled/Styled'
import 'root.css'

export function App() {
  const { theme } = useSelector((state: StoreState) => state)

  useEffect(() => {
    document.documentElement.setAttribute('app-theme', theme)
  }, [theme])

  const title =
    'React + Redux Toolkit + Redux Persist + Styled Components+ Husky'
  return (
    <>
      <Title>{title}</Title>
      <Counter />
      <Todo />
      <Toggle />
    </>
  )
}
