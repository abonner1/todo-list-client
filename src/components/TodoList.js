import React from 'react';
import AddTodo from './AddTodo';
import { Redirect } from 'react-router-dom'
import Todo from './Todo'


const TodoList = ({todoLists, todos, dispatch, match}) => {
  const currentTodoList = todoLists.find(todoList => todoList.id === match.params.todo_list_id)
  const currentTodos = currentTodoList && todos.length ? todos.filter(todo => todo.todoListId === currentTodoList.id) : null
  const todoDisplay = currentTodos && currentTodos.map((todo, i) => <Todo key={i} todo={todo} dispatch={dispatch} />)
  const emptyTodoListRedirect = currentTodoList ? null : <Redirect from="/todo_lists/:todo_list_id" to="/todo_lists" />

  return (
    <div className="inline todo-list">
      <h2>{currentTodoList && currentTodoList.name}</h2>
      <AddTodo dispatch={dispatch} id={match.params.todo_list_id} />
      <ul className="list">
        {todoDisplay}
      </ul>
      {emptyTodoListRedirect}
    </div>
  )
}

export default TodoList;
