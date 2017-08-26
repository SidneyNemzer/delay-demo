/* This file starts the editor as a regular webpage
   It simulates panel.js (start editor) and background.js (redux store)
*/

import { createStore } from 'redux'
import rootReducer from './editor/reducers'
import { saved } from './editor/actions'
import createEditor from './editor'

const store = createStore(rootReducer)

const fakeStore = {
	dispatch: (...args) => {
		setTimeout(() => {
			store.dispatch(...args)
		}, 0) // Even a delay of 0 causes an issue...
	}
}

let delayDispatch = true
createEditor(new Proxy(
	store,
	{
		get: (target, key) => {
			if (key === 'dispatch') {
				return (...args) => {
          if (delayDispatch) {
            return fakeStore.dispatch(...args)
          } else {
            return store.dispatch(...args)
          }
        }
			} else {
				return target[key]
			}
		}
}))

const label = document.createElement('label')
label.innerHTML = 'Delay store dispatches <input type="checkbox" id="delay">'
const checkbox = label.querySelector('#delay')
checkbox.checked = delayDispatch
checkbox.addEventListener('click', () => {
  delayDispatch = checkbox.checked
})
const body = document.querySelector('body')
body.prepend(label)

// Simulate react-chrome-redux store
store.dispatch({ type: 'LOADED' })
