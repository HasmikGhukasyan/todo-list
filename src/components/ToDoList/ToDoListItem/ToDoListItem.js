import { Component } from "react"
import "./todoListItem.css"
import { FaTrash, FaCheck, FaExclamation, FaPen, FaCircleCheck } from "react-icons/fa6"
import { validateInput } from "../../../utils/validator"




class TodoListItem extends Component {
    state = {
        isEditMode: false,
        value: this.props.text,
        isError: false,
    }

    onInputChange = (event) => {
        this.setState({
            value: event.target.value
        })
    }

    onItemEdit = () => {
        if (!validateInput(this.state.value)) {
            this.setState({
                isError: true
            })
            return;
        }
        if (this.state.isEditMode) {
            this.props.onEdit(this.props.id, this.state.value)
            this.setState({
                isEditMode: false,
                isError: false
            })
        } else {
            this.setState({
                isEditMode: true,
                isError: false
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

        const inputStyle = {
            borderColor: this.state.isError ? "red" : "#c998f5"
        }

        return (<div className="listItem">
            <div className={`taskContainer ${this.state.isEditMode ? "padding-0" : null}`}>
                {this.state.isEditMode ? (
                    <div className="item-input-wrapper">
                        <input
                            style={inputStyle}
                            className="edit-input"
                            value={this.state.value}
                            onChange={this.onInputChange} />
                        {
                            this.state.isError ? <span className="input-error-message" >Must contain 3 and more characters</span> : null
                        }
                    </div>
                ) : (
                    <li className="task" onClick={onDone} style={textStyle}> {text}</li>

                )}
            </div>
            <div className="buttonContainer">
                <button className="edit-btn" onClick={this.onItemEdit}> {this.state.isEditMode ? <FaCircleCheck /> : <FaPen />}</button>
                <button className="done-btn" onClick={onDone}><FaCheck /></button>
                <button className="important-btn" onClick={onImportant}><FaExclamation /></button>
                <button className="delete-btn" onClick={onClick}><FaTrash /></button>
            </div>
        </div >
        )
    }
}


export default TodoListItem;