const user = (state = {
  token: null,
  isAuthenticating: false,
  isAuthenticated: false,
  isAddingUser: false,
  registrationFailed: false
}, action) => {
  switch(action.type) {
    case 'ADD_USER':
      return {...state, isAddingUser: true}
    case 'REGISTRATION_FAILED':
      return {...state, registrationFailed: true, message: action.message }
    case 'AUTHENTICATE_USER':
      return {...state, isAuthenticating: true, isAddingUser: false}
    case 'RECIEVE_TOKEN':
      return {...state, isAuthenticating: false, isAuthenticated: true, token: action.token}
    case 'LOGOUT':
      return {token: null, isAuthenticated: false}
    default:
      return state
  }
}

export default user
