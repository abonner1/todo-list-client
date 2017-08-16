let i = 1
const todos = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TODO':
      const newTodo = {...action.todo, id: i++}
      return [...state, newTodo]
    default:
      return state
  }
}

export default todos
