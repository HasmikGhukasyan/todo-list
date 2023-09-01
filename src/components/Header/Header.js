import { FaCheck, FaExclamation } from "react-icons/fa6";
import "./header.css"
const Header = () => {
  return (
    <div className="header">
      <span className="headerTitle"> To do List</span>
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
