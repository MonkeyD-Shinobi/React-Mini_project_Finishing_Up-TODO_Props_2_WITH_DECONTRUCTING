import React from "react";
import "./styles.css";
import TodoItem from "./TodoItem.js";
import todos from "./todoData";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoList: todos
    };
    // this.handleChange = this.handleChange.bind(this);
  }
  handleChange = (todo) => {
    console.log("Heyy please uncheck ", todo);
    const { todoList } = this.state;
    const index = todos.indexOf(todo);
    todoList[index].completed = !todos[index].completed;
    this.setState({
      todos
    });
  };

  render() {
    const { todoList } = this.state;
    return (
      <div className="todo-list">
        <h1>My Daily Goals</h1>
        {todoList.map((todo) => (
          <div key={todo.id}>
            <TodoItem todo={todo} handleClick={this.handleChange} />
          </div>
        ))}
        {/* <TodoItem /> */}
      </div>
    );
  }
}

export default App;
