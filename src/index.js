import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header/Header"
import Search from "./components/Search/Search"
import TodoList from "./components/ToDoList/TodoList"
import AddItem from "./components/AddItem/AddItem";
import "./index.css"

const App = () => {
  const items = [
    {text:"Learn JS", important:true, id: 1},
    {text:"Drink tea", important:false, id: 2},
    {text:"Learn React", important:true, id: 3},
    {text:"Learn Typescript", important:true, id: 4}
  ]
  
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Search />
        <TodoList items={items} />
        <AddItem />
      </div>
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);