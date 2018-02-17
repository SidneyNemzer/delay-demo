import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Store } from 'react-chrome-redux'
import App from './components/App'

const chromeReduxStore = () =>
  new Store({
    portName: 'DEMO'
  })

export default (store = chromeReduxStore()) => {
  const unsubscribe = store.subscribe(() => {
    unsubscribe()
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById('root')
    )
  })
}
