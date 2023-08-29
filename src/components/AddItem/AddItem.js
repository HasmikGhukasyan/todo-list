import Button from "../Button/Button"
import "./addItem.css"

const AddItem = () => {
    return (
    <div className="AddItem">
      <input  className="addInput" placeholder="New Task..."/>
      <Button className ="addBtn" text="Add" color="white" />
      </div>
    )
}

export default AddItem