import React, { Component } from 'react'

class SignUp extends Component {
  render() {
    return (
      <div>
        <h1>Sign up</h1>
        <form>
          <input type="text" placeholder="Your Email" />
          <input type="password" name="password" placeholder="Password"/>
          <input type="password" name="passwordConfirmation" placeholder="Confirm Password" />
          <input type="submit" value="Sign up" />
        </form>
      </div>
    )
  }
}

export default SignUp
