import "./header.css"
import { Component } from "react";


class Header extends Component {
  render() {
    const { done, important } = this.props
    return (
      <div className="header">
        <span className="headerTitle"> To do List</span>
        <div className="info">
          <span>Done:</span>
          <span >{done} </span>
        </div>
        <div className="info">
          <span>Important:</span>
          <span>{important}</span>
        </div>
      </div>
    )
  }
}


export default Header;
