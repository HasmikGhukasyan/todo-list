import { Component } from "react";
import TodoListItem from "./ToDoListItem";
import "./todoList.css"


class TodoList extends Component {
  state = {
    items: this.props.items

  }

  deleteHandler = (whichItem) => {
    this.setState({ items: this.state.items.filter(el => el.id !== whichItem) })
  }



  render() {
    const { items } = this.state
    const data = items.map(el => {
      return (<TodoListItem text={el.text} important={el.important} key={el.id} onClick={() => this.deleteHandler(el.id)} />)
    })
    return (
      <ul className="itemContainer">
        {data}
      </ul>
    );
  }
}



export default TodoList;