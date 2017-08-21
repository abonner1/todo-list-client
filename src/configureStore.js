import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/index'
import { composeWithDevTools } from 'redux-devtools-extension'
import { loadState } from './localStorage'

const persistedState = loadState()

const configureStore = () => {
  return createStore(
    rootReducer,
    persistedState,
    composeWithDevTools(applyMiddleware(thunk))
  )
}

export default configureStore
