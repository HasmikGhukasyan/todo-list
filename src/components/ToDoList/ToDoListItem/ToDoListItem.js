import Button from "../../Button/Button";
import "./todoListItem.css"
const TodoListItem = ({ text, important }) => {

    const style = {
        color: important ? "red" : "black"
    }

    return (<div className="listItem">
        <div className="taskContainer">
            <li className="taskText" style={style}> {text}</li>
        </div>
        <div className="buttonContainer">
            <Button text="Edit" color={"red"} className="btn1" />
            <Button text="Priority" color={"blue"} />
            <Button text="X" color={"green"} />
        </div>
    </div>

    )
}

export default TodoListItem;