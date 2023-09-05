import { Component } from "react"
import "./addItem.css"


class AddItem extends Component {

  state = {
    inputValue: ""
  }
  InputHandler = (event) => {
    this.setState({
      inputValue: event.target.value
    })
  }

  onBtnClick = () => {
    this.props.AddItemHandler(this.state.inputValue);
    this.setState({ inputValue: "" })
  }
  render() {
    return (
      <div className="AddItem" >
        <input className="addInput" value={this.state.inputValue} placeholder="New Task..." onChange={this.InputHandler} />
        <button className="addBtn" onClick={this.onBtnClick}>Add</button>
      </div>
    )
  }
}


export default AddItem