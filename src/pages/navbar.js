import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <a class="home" href="/">
        <h2 className="logo">Billing App</h2>
      </a>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/select-client">Add Bill</Link>
        </li>
        <li>
          <Link to="/view-bills">View Bills</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
