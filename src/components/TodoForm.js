import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      itemName: "",
    };
  }

  onChange = (e) => {
    this.setState({
      itemName: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.itemName);
  };

  clearSubmit = (e) => {
    e.preventDefault();
    this.props.clearCompleted(this.state.item);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="...todo"
            onChange={this.onChange}
            name="item"
            value={this.state.itemName}
          />
          <button type="submit">Add</button>
        </form>
        <form onSubmit={this.clearSubmit}>
          <button type="submit">Clear Completed</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
