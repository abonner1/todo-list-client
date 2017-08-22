import React from 'react'
import AddTodoList from './AddTodoList'
import TodoListDisplay from './TodoListDisplay'


const TodoLists = ({match, dispatch, todoLists}) => {
  const displayTodoLists = todoLists.map((todoList, i) => {
    return <TodoListDisplay key={i} todoList={todoList} dispatch={dispatch}/>
  })

  return (
    <div className="inline todo-lists">
      <h2>Your Todo Lists</h2>
      <ul>
        {displayTodoLists}
      </ul>
      <AddTodoList dispatch={dispatch} />
    </div>
  )
}

export default TodoLists;
