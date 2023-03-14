import React from 'react'

export default class Form extends React.Component {
  render() {
    return (
      <form id="todoForm" onSubmit={this.props.onTodoListSubmit}>
          <input value={this.props.todoListAdd} onChange={this.props.onTodoListAddChange} type='text' placeholder='Type new todo'></input>
          <input type="submit"></input>
          <button onClick={this.props.toggleCompletedDisplay}>Toggle Shown Completed</button>
        </form>
    )
  }
}
