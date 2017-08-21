import fetch from 'isomorphic-fetch'

export const addUser = () => ({ type: 'ADD_USER' })

export const authenticateUser = () => ({ type: 'AUTHENTICATE_USER' })

export const receiveToken = json => ({ type: 'RECIEVE_TOKEN', token: json.jwt })

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
        if (response.state === 200) {
          return response.json()
        }
      })
      .then(json => {
        dispatch(fetchToken(user))
      })
  }
}

export const fetchToken = (user) => {
  return dispatch => {
    dispatch(authenticateUser())
    return fetch('http://localhost:3001/api/user_token', {
      method: 'POST',
      body: JSON.stringify({ auth: user }),
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
