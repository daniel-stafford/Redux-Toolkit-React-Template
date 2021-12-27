import React from 'react'

import { Counter } from 'components/Counter'
import { Todo } from 'components/Todo'
import { Title } from 'Style/Title.style'

export function App() {
  return (
    <div>
      <Title>
        React + Redux Toolkit + Redux Persist + Styled Components + Husky
      </Title>
      <Counter />
      <Todo />
    </div>
  )
}
