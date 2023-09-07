import { Component } from "react"
import "./todoListItem.css"
import { FaTrash, FaCheck, FaExclamation, FaPen } from "react-icons/fa6"




class TodoListItem extends Component {
    state = {
        isEditMode: false,
        value: this.props.text
    }

    onInputChange = (event) => {
        this.setState({
            value: event.target.value
        })
    }

    onItemEdit = () => {
        if (this.state.isEditMode) {
            this.props.onEdit(this.props.id, this.state.value)
            this.setState({
                isEditMode: false
            })
        } else {
            this.setState({
                isEditMode: true
            })
        }
    }

    render() {
        const { text, onClick, onDone, onImportant, done, important } = this.props

        const textStyle = {
            color: done ? "#aaa" : important ? "#EF6262" : "blue",
            fontWeight: done ? "normal" : important ? "bold" : "unset",
            textDecoration: done ? "line-through" : "none",


        }

        return (<div className="listItem">
            <div className="taskContainer">
                {this.state.isEditMode ? (
                    <input className="edit-input" value={this.state.value} onChange={this.onInputChange} />
                ) : (
                    <li className="task" onClick={onDone} style={textStyle}> {text}</li>

                )}
            </div>
            <div className="buttonContainer">
                <button className="edit-btn" onClick={this.onItemEdit}><FaPen /></button>
                <button className="done-btn" onClick={onDone}><FaCheck /></button>
                <button className="important-btn" onClick={onImportant}><FaExclamation /></button>
                <button className="delete-btn" onClick={onClick}><FaTrash /></button>
            </div>
        </div>

        )
    }
}


export default TodoListItem;