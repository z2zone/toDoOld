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
          />
        ))}
      </div>
    );
  }
}

export default App;