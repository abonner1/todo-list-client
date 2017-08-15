import React from 'react';
import TodoList from './TodoList';
import AddTodoList from './AddTodoList';

const TodoLists = props => {
  return (
    <div>
      <h2>Your Todo Lists</h2>
      <ul>
        <TodoList />
      </ul>
      <AddTodoList />
    </div>
  )
}

export default TodoLists;
