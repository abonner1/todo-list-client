import React from 'react';

const TodoList = ({ todoList }) => {
  return (
    <li>{todoList.id} - {todoList.name}</li>
  )
}

export default TodoList;
