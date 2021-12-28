import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

import { Counter } from 'components/Counter'
import { Todo } from 'components/Todo'
import { Title } from 'Style/Title.style'

const useStyles = makeStyles({
  button: {
    backgroundColor: 'yellow',
    color: 'black',
    '&:hover': {
      backgroundColor: 'olive'
    }
  }
})

export function App() {
  const classes = useStyles()

  return (
    <div>
      <Title>React + Redux Toolkit + Redux Persist + Styled Components+</Title>
      <p>Test GH Action</p>
      <Button variant="contained" className={classes.button}>
        Click me!
      </Button>
      <Counter />
      <Todo />
    </div>
  )
}
