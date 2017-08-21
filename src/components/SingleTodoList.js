import React from 'react'
import { Link } from 'react-router-dom'
import { deleteTodoList } from '../actions/todoLists'

const SingleTodoList = (props) => {
  return (
    <li>
      <Link to={`/todo_lists/${props.todoList.id}`}>
        {props.todoList.name}
      </Link>
      <button type="button" onClick={() => props.dispatch(deleteTodoList(props.todoList.id))}>
        X
      </button>
    </li>
  )
}

export default SingleTodoList
