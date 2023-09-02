import { Component } from "react"
import "./addItem.css"


class AddItem extends Component {

  render() {
    return (
      <div className="AddItem" >
        <input className="addInput" placeholder="New Task..." />
        <button className="addBtn">Add</button>
      </div>
    )
  }
}

// const AddItem = () => {
//   return (
//     <div className="AddItem">
//       <input className="addInput" placeholder="New Task..." />
//       <button className="addBtn">Add</button>
//     </div>
//   )
// }

export default AddItem