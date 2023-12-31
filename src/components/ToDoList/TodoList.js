import { Component } from "react";
import TodoListItem from "./ToDoListItem";
import "./todoList.css"


class TodoList extends Component {


  render() {
    const { items, deleteHandler, editHandler, importantHandler, doneHandler } = this.props
    const data = items.map(el => {
      return (<TodoListItem
        text={el.text}
        important={el.important}
        done={el.done}
        key={el.id}
        onDone={() => doneHandler(el.id)}
        onImportant={() => importantHandler(el.id)}
        onClick={() => deleteHandler(el.id)}
        onEdit={editHandler}
        id={el.id} />)
    })
    return (
      <ul className="itemContainer">
        {data}
      </ul>
    );
  }
}



export default TodoList;