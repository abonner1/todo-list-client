import fetch from 'isomorphic-fetch'

const addUser = () => ({ type: 'ADD_USER' })

const registrationFailed = (message) => ({ type: 'REGISTRATION_FAILED', message })

const authenticateUser = () => ({ type: 'AUTHENTICATE_USER' })

const receiveToken = token => ({ type: 'RECIEVE_TOKEN', token: token })

export const logOut = () => ({ type: 'LOGOUT' })

export const createUser = (user) => {
  return dispatch => {
    dispatch(addUser())
    return fetch('http://localhost:3001/api/users', {
      method: 'POST',
      body: JSON.stringify({user}),
      headers: { "Content-Type": "application/json" }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText)
        }
        return response.json()
      })
      .then(json => dispatch(fetchToken(json)))
      .catch((error) => {
        console.log(error)
        return dispatch(registrationFailed('Email is already taken.'))
      })
  }
}

export const fetchToken = (user) => {
  return dispatch => {
    dispatch(authenticateUser())
    return fetch('http://localhost:3001/api/user_token', {
      method: 'POST',
      body: JSON.stringify({ auth: { email: user.email, password: user.password } }),
      headers: { "Content-Type": "application/json" }
    })
      .then(response => response.json())
      .then(json => {
        const { jwt } = json
        localStorage.setItem('token', jwt)
        dispatch(receiveToken(jwt))
      }
    )
  }
}
