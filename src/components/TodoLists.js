import React from 'react'
import AddTodoList from './AddTodoList'
import SingleTodoList from './SingleTodoList'


const TodoLists = ({match, dispatch, todoLists}) => {
  const displayTodoLists = todoLists.map((todoList, i) => {
    return <SingleTodoList key={i} todoList={todoList} dispatch={dispatch}/>
  })

  return (
    <div>
      <h2>Your Todo Lists</h2>
      <ul>
        {displayTodoLists}
      </ul>
      <AddTodoList dispatch={dispatch} />
    </div>
  )
}

export default TodoLists;
