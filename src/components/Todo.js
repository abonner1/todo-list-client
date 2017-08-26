import React from 'react'
import { destroyTodo } from '../actions/todos'
import { toggleTodo } from '../actions/todos'

const Todo = (props) => {
  return (
    <li style={{textDecoration: props.todo.completed ? 'line-through' : 'none'}}>
      <span onClick={() => props.dispatch(toggleTodo(props.todo.id))}>{props.todo.description}</span>
      <button type="button" onClick={() => props.dispatch(destroyTodo(props.todo.id), localStorage.getItem('token'))}>
        X
      </button>
    </li>
  )
}

export default Todo
