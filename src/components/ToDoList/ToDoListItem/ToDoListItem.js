import { Component } from "react"
import "./todoListItem.css"
import { FaTrash, FaCheck, FaExclamation } from "react-icons/fa6"




class TodoListItem extends Component {
    state = {
        isDone: false,
        isImportant: this.props.important
    }
    onImportant = () => {
        this.setState({
            isImportant: !this.state.isImportant
        })
    }
    onDone = () => {
        this.setState({
            isDone: !this.state.isDone
        })

    }

    render() {
        const { text } = this.props
        const { isDone, isImportant } = this.state

        const textStyle = {
            color: isDone ? "#aaa" : isImportant ? "#EF6262" : "lightblue",
            fontWeight: isDone ? "normal" : isImportant ? "bold" : "unset",
            textDecoration: isDone ? "line-through" : "none",


        }

        return (<div className="listItem">
            <div className="taskContainer" onClick={this.onDone}>
                <li className="task" style={textStyle}> {text}</li>
            </div>
            <div className="buttonContainer">
                <button className="done-btn" onClick={this.onDone}><FaCheck /></button>
                <button className="important-btn" onClick={this.onImportant}><FaExclamation /></button>
                <button className="delete-btn"><FaTrash /></button>
            </div>
        </div>

        )
    }
}


export default TodoListItem;