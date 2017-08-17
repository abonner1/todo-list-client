import React, { Component } from 'react'
import ConnectedTodoLists from './ConnectedTodoLists'
import Header from '../components/Header'
import VisibleTodoList from './VisibleTodoList'
import { Route } from 'react-router-dom'
import SignIn from '../components/User/SignIn'
import SignUp from '../components/User/SignUp'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route key="0" path="/todo_lists" exact component={ConnectedTodoLists} />
        <Route key="1" path="/todo_lists/:todo_list_id" exact component={ConnectedTodoLists} />
        <Route key="2" path="/todo_lists/:todo_list_id" exact component={VisibleTodoList} />
        <Route key="3" path="/sign_up" exact component={SignUp} />
        <Route key="4" path="/sign_in" component={SignIn} />
      </div>
    );
  }
}

export default App
