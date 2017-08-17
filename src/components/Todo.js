import React from 'react'
import { deleteTodo } from '../actions/todos'

const Todo = (props) => {
  return (
    <li>
      {props.todo.description}
      <button type="button" onClick={() => props.onTodoSubmit(deleteTodo(props.todo.id))}>
        X
      </button>
    </li>
  )
}

export default Todo
