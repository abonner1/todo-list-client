import fetch from 'isomorphic-fetch'

export const addUser = () => {
  return {
    type: 'ADD_USER'
  }
}

export const authenticateUser = () => {
  return {
    type: 'AUTHENTICATE_USER'
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
    dispatch(addUser())
    return fetch('http://localhost:3001/api/users', {
      method: 'Post',
      body: {
        user
      },
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        if (response.state === 200) {

        }
        response.json()
      })
  }
}

export const fetchToken(user) {
  return dispatch => {
    dispatch(authenticateUser())
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
      .then(json => json.jwt ? dispatch(receiveToken(json)) : dispatch(failedAuthentication()))
  }
}
