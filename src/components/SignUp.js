import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createUser } from '../actions/users'

class SignUp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      confirmedPassword: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.dispatch(createUser({email: this.state.email, password: this.state.password}))
  }



  render() {
    const {email, password, confirmedPassword} = this.state
    const isEnabled = email.length > 0 && password.length > 0 && password === confirmedPassword
    return (
      <div>
        <h1>Sign up</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Your Email"
            name="email"
            onChange={this.handleChange}
            value={this.state.email} /><br/>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={this.handleChange}
            value={this.state.password}/><br/>
          <input
            type="password"
            name="confirmedPassword"
            placeholder="Confirm Password"
            onChange={this.handleChange}
            value={this.state.confirmedPassword}/><br/>
          <input disabled={!isEnabled} type="submit" value="Sign up" />
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

export default connect(null, mapDispatchToProps)(SignUp)
