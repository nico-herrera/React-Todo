import React from "react";

class Todo extends React.Component {
  clickHandler = (e) => {
    e.preventDefault();
    this.props.toggleItem(this.props.item.id);
  };
  render() {
    return (
      <div
        onClick={this.clickHandler}
        className={`item${this.props.item.completed ? " completed" : ""}`}
      >
        <p>{this.props.item.name}</p>
      </div>
    );
  }
}

export default Todo;
