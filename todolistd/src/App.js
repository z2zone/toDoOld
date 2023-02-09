import React from "react";
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoLists";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      todos: []
    }
  }
  addToDos = (todo) => {
    this.setState({
      todos: [...this.state.todos, todo]
    });
  }

  deleteToDos = (id) => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id!==id)
    });
  }

  deleteCompletedToDos = () => {
    this.setState({
        todos: this.state.todos.filter(todo => !todo.isCompleted)
    });
  }
  
  toggleComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo=>{
        if(todo.id === id) {
          return {
            ...todo,
            isCompleted: !todo.isCompleted
          }
        }else{
          return todo;
        }
      })
    });
  }
  render() {
    return (
      <div className="App">
        <TodoForm addToDos={this.addToDos} />
        {this.state.todos.map(todo => (
          <TodoList 
            todos={todo}
            key={todo.id}
            toggleComplete={()=>{this.toggleComplete(todo.id)}}
            handleDelete={()=>{this.deleteToDos(todo.id)}} 
          />
        ))}
        <button onClick={()=>{this.showTodos("all")}}>All</button>
        <button onClick={()=>{this.showTodos("active")}}>Active</button>
        <button onClick={()=>{this.showTodos("completed")}}>Completed</button>
        <button onClick={this.deleteCompletedToDos}>Delete Completed</button>
      </div>
    );
  }
}

export default App;