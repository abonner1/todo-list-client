const AddTodoList = todoList => {
  type: 'CREATE_TODOLIST',
  todoList
}

const EditTodoList = todoList => {
  type: 'EDIT_TODOLIST',
  todoList
}

const FavoriteTodoList = id => {
  type: 'FAVORITE_TODOLIST',
  todoList
}

const DeleteTodoList = id => {
  type: 'DELETE_TODOLIST',
  todoList
}
