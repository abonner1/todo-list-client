let i = 1
const todos = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TODO':
      const newTodo = {...action.todo, id: i++, completed: false}
      return [...state, newTodo]
    case 'TOGGLE_TODO':
      return state.map(todo => (todo.id === action.id) ? {...todo, completed: !todo.completed} : todo)
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.id)
    default:
      return state
  }
}

export default todos
