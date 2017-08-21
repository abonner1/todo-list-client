import React from 'react';
import AddTodo from './AddTodo';
import { Redirect } from 'react-router-dom'
import Todo from './Todo'


const TodoList = ({todoLists, todos, dispatch, match}) => {
  const currentTodoList = todoLists.find(todoList => todoList.id === match.params.todo_list_id, 10)
  const currentTodos = todos.length ? todos.filter(todo => todo.todoListId === currentTodoList.id) : null

  return (
    <div>
      <h1>{currentTodoList && currentTodoList.name}</h1>
      <AddTodo onTodoSubmit={dispatch} id={match.params.todo_list_id} />
      <ul>
        {currentTodos && currentTodos.map((todo, i) => <Todo key={i} todo={todo} onTodoSubmit={dispatch} />)}
      </ul>
      {currentTodoList ? null : <Redirect from="/todo_lists/:todo_list_id" to="/todo_lists" />}
    </div>
  )
}

export default TodoList;
