import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Search from "./components/Search"
import TodoList from "./components/TodoList"
import Button from "./components/Button";
import Input from "./components/Input";

const App = () => {

  return (
    <div>
      <Header />
      <Search />
      <TodoList />
      <div><Input /><Button text="add" color="blue" /></div>
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);