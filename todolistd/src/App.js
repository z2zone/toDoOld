import React from "react";
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoLists";

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      todos: [],
      filterAction: "all"
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

  showTodos = (string) => {
    this.setState({
      filterAction: string
    });
  }

  render() {
    let todos = [];
    if(this.state.filterAction === "all"){
      todos = this.state.todos;
    } else if(this.state.filterAction === "active"){
      todos = this.state.todos.filter(todo=>!todo.isCompleted);
    }else if(this.state.filterAction === "completed"){
      todos = this.state.todos.filter(todo=>todo.isCompleted);
    }
    return (
      <div className="App">
        <TodoForm addToDos={this.addToDos} />
        {todos.map(todo => (
          <TodoList 
            todo={todo}
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