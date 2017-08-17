import fetch from 'isomorphic-fetch'

export const addUser = user => {
  return {
    type: 'ADD_USER',
    user
  }
}

export const authenticateUser = user => {
  return {
    type: 'AUTHENTICATE_USER',
    user
  }
}

export const receiveToken = json => {
  return {
    type: 'RECIEVE_TOKEN',
    token: json.jwt
  }
}

export const createUser(user) {
  return dispatch => {
    dispatch(addUser(user))
    return fetch('http://localhost:3001/api/users', {
      method: 'Post',
      body: {
        user
      },
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
  }
}

export const fetchToken(user) {
  return dispatch => {
    dispatch(authenticateUser(user))
    return fetch('http://localhost:3001/api/user_token', {
      method: 'POST',
      body: {
        auth: user
      },
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(json => dispatch(receiveToken(json)))
  }
}
