import React, { Component } from 'react';
import { fetchTodos } from '../actions/todos'
import { getToken } from '../helpers/getToken'
import AddTodo from './AddTodo';
import Todo from './Todo'
import { Redirect } from 'react-router-dom'

class TodoList extends Component{
  componentDidMount() {
    this.props.dispatch(fetchTodos(this.props.match.params.todo_list_id, getToken()))
  }

  currentTodoList = () => {
    let currentTodoList = this.props.todoLists.find(todoList => {
      return todoList.id === parseInt(this.props.match.params.todo_list_id, 10)
    })
    return currentTodoList
  }

  currentTodos = () =>
    (this.props.todos.length)
    ? this.props.todos.filter(todo => {
      return todo.todo_list_id === parseInt(this.currentTodoList().id, 10)
    })
    : null

  todoDisplay = () => this.currentTodos().map((todo, i) => {
    return <Todo key={i} todo={todo} dispatch={this.props.dispatch} />
  })

  currentTodoListDisplay = () => (
    <div className="inline todo-list">
      <h2>{this.currentTodoList().name}</h2>

      <AddTodo dispatch={this.props.dispatch} id={this.props.match.params.todo_list_id} />

      <ul className="list">
        {this.todoDisplay()}
      </ul>
    </div>
  )

  render() {
    return (
      this.currentTodoList()
      ? this.currentTodoListDisplay()
      : <Redirect from="/todo_lists/:todo_list_id" to="/todo_lists" />
    )
  }
}

export default TodoList;
