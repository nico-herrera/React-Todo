import React from "react";

import Todo from "./Todo";

class TodoList extends React.Component {
  render() {
    console.log(this.props.data);
    return (
      <div>
        {this.props.data.map((item) => (
          <Todo toggleItem={this.props.toggleItem} key={item.id} item={item} />
        ))}
      </div>
    );
  }
}

export default TodoList;
