import { Link } from "react-router-dom";
import "./SynchronPreview.css";

function SynchronPreview() {
  return (
    <section className="synchron-preview">
      <div className="synchron-container">

        <div className="synchron-content">
          <p className="synchron-eyebrow">
            SYNERGY PRESENTS
          </p>

          <h2>
            Synchron
            <span>'25</span>
          </h2>

          <p className="synchron-description">
            A competition that brings together students to challenge
            themselves, collaborate, and turn ideas into meaningful
            solutions.
          </p>

          <Link to="/synchron" className="synchron-button">
            Explore Synchron
          </Link>
        </div>

        <div className="synchron-visual">
          <div className="synchron-year">
            25
          </div>
        </div>

      </div>
    </section>
  );
}

export default SynchronPreview;