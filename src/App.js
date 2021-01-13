import React from "react";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const data = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false,
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false,
  },
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      data: data,
    };
  }

  addItem = (itemName) => {
    this.setState({
      data: [
        ...this.state.data,
        { task: itemName, id: Date.now(), completed: false },
      ],
    });
  };

  toggleItem = (itemId) => {
    this.state({
      data: this.state.data.map((item) => {
        if (item.id === itemId) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      }),
    });
  };

  clearPurchased = () => {
    this.setState({
      data: this.state.data.filter((item) => {
        return !item.completed;
      }),
    });
  };

  render() {
    return (
      <div>
        <div>
          <h2>Welcome to your Todo App!</h2>
          <TodoList data={this.state.data} toggleItem={this.toggleItem} />
        </div>
        <TodoForm addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
