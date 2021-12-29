import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'

import { App } from 'App'
import { store } from 'redux/store'
import { AppContainer } from 'Styled/Styled'

const persistor = persistStore(store)

function WithProvider() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppContainer>
          <App />
        </AppContainer>
      </PersistGate>
    </Provider>
  )
}

ReactDOM.render(<WithProvider />, document.getElementById('root'))
