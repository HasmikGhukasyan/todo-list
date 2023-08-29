import Button from "../../Button/Button";
import "./todoListItem.css"
const TodoListItem = ({ text, important }) => {

    const style = {
        color: important ? "#EF6262" : "blue"
    }

    return (<div className="listItem">
        <div className="taskContainer">
            <li className="task" style={style}> {text}</li>
        </div>
        <div className="buttonContainer">
            <Button text="Edit" color={"white"} className="todo-btn  editBtn" />
            <Button text="Priority" color={"white"} className="todo-btn priorBtn" />
            <Button text="X" color={"white"} className="todo-btn deleteBtn" />
        </div>
    </div>

    )
}

export default TodoListItem;