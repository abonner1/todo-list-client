const AddTodoList = todoList => {
  type: 'CREATE_TODOLIST',
  todoList
}

const EditTodoList = todoList => {
  type: 'EDIT_TODOLIST',
  todoList
}

const FavoriteTodoList = todoList => {
  type: 'FAVORITE_TODOLIST',
  todoList
}

const DeleteTodoList = todoList => {
  type: 'DELETE_TODOLIST',
  todoList
}
