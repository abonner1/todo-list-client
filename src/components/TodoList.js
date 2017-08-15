import React from 'react';

const TodoList = ({ todoList }) => {
  return (
    <li>{todoList.name} <button>X</button></li>
  )
}

export default TodoList;
