import { Component } from "react";
import "./search.css"
import AllertMessage from "../AlertMessage/AlertMessage";


class Search extends Component {
  state = {
    value: ""
  }

  onSearch = (event) => {
    this.setState({
      value: event.target.value
    })
    this.props.searchHandler(event.target.value)
  }



  render() {
    return (<div>

      <div className="searchcontainer">
        <input value={this.state.value} onChange={this.onSearch} className="searchInput" placeholder="Search..." />
        <div className="search-btn-container">
          <button className="search-btn-done" >Done</button>
          <button className="search-btn-important">Important</button>
          <button className="search-btn-all">All</button>
        </div>
      </div>
      <AllertMessage type="info" text="Info message" />
    </div>
    )
  }
}


export default Search;