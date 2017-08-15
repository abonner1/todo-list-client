import React from 'react';
import TodoList from './TodoList';
import AddTodoList from './AddTodoList';

const TodoLists = props => {
  const todoLists = props.todoLists.map((todoList, i) => <TodoList key={i} todoList={todoList} />)

  return (
    <div>
      <h2>Your Todo Lists</h2>
      <ul>
        {todoLists}
      </ul>
      <AddTodoList />
    </div>
  )
}

export default TodoLists;
