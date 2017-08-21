const user = (state = {
  token: null,
  isAuthenticating: false,
  isAuthenticated: false,
  isAddingUser: false
}, action) => {
  switch(action.type) {
    case 'ADD_USER':
      return {...state, isAddingUser: true}
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
