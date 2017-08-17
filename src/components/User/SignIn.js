import React, { Component } from 'react'

class SignIn extends Component {
  render() {
    return (
      <div>
        <h1>Sign in</h1>
        <form>
          <input type="text" placeholder="Your Email" />
          <input type="password" placeholder="Password" />
          <input type="submit" value="Sign in" />
        </form>
      </div>
    )
  }
}

export default SignIn
