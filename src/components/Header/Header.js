import { FaCheck, FaExclamation } from "react-icons/fa6";
import "./header.css"
const Header = () => {
  return (
    <div className="header">
      <h1 className="headerTitle"> To do List</h1>
      <div className="info">
        <span>Done:</span>
        <span >3 </span>
      </div>
      <div className="info">
        <span>Important:</span>
        <span>1</span>
      </div>
    </div>
  )
}

export default Header;
