import React from 'react'
import AddTodoList from './AddTodoList'
import SingleTodoList from './SingleTodoList'


const TodoLists = ({match, onTodoListAdd, todoLists, onTodoListDelete}) => {
  const displayTodoLists = todoLists.map((todoList, i) => <SingleTodoList key={i} todoList={todoList} onTodoListDelete={onTodoListDelete}/>)

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
