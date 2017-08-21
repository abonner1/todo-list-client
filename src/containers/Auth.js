import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Redirect, Link } from 'react-router-dom'
import SignIn from '../components/SignIn'
import SignUp from '../components/SignUp'

class EnsureLoggedInContainer extends Component {
  render() {
    if (!this.props.isAuthenticated) {
      return (
        <div>
          <Link to="/sign_in">Sign In</Link>
          <Link to="/sign_up">Sign Up</Link>
          <Route path="/sign_up" component={SignUp} />
          <Route path="/sign_in" component={SignIn} />
        </div>
      )
    } else {
      return (
        <Redirect to="/todo_lists" />
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.user.isAuthenticated
  }
}

export default connect(mapStateToProps)(EnsureLoggedInContainer)
