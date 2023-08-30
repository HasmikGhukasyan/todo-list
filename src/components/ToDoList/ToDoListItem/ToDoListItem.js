import "./todoListItem.css"
import {FaTrash, FaCheck, FaExclamation} from "react-icons/fa6"

const TodoListItem = ({ text, important }) => {

    const style = {
        color: important ? "#EF6262" : "blue"
    }

    return (<div className="listItem">
        <div className="taskContainer">
            <li className="task" style={style}> {text}</li>
        </div>
        <div className="buttonContainer">
            <button className="done-btn"><FaCheck/  ></button>
            <button className="important-btn"><FaExclamation/></button>
            <button className="delete-btn"><FaTrash/></button>
        </div>
    </div>

    )
}

export default TodoListItem;