import React from 'react'
import { deleteTodo } from '../actions/todos'
import { toggleTodo } from '../actions/todos'

const Todo = (props) => {
  return (
    <li style={{textDecoration: props.todo.completed ? 'line-through' : 'none'}}>
      <span onClick={() => props.dispatch(toggleTodo(props.todo.id))}>{props.todo.description}</span>
      <button type="button" onClick={() => props.dispatch(deleteTodo(props.todo.id))}>
        X
      </button>
    </li>
  )
}

export default Todo
