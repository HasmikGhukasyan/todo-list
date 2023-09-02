import { Component } from "react";
import "./search.css"


class Search extends Component {
  render() {
    return (
      <div className="searchcontainer">
        <input className="searchInput" placeholder="Search..." />
        <div className="search-btn-container">
          <button className="search-btn-done" >Done</button>
          <button className="search-btn-important">Important</button>
          <button className="search-btn-all">All</button>
        </div>
      </div>
    )
  }
}


export default Search;