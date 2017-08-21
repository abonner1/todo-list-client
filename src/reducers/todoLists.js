import cuid from 'cuid'

const todoLists = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TODOLIST':
      let todoList = {name: action.todoList, id: cuid(), favorited: false}
      return [...state, todoList]
    case 'EDIT_TODOLIST':
      return state.map(todoList =>
        (todoList.id === action.todoList.id)
        ? action.todoList
        : todoList
      )
    case 'TOGGLE_FAVORITE':
      return state.map(todoList =>
        (todoList.id === action.id)
        ? {...todoList, favorited: !todoList.favorited}
        : todoList
      )
    case 'DELETE_TODOLIST':
      return state.filter(todoList => todoList.id !== action.id)
    default:
      return state
  }
}

export default todoLists
