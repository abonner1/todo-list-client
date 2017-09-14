import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import Welcome from './Welcome'

class Auth extends Component {
  render() {
    if (!this.props.isAuthenticated) {
      return (
        <div>
          <Welcome/>
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

export default connect(mapStateToProps)(Auth)
