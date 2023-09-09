import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Search from "./components/Search";
import TodoList from "./components/ToDoList";
import AddItem from "./components/AddItem";
import "./index.css";

class App extends Component {
  state = {
    items: [
      { text: "Learn JS", important: true, done: false, id: 1 },
      { text: "Drink tea", important: false, done: false, id: 2 },
      { text: "Learn React", important: true, done: false, id: 3 },
      { text: "Learn Typescript", important: true, done: false, id: 4 },
    ],
  };

  searchHandler = (text) => {
    this.setState(({ items }) => {
      return {
        items: items.filter(el => el.text.toLowerCase().includes(text.toLowerCase()))
      }
    })
  }

  doneHandler = (id) => {
    this.setState(({ items }) => {
      const arr = [...items];
      const idx = arr.findIndex((el) => el.id === id);
      arr[idx].done = !arr[idx].done;
      return {
        items: arr,
      };
    });
  };

  importantHandler = (id) => {
    this.setState(({ items }) => {
      const arr = [...items];
      const idx = arr.findIndex((el) => el.id === id);
      arr[idx].important = !arr[idx].important;
      return {
        items: arr,
      };
    });
  };

  AddItemHandler = (text) => {
    const id = this.state.items.length
      ? this.state.items[this.state.items.length - 1].id + 1
      : 1;
    const newItem = {
      text,
      id,
      important: false,
    };

    this.setState((prevState) => {
      return {
        items: [...prevState.items, newItem],
      };
    });
  };

  deleteHandler = (id) => {
    this.setState(({ items }) => {
      const idx = items.findIndex((el) => el.id === id);

      return {
        items: [...items.slice(0, idx), ...items.slice(idx + 1)],
      };
    });
  };

  editHandler = (id, value) => {
    this.setState({
      items: this.state.items.map((el) => {
        if (el.id === id) {
          return {
            ...el,
            text: value,
          };
        }
        return el;
      }),
    });
  };

  render() {
    return (
      <div className="App">
        <Header done={8} important={23} />
        <div className="main">
          <Search searchHandler={this.searchHandler} />
          <TodoList
            items={this.state.items}
            doneHandler={this.doneHandler}
            importantHandler={this.importantHandler}
            deleteHandler={this.deleteHandler}
            editHandler={this.editHandler}
          />
          <AddItem AddItemHandler={this.AddItemHandler} />
        </div>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
