import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createUser } from '../actions/users'

class SignUp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      passwordConfirmation: ''
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
    return (
      <div>
        <h1>Sign up</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Your Email" name="email" onChange={this.handleChange} value={this.state.email} />
          <input type="password" name="password" placeholder="Password" onChange={this.handleChange} value={this.state.password}/>
          <input type="password" name="passwordConfirmation" placeholder="Confirm Password" onChange={this.handleChange} value={this.state.passwordConfirmation} />
          <input type="submit" value="Sign up" />
        </form>
      </div>
    )
  }
}

function mapDispatchToState(dispatch) {
  return {
    dispatch: dispatch
  }
}

export default connect(null, mapDispatchToState)(SignUp)
