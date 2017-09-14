import React from 'react'
import {Route, Link} from 'react-router-dom'

import SignIn from '../components/SignIn'
import SignUp from '../components/SignUp'

const Welcome = () => {
  return (
    <div>
      <h1>TodoList</h1>
      <Link to="/sign_in">Sign In</Link>
      <Link to="/sign_up">Sign Up</Link>
      <Route path="/sign_up" component={SignUp} />
      <Route path="/sign_in" component={SignIn} />
    </div>
  )
}

export default Welcome
