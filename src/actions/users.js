import fetch from 'isomorphic-fetch'

export const addUser = () => ({ type: 'ADD_USER' })

export const authenticateUser = () => ({ type: 'AUTHENTICATE_USER' })

export const receiveToken = json => ({ type: 'RECIEVE_TOKEN', token: json.jwt })

export const logOut = () => ({ type: 'LOGOUT' })

export const createUser(user) {
  return dispatch => {
    dispatch(addUser())
    return fetch('http://localhost:3001/api/users', {
      method: 'Post',
      body: { user },
      headers: { "Content-Type": "application/json" }
    })
      .then(response => {
        if (response.state === 200) {
          return response.json()
        }
      })
  }
}

export const fetchToken(user) {
  return dispatch => {
    dispatch(authenticateUser())
    return fetch('http://localhost:3001/api/user_token', {
      method: 'POST',
      body: { auth: user },
      headers: { "Content-Type": "application/json" }
    })
      .then(currentUser => {
        const { jwt } = token
        localStorage.setItem('token', JSON.stringify(token))
      })
  }
}
