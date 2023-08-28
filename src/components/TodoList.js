import TodoListItem from "./ToDoListItem";
const TodoList = () => {
  const items = [
    {text:"Learn JS", important:true},
    {text:"Drink tea", important:false},
    {text:"Learn React", important:true},
    {text:"Learn Typescript", important:true}
  ]
      
      const data = items.map(el=> {
      return (<TodoListItem text= {el.text} important={el.important}/>) 
    })

    return (
      <ul>
        {data}
      </ul>
    );
  }

  export default TodoList;