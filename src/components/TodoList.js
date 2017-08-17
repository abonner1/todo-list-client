import React from 'react';
import AddTodo from './AddTodo';
import { Redirect } from 'react-router-dom'
import Todo from './Todo'


const TodoList = ({todoLists, todos, onTodoSubmit, match}) => {
  const currentTodoList = todoLists.find(todoList => todoList.id === parseInt(match.params.todo_list_id, 10))
  const currentTodos = todos.length ? todos.filter(todo => todo.todoListId === currentTodoList.id) : null

  return (
    <div>
      <h1>{currentTodoList && currentTodoList.name}</h1>
      <AddTodo onTodoSubmit={onTodoSubmit} id={match.params.todo_list_id} />
      <ul>
        {currentTodos && currentTodos.map((todo, i) => <Todo key={i} todo={todo} onTodoSubmit={onTodoSubmit} />)}
      </ul>
      {currentTodoList ? null : <Redirect from="/todo_lists/:todo_list_id" to="/todo_lists" />}
    </div>
  )
}

export default TodoList;
