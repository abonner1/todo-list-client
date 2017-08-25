import React, { Component } from 'react'
import AddTodoList from './AddTodoList'
import TodoListDisplay from './TodoListDisplay'
import { fetchTodoLists } from '../actions/todoLists'

class TodoLists extends Component {
  componentWillMount() {
    this.props.dispatch(fetchTodoLists(localStorage.getItem('token')))
  }

  render () {
    const displayTodoLists = this.props.todoLists.map((todoList, i) => {
      return <TodoListDisplay key={i} todoList={todoList} dispatch={this.props.dispatch}/>
    })

    return (
      <div className="inline todo-lists">
        <h2>Your Todo Lists</h2>
        <ul className="list">
          {displayTodoLists}
        </ul>
        <AddTodoList dispatch={this.props.dispatch} />
      </div>
    )
  }
}

export default TodoLists;
