import { createStore } from 'redux'
import { wrapStore } from 'react-chrome-redux'
import rootReducer from './editor/reducers'

const store = createStore(rootReducer)
wrapStore(store, {portName: 'DEMO'})
