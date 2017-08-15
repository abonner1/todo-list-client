import { connect } from 'react-redux'
import TodoLists from '../components/TodoLists';

const mapStateToProps = state => {
  return {todoLists: state.todoLists}
}

const FilterableTodoLists = connect(
  mapStateToProps
)(TodoLists)

export default FilterableTodoLists;
