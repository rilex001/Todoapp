import React, { Component } from 'react';
import Todos from './component/Todos'
import AddTodo from './component/AddTodo'


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos: [
        
      ]
    }
  }
  
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    })
    this.setState({
      todos
    })
  }
  addTodo = (todo) => {
    todo.id = Date.now()
    const newTodo = todo.content.length
    if(newTodo > 0){
      let todos = [...this.state.todos, todo]
      this.setState({
        todos
      })
    }
    else {
      alert('Empty input')
    }
    
  }
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} updateTodo={this.updateTodo} />
        <AddTodo addTodo={this.addTodo} />

      </div>
    );
  }
}

export default App;