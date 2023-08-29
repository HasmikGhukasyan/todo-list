import Button from "../Button/Button"
import "./addItem.css"

const AddItem = () => {
    return (
    <div className="AddItem">
      <input  className="addInput" placeholder="Type text for"/>
      <Button text="Add Task" />
      </div>
    )
}

export default AddItem