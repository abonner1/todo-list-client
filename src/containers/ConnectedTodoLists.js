import { connect } from 'react-redux'
import TodoLists from '../components/TodoLists'

const mapStateToProps = state => {
  return {
    todoLists: state.todoLists
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  }
}

const ConnectedTodoLists = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoLists)

export default ConnectedTodoLists;
