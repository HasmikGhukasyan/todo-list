import React, { Component } from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Search from "./components/Search"
import TodoList from "./components/ToDoList"
import AddItem from "./components/AddItem";
import "./index.css"

class App extends Component {
  state = {
    items: [
      { text: "Learn JS", important: true, id: 1 },
      { text: "Drink tea", important: false, id: 2 },
      { text: "Learn React", important: true, id: 3 },
      { text: "Learn Typescript", important: true, id: 4 }
    ]
  }

  AddItemHandler = (text) => {
    const newItem = {
      text,
      important: false,
      id: this.state.items[this.state.items.length - 1].id + 1
    }

    this.setState((prevState) => {
      return {
        items: [...prevState.items, newItem]
      }
    })
  }

  deleteHandler = (whichItem) => {
    this.setState({ items: this.state.items.filter(el => el.id !== whichItem) })
  }

  render() {

    return (
      <div className="App">
        <Header done={8} important={23} />
        <div className="main">
          <Search />
          <TodoList items={this.state.items} deleteHandler={this.deleteHandler} />
          <AddItem AddItemHandler={this.AddItemHandler} />
        </div>
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);