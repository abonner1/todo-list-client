import { connect } from 'react-redux'
import TodoList from '../components/TodoList'

const mapStateToProps = state => {
  return {
    todoLists: state.todoLists,
    todos: state.todos
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTodoSubmit: action => {
      dispatch(action)
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList;
