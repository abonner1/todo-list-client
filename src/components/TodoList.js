import React, { Component } from 'react';
import AddTodo from './AddTodo';
import { Redirect } from 'react-router-dom'
import Todo from './Todo'
import { fetchTodos } from '../actions/todos'


class TodoList extends Component{
  componentDidMount() {
    this.props.dispatch(fetchTodos(this.props.match.params.todo_list_id, localStorage.getItem('token')))
  }

  render() {
    const currentTodoList = this.props.todoLists.find(todoList => todoList.id === parseInt(this.props.match.params.todo_list_id, 10))
    const currentTodos = currentTodoList && this.props.todos.length ? this.props.todos.filter(todo => todo.todo_list_id === parseInt(currentTodoList.id, 10)) : null
    const todoDisplay = currentTodos && currentTodos.map((todo, i) => <Todo key={i} todo={todo} dispatch={this.props.dispatch} />)
    const emptyTodoListRedirect = currentTodoList ? null : <Redirect from="/todo_lists/:todo_list_id" to="/todo_lists" />

    return (
      <div className="inline todo-list">
        <h2>{currentTodoList && currentTodoList.name}</h2>
        <AddTodo dispatch={this.props.dispatch} id={this.props.match.params.todo_list_id} />
        <ul className="list">
          {todoDisplay}
        </ul>
        {emptyTodoListRedirect}
      </div>
    )
  }
}

export default TodoList;
