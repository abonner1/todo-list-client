import React from 'react'
import AddTodoList from './AddTodoList'
import SingleTodoList from './SingleTodoList'


const TodoLists = ({match, onTodoListSubmit, todoLists}) => {
  const displayTodoLists = todoLists.map((todoList, i) => <SingleTodoList key={i} todoList={todoList} onTodoListSubmit={onTodoListSubmit}/>)

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
