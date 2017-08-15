import {combineReducers} from 'redux'
import todos from './todos'
import todoLists from './todoLists'

const TodoApp = combineReducers({
  todoLists,
  todos
})

export default TodoApp
