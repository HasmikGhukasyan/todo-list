import { Component } from "react"
import "./todoListItem.css"
import { FaTrash, FaCheck, FaExclamation, FaPen } from "react-icons/fa6"




class TodoListItem extends Component {
    state = {
        isDone: false,
        isImportant: this.props.important,
        isEditMode: false,
        value: this.props.text
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

    onDelete = () => {
        this.props.deleteHandler(this.props.id)
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
        const { text, onClick } = this.props
        const { isDone, isImportant } = this.state

        const textStyle = {
            color: isDone ? "#aaa" : isImportant ? "#EF6262" : "blue",
            fontWeight: isDone ? "normal" : isImportant ? "bold" : "unset",
            textDecoration: isDone ? "line-through" : "none",


        }

        return (<div className="listItem">
            <div className="taskContainer" onClick={this.onDone}>
                {this.state.isEditMode ? (
                    <input value={this.state.value} onChange={this.onInputChange} />
                ) : (
                    <li className="task" style={textStyle}> {text}</li>

                )}
            </div>
            <div className="buttonContainer">
                <button className="edit-btn" onClick={this.onItemEdit}><FaPen /></button>
                <button className="done-btn" onClick={this.onDone}><FaCheck /></button>
                <button className="important-btn" onClick={this.onImportant}><FaExclamation /></button>
                <button className="delete-btn" onClick={onClick}><FaTrash /></button>
            </div>
        </div>

        )
    }
}


export default TodoListItem;