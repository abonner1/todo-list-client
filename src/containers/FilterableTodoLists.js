import { connect } from 'react-redux'
import TodoLists from '../components/TodoLists'

const mapStateToProps = state => {
  return {todoLists: state.todoLists}
}

const mapDispatchToProps = dispatch => {
  return {
    onTodoListSubmit: action => {
      dispatch(action)
    }
  }
}

const FilterableTodoLists = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoLists)

export default FilterableTodoLists;
