import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {
  render() {
    return (
      <>
      {
        this.props.todos.reduce((acc,todoItem) => {
         if(this.props.completedDisplay || !todoItem.completed) return acc.concat(
          <Todo
            key={todoItem.id}
            toggleCompleted={this.props.toggleCompleted}
            todo={todoItem}
        />
          )
         return acc
       }, [])

     }
     </>
    )
  }
}
