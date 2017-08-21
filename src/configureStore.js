import { createStore, applyMiddleware } from 'redux'
import { loadState } from './localStorage'
import rootReducer from './reducers/index'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'


const persistedState = loadState()

const configureStore = () => {
  return createStore(
    rootReducer,
    persistedState,
    composeWithDevTools(applyMiddleware(thunk))
  )
}

export default configureStore
