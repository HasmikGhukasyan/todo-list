import TodoListItem from "./ToDoListItem/ToDoListItem";
import "./todoList.css"
const TodoList = ({items}) => {
      
      const data = items.map(el=> {
      return (<TodoListItem text= {el.text} important={el.important} key={el.id} />) 
    })

    return (
      <ul className="itemContainer">
        {data}
      </ul>
    );
  }

  export default TodoList;