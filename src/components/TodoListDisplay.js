import React from 'react'
import { Link } from 'react-router-dom'
import { destroyTodoList } from '../actions/todoLists'

const TodoListDisplay = ({todoList, dispatch}) => {
  return (
    <li>
      <Link className="todo-list-links" to={`/todo_lists/${todoList.id}`}>
        {todoList.name}
      </Link>
      <button type="button" onClick={() => dispatch(destroyTodoList(todoList.id, localStorage.getItem('token')))}>
        X
      </button>
    </li>
  )
}

export default TodoListDisplay
