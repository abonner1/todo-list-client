import React, { Component } from 'react'

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

  render() {
    return (
      <div>
        <h1>Sign up</h1>
        <form>
          <input type="text" placeholder="Your Email" name="email" onChange={this.handleChange} value={this.state.email} />
          <input type="password" name="password" placeholder="Password" onChange={this.handleChange} value={this.state.password}/>
          <input type="password" name="passwordConfirmation" placeholder="Confirm Password" onChange={this.handleChange} value={this.state.passwordConfirmation} />
          <input type="submit" value="Sign up" />
        </form>
      </div>
    )
  }
}

export default SignUp
