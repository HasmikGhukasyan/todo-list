import { Component } from "react";
import TodoListItem from "./ToDoListItem";
import "./todoList.css"


class TodoList extends Component {

  render() {
    const { items } = this.props
    const data = items.map(el => {
      return (<TodoListItem text={el.text} important={el.important} key={el.id} />)
    })
    return (
      <ul className="itemContainer">
        {data}
      </ul>
    );
  }
}



export default TodoList;