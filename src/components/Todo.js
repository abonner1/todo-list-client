import React from 'react'
import { deleteTodo } from '../actions/todos'
import { toggleTodo } from '../actions/todos'

const Todo = (props) => {
  return (
    <li
      style={
        {textDecoration: props.todo.completed ? 'line-through' : 'none'}
      }
      onClick={() => props.onTodoSubmit(toggleTodo(props.todo.id))}>
      {props.todo.description}
      <button type="button" onClick={() => props.onTodoSubmit(deleteTodo(props.todo.id))}>
        X
      </button>
    </li>
  )
}

export default Todo
