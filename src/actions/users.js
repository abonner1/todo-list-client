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
