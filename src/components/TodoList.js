import React from "react";

import Todo from "./Todo";

class TodoList extends React.Component {
  constructor() {
    super();
    console.log(this.props.data);
  }
  render() {
    return (
      <div>
        {this.props.data.map((item) => (
          <Todo toggleItem={this.props.toggleItem} key={item.id} item={item} />
        ))}
        <button>Clear Completed</button>
      </div>
    );
  }
}

export default TodoList;
