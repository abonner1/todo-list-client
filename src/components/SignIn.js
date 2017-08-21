import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchToken } from '../actions/users'

class SignIn extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.dispatch(fetchToken({email: this.state.email, password: this.state.password}))
  }

  render() {
    return (
      <div>
        <h1>Sign in</h1>
        <form onSubmit={this.handleSubmit} >
          <input type="text" name="email" placeholder="Your Email" onChange={this.handleChange} value={this.state.email} />
          <input type="password" name="password" placeholder="Password" onChange={this.handleChange} value={this.state.password} />
          <input type="submit" value="Sign in" />
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  }
}

export default connect(null, mapDispatchToProps)(SignIn)
