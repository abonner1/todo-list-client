import React from 'react';
import TodoList from './TodoList';
import AddTodoList from './AddTodoList';

const TodoLists = props => {
  const todoLists = props.todoLists.map((todoList, i) => <li key={i}>{todoList.name}</li>)

  return (
    <div>
      <h2>Your Todo Lists</h2>
      <ul>
        {todoLists}
      </ul>
      <AddTodoList onTodoListSubmit={props.onTodoListSubmit} />
    </div>
  )
}

export default TodoLists;
