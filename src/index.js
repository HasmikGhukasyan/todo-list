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
    const id = this.state.items.length ? this.state.items[this.state.items.length - 1].id + 1 : 1
    const newItem = {
      text,
      id,
      important: false,
    }


    this.setState((prevState) => {
      return {
        items: [...prevState.items, newItem]
      }
    })
  }

  deleteHandler = (id) => {
    this.setState(({ items }) => {
      const idx = items.findIndex((el) => el.id === id)

      return {
        items: [
          ...items.slice(0, idx),
          ...items.slice(idx + 1)]
      }
    })
  }

  editHandler = (id, value) => {
    this.setState(({ items }) => {
      const idx = items.findIndex((el) => el.id === id)
      const arr = [...items]
      arr[idx].text = value
      return {
        items: arr
      }
    })
  }



  render() {

    return (
      <div className="App">
        <Header done={8} important={23} />
        <div className="main">
          <Search />
          <TodoList items={this.state.items} deleteHandler={this.deleteHandler} editHandler={this.editHandler} />
          <AddItem AddItemHandler={this.AddItemHandler} />
        </div>
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);