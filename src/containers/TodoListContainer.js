import React, { Component } from 'react'
import TodoList from '../components/TodoList'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as todosActions from '../module/todos'

class TodoListContainer extends Component {
  handleToggle = id => {
    const { TodosActions } = this.props
    TodosActions.toggle(id)
  }

  handleRemove = id => {
    const { TodosActions } = this.props
    TodosActions.remove(id)
  }

  render() {
    const { todos } = this.props
    const { handleToggle, handleRemove } = this

    return (
      <TodoList
        todos={todos}
        onToggle={handleToggle}
        onRemove={handleRemove}
      />
    )
  }
}

export default connect(
  state => ({
    todos: state.todos
  }),
  dispatch => ({
    todosActions: bindActionCreators(todosActions, dispatch)
  })
)(TodoListContainer)