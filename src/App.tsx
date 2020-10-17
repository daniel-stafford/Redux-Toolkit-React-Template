import { Counter } from 'components/Counter'
import { Todo } from 'components/Todo'

import React from 'react'

export function App() {
  console.log('env secret example', process.env.REACT_APP_SECRET)
  return (
    <div>
      <h1>Create React App </h1>
      <Counter />
      <Todo />
    </div>
  )
}
