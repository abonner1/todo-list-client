import React from 'react'
import { destroyTodo } from '../actions/todos'
import { updateTodo } from '../actions/todos'

const Todo = (props) => {
  const handleTodoToggle = () => props.dispatch(updateTodo(props.todo), localStorage.getItem('token'))

  const handleTodoDestroy = () => props.dispatch(destroyTodo(props.todo.id), localStorage.getItem('token'))

  return (
    <li style={{textDecoration: props.todo.completed ? 'line-through' : 'none'}}>
      <span onClick={handleTodoToggle} >{props.todo.description}</span>
      <button type="button" onClick={handleTodoDestroy}>x</button>
    </li>
  )
}

export default Todo
