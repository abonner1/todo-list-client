import React, { Component } from 'react'
import FilterableTodoLists from '../containers/FilterableTodoLists'
import Header from './Header'
import VisibleTodoList from '../containers/VisibleTodoList'
import { Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
          <Route key="0" path="/todo_lists" exact component={FilterableTodoLists} />
          <Route key="1" path="/todo_lists/:todo_list_id" exact component={FilterableTodoLists} />
          <Route key="2" path="/todo_lists/:todo_list_id" exact component={VisibleTodoList} />
      </div>
    );
  }
}

export default App
