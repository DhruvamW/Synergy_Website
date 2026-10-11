import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleHomeClick = () => {
  if (location.pathname === "/") {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  } else {
    navigate("/");
  }
  };

  const handleSectionClick = (sectionId) => {
    if (location.pathname === "/") {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      navigate(`/#${sectionId}`);
    }
  };

  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      const sectionId = location.hash.substring(1);

      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({
          behavior: "smooth",
        });
      }, 100);
    }
  }, [location]);

  return (
    <header className="navbar">
      <div className="navbar-container">

        <Link to="/" className="navbar-logo">
          SYNERGY
        </Link>

        <nav className="navbar-links">
          <button className="navbar-section-link" onClick={() => handleHomeClick()}>
            Home
          </button>

          <Link to="/domains">
            Domains
          </Link>

          <Link to="/projects">
            Projects
          </Link>

          <Link to="/synchron">
            Synchron
          </Link>

          <button
            className="navbar-section-link"
            onClick={() => handleSectionClick("team")}
          >
            Team
          </button>
        </nav>

        <Link to="/apply" className="navbar-cta">
          Apply Now
        </Link>

      </div>
    </header>
  );
}

export default Navbar;