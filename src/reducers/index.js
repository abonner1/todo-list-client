import {combineReducers} from 'redux'
import todos from './todos'
import todoLists from './todoLists'
import user from './user'

const rootReducer = combineReducers({
  todoLists,
  todos,
  user
})

export default rootReducer
