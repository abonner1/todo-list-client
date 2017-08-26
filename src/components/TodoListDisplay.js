import React from 'react'
import { Link } from 'react-router-dom'
import { destroyTodoList } from '../actions/todoLists'
import { getToken } from '../helpers/getToken'

const TodoListDisplay = ({todoList, dispatch}) => {
  const handleTodoListDestroy = () => dispatch(destroyTodoList(todoList.id, getToken()))

  return (
    <li>
      <Link className="todo-list-links" to={`/todo_lists/${todoList.id}`}>{todoList.name}</Link>
      <button type="button" onClick={handleTodoListDestroy}>X</button>
    </li>
  )
}

export default TodoListDisplay
