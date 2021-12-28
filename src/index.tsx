import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import CssBaseline from '@material-ui/core/CssBaseline'

import { App } from 'App'
import { store } from 'redux/store'

const persistor = persistStore(store)

function WithProvider() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <CssBaseline />
        <App />
      </PersistGate>
    </Provider>
  )
}

ReactDOM.render(<WithProvider />, document.getElementById('root'))
