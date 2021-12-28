import React, { useEffect } from 'react'

import { Counter } from 'components/Counter'
import { Todo } from 'components/Todo'
import { Toggle } from 'components/Toggle'

import { Rotate, Title } from 'Styled/Styled'
import { useSelector } from 'react-redux'
import { StoreState } from 'redux/types'
import 'root.css'

export function App() {
  const { theme } = useSelector((state: StoreState) => state)

  useEffect(() => {
    document.documentElement.setAttribute('app-theme', theme)
  }, [theme])

  return (
    <div>
      <Title>
        <Rotate>
          React + Redux Toolkit + Redux Persist + Styled Components+ Husky
          +_Yarn
        </Rotate>
      </Title>
      <Counter />
      <Todo />
      <Toggle />
    </div>
  )
}
