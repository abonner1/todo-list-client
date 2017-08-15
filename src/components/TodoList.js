import React from 'react';
import AddTodo from './AddTodo';

const TodoList = ({todoLists, todos}) => {
  const displayName = todoLists[0] ? todoLists[0].name : null
  return (
    <div>
      <h1>{displayName}</h1>
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
