import { Link } from "react-router-dom";
import "../css/App.css";
import NavDropdown from "react-bootstrap/NavDropdown";

function DropdownItemComponent(props) {
    return <NavDropdown.Item >
          <Link style={{textDecoration : "none", color : "black"}} to={props.link}>{props.title}</Link>
    </NavDropdown.Item>;
  }
export default DropdownItemComponent;