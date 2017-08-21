import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import ConnectedTodoLists from './ConnectedTodoLists'
import VisibleTodoList from './VisibleTodoList'
import EnsureLoggedInContainer from './EnsureLoggedInContainer'

class App extends Component {
  render() {
    return (
      <div>
        {this.props.isAuthenticated ? <Route path="/todo_lists" component={ConnectedTodoLists} /> : <Redirect to="/" /> }
        {this.props.isAuthenticated ? < Route path="/todo_lists/:todo_list_id" component={VisibleTodoList} /> : <Redirect to="/" /> }
        <Route component={EnsureLoggedInContainer} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.user.isAuthenticated
  }
}

export default connect(mapStateToProps)(App)
