import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Search from "./components/Search"
import TodoList from "./components/ToDoList"
import AddItem from "./components/AddItem";
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
      <Header done={8} important={23}/>
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