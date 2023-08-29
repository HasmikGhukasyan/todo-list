import TodoListItem from "./ToDoListItem/ToDoListItem";
import "./todoList.css"
const TodoList = () => {
  const items = [
    {text:"Learn JS", important:true, id: 1},
    {text:"Drink tea", important:false, id: 2},
    {text:"Learn React", important:true, id: 3},
    {text:"Learn Typescript", important:true, id: 4}
  ]
      
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