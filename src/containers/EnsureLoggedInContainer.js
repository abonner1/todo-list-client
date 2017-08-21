import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

import SignIn from '../components/User/SignIn'
import SignUp from '../components/User/SignUp'

class EnsureLoggedInContainer extends Component {
  render() {
    if (!this.props.isAuthenticated) {
      return (
        <div>
          <Route path="/sign_up" component={SignUp} />
          <Route path="/sign_in" component={SignIn} />
        </div>
      )
    } else {
      return (
        <div>
          <Redirect to="/todo_lists" />
        </div>
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
