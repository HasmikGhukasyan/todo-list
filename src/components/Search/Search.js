import { Component } from "react";
import "./search.css"
import AllertMessage from "../AlertMessage/AlertMessage";


class Search extends Component {
  state = {
    value: "",
  }



  onSearch = (event) => {
    this.setState({
      value: event.target.value
    })
    this.props.searchHandler(event.target.value)
  }
  onsearchAll = () => {
    this.props.searchAllHandler()
  }

  onDone = () => {
    this.props.doneFilterHandler()
  }

  onImportant = () => {
    this.props.importantFilterHandler()

  }

  render() {
    return (<div>

      <div className="searchcontainer">
        <input value={this.state.value} onChange={this.onSearch} className="searchInput" placeholder="Search..." />
        <div className="search-btn-container">
          <button className="search-btn-done" onClick={this.onDone} >Done</button>
          <button className="search-btn-important" onClick={this.onImportant}>Important</button>
          <button className="search-btn-all" onClick={this.onsearchAll}>All</button>
        </div>
      </div>
      {this.props.filteredItemsLength === 0 ? <AllertMessage type="info" text="No Results..." /> : null}
    </div>
    )
  }
}


export default Search;