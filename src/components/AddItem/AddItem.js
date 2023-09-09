import { Component } from "react"
import "./addItem.css"
import AllertMessage from "../AlertMessage/AlertMessage"
import { validateInput } from "../../utils/validator"


class AddItem extends Component {

  state = {
    inputValue: "",
    isError: false
  }
  InputHandler = (event) => {
    this.setState({
      inputValue: event.target.value,
    })
  }

  onBtnClick = () => {
    if (!validateInput(this.state.inputValue)) {
      this.setState({
        isError: true
      })
      return
    }
    this.setState({
      isError: false
    })
    this.props.AddItemHandler(this.state.inputValue);
    this.setState({ inputValue: "" })
  }
  render() {
    return (<div>
      <div className="AddItem" >

        <input
          className="addInput"
          value={this.state.inputValue}
          placeholder="New Task..."
          onChange={this.InputHandler}
        />
        <button className="addBtn" onClick={this.onBtnClick}>Add</button>
      </div>
      {this.state.isError ? <AllertMessage text="Error Message" type="error" /> : null}
    </div>
    )
  }
}


export default AddItem