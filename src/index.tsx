import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { App } from 'App'
import { store } from 'redux/store'

function WithProvider() {
  return (
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  )
}

ReactDOM.render(<WithProvider />, document.getElementById('root'))
