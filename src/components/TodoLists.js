import React from 'react'
import AddTodoList from './AddTodoList'
import { Link } from 'react-router-dom'
import { deleteTodoList } from '../actions/todoLists'


const TodoLists = ({match, onTodoListAdd, todoLists, onTodoListDelete}) => {
  const displayTodoLists = todoLists.map((todoList, i) => <li key={i}><Link to={`/todo_lists/${todoList.id}`}>{todoList.name}</Link> <button type="button" onClick={() => onTodoListDelete(deleteTodoList(todoList.id))}>X</button></li>)

  return (
    <div>
      <h2>Your Todo Lists</h2>
      <ul>
        {displayTodoLists}
      </ul>
      <AddTodoList onTodoListAdd={onTodoListAdd} />
    </div>
  )
}

export default TodoLists;
