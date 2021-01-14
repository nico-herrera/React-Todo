import React from "react";
import "./Todo.css";

class Todo extends React.Component {
  clickHandler = (e) => {
    e.preventDefault();
    this.props.toggleItem(this.props.item.id);
  };
  render() {
    return (
      <div
        onClick={this.clickHandler}
        className={`item ${this.props.item.completed ? "completed" : ""}`}
      >
        <p>{this.props.item.task}</p>
      </div>
    );
  }
}

export default Todo;
