import Button from "../Button/Button";
import "./search.css"

const Search = () => {
    return (
    <div className="searchcontainer">
      <input className="searchInput" placeholder="Search..."/>
      <Button className="searchBtn" text="Search" color="white"/>
      </div>
  )}

  export default Search;