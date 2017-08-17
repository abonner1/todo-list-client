let i = 1
const todos = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TODO':
      const newTodo = {...action.todo, id: i++}
      return [...state, newTodo]
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.id)
    default:
      return state
  }
}

export default todos
