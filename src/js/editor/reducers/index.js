import { EDITED } from '../actions'

const reducer = (state = '', action) => {
  switch (action.type) {
    case EDITED:
      return action.newContent
    default:
      return state
  }
}

export default reducer
