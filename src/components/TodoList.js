import React from 'react';
import AddTodo from './AddTodo';

const TodoList = (props) => {
  return (
    <div>
      <h1>Current Todo List</h1>
      <AddTodo />
      <ul>
        <li><input type="checkbox" /> Milk <button>X</button></li>
        <li><input type="checkbox" /> Eggs <button>X</button></li>
        <li><input type="checkbox" /> Butter <button>X</button></li>
      </ul>
    </div>
  )
}

export default TodoList;
