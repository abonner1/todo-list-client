import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import ConnectedTodoLists from './ConnectedTodoLists'
import VisibleTodoList from './VisibleTodoList'
import EnsureLoggedInContainer from './EnsureLoggedInContainer'

import logOut from '../actions/users'

class App extends Component {
  handleClick = () => {

  }

  render() {
    return (
      <div>
        {this.props.isAuthenticated ? <Route path="/todo_lists" component={ConnectedTodoLists} /> : <Redirect to="/" /> }
        {this.props.isAuthenticated ? <Route path="/todo_lists/:todo_list_id" component={VisibleTodoList} /> : <Redirect to="/" /> }
        {this.props.isAuthenticated ? <button type="button" onClick={this.handleClick}>Log out</button> : null }
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

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  }
}

export default connect(mapStateToProp, mapDispatchToProps)(App)
