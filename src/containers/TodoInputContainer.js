import React, { Component } from 'react'
import TodoInput from '../components/TodoInput'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as inputActions from '../module/input'
import * as todosActions from '../module/todos'

class TodoInputContainer extends Component {
  id = 1
  getId = () => {
    return ++this.id
  }

  handlechange = e => {
    const { value } = e.target
    const { InputActions } = this.props
    InputActions.setInput(value)
  }

  handleInsert = () => {
    const { InputActions, TodosActions, value } = this.props
    const todo = {
      id: this.getId(),
      text: value,
      done: false
    }

    TodosActions.insert(todo)
    InputActions.setInput('')
  }

  render() {
    const { value } = this.props
    const { handlechange, handleInsert } = this

    return (
      <TodoInput
        onChange={handlechange}
        onInsert={handleInsert}
        value={value}
      />
    )
  }
}

export default connect(
  state => ({
    value: state.input.get('value')
  }),
  dispatch => ({
    InputActions: bindActionCreators(inputActions, dispatch),
    TodosActions: bindActionCreators(todosActions, dispatch)
  })
)(TodoInputContainer)