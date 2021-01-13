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
      </div>
    );
  }
}

export default TodoForm;
