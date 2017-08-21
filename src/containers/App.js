import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import AppRoutes from './AppRoutes'
import EnsureLoggedInContainer from './EnsureLoggedInContainer'
import { logOut } from '../actions/users'

class App extends Component {
  handleClick = () => {
    this.props.dispatch(logOut())
  }

  render() {
    const authRoutes = <Route component={EnsureLoggedInContainer} />

    return (
      <div>
        {this.props.isAuthenticated ? <AppRoutes /> : <Redirect to="/" /> }
        {authRoutes}
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

export default connect(mapStateToProps, mapDispatchToProps)(App)
