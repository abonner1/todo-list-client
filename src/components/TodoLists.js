import React from 'react';
import AddTodoList from './AddTodoList';
import { Link } from 'react-router-dom'

const TodoLists = ({match, onTodoListSubmit, todoLists}) => {
  const displayTodoLists = todoLists.map((todoList, i) => <li key={i}><Link to={`/todo_lists/${todoList.id}`}>{todoList.name}</Link></li>)

  return (
    <div>
      <h2>Your Todo Lists</h2>
      <ul>
        {displayTodoLists}
      </ul>
      <AddTodoList onTodoListSubmit={onTodoListSubmit} />
    </div>
  )
}

export default TodoLists;
