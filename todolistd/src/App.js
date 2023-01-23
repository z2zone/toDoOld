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
  render() {
    return (
      <div className="App">
        <TodoForm addToDos={this.addToDos} />
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default App;