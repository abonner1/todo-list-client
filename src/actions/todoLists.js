export const addTodoList = (todoList) => {
  return {
    type: 'ADD_TODOLIST',
    todoList
  }
}

export const editTodoList = todoList => {
  return {
    type: 'EDIT_TODOLIST',
    todoList
  }
}

export const favoriteTodoList = id => {
  return {
    type: 'FAVORITE_TODOLIST',
    id
  }
}

export const deleteTodoList = id => {
  return {
    type: 'DELETE_TODOLIST',
    id
  }
}
