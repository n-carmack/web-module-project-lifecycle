import React from 'react'
import axios from 'axios'

import TodoList from './TodoList'
import Form from './Form'

const URL = 'http://localhost:9000/api/todos'

export default class App extends React.Component {
  state = {
    todos: [],
    todoListAdd: '',
    completedDisplay: true,
  }
  onTodoListAddChange = e => {
    const {value} = e.target
    this.setState({...this.state, todoListAdd: value})
  }
  postNewTodo = () => {
    axios.post(URL, {name: this.state.todoListAdd})
      .then( res => {
        this.fetchTodos()
        this.setState({...this.state, todoListAdd: ''})
      })
      .catch( err => console.error(err))
  }
  onTodoListSubmit = e => {
    e.preventDefault()
    this.postNewTodo()
  }
  fetchTodos = () => {
    axios.get(URL)
    .then(res =>{
      this.setState({...this.state, todos: res.data.data})
    })
    .catch(err=> {
      err.response.data.message
    })
  }
  toggleCompleted = id => e => {
    axios.patch(`${URL}/${id}`)
    .then( res=> {
      this.fetchTodos()
    })
    .catch(console.error(err))
  }
  toggleCompletedDisplay = () => {
    this.setState({...this.state, completedDisplay: !this.state.completedDisplay})
  }
  componentDidMount() {
    this.fetchTodos()
  }
  render() {
    return (
      <div id="todoList">
        <h2>Todo List</h2>
        <TodoList
          todos={this.state.todos}
          completedDisplay={this.state.completedDisplay}
          toggleCompleted={this.toggleCompleted}
        />
        <Form 
          onTodoListSubmit={this.onTodoListSubmit}
          todoListAdd={this.state.todoListAdd}
          onTodoListAddChange={this.onTodoListAddChange}
          toggleCompletedDisplay={this.toggleCompletedDisplay}
        />
      </div>
      
    )
  }
}
