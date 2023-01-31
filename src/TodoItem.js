import React from "react";

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // id: 1,
      // text: "My Task",
      // completed: true
    };
    // this.handleChange = this.handleChange.bind(this);
  }

  render() {
    const { text, completed, handleClick } = this.props.todo;
    return (
      <div className="todo-item">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => handleClick(this.props.todo)}
        />
        <label> {text} </label>
      </div>
    );
  }
}

export default TodoItem;
