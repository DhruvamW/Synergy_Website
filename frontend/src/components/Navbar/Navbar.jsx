import { Link } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">

        <Link to="/" className="navbar-logo">
          SYNERGY
        </Link>

        <nav className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/domains">Domains</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/synchron">Synchron</Link>
          <Link to="/#team">Team</Link>
        </nav>

        <Link to="/apply" className="navbar-cta">
          Apply Now
        </Link>

      </div>
    </header>
  );
}

export default Navbar;