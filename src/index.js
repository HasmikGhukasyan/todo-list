import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header/Header"
import Search from "./components/Search/Search"
import TodoList from "./components/ToDoList/TodoList"
import AddItem from "./components/AddItem/AddItem";
import "./index.css"

const App = () => {

  return (
    <div className="App">
      <Header />
      <div className="main">
        <Search />
        <TodoList />
        <AddItem />
      </div>
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);