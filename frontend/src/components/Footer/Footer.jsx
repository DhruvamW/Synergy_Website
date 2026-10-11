import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-main">

          {/* Team Manager */}
          <div className="footer-manager">
            <p className="footer-eyebrow">
              TEAM MANAGER
            </p>

            <div className="footer-manager-content">

              <div className="footer-manager-image">
                <img
                  src="/assets/team/shrithan 1.png"
                  alt="T Shrithan Reddy"
                />
              </div>

              <div className="footer-manager-info">
                <h3>T Shrithan Reddy</h3>

                <p className="footer-manager-role">
                  Team Manager
                </p>

                <div className="footer-contact-info">
                  <span>Contact details coming soon</span>
                </div>
              </div>

            </div>
          </div>

          {/* Socials */}
          <div className="footer-socials">
            <p className="footer-eyebrow">
              FOLLOW SYNERGY
            </p>

            <div className="footer-social-links">

              <a
                href="#"
                className="footer-social-link"
                aria-label="Team Synergy on LinkedIn"
                onClick={(event) => event.preventDefault()}
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M6.5 8.5H3.5V20H6.5V8.5ZM5 3C3.9 3 3 3.9 3 5C3 6.1 3.9 7 5 7C6.1 7 7 6.1 7 5C7 3.9 6.1 3 5 3ZM20.5 13.4C20.5 9.9 18.6 8.2 16 8.2C13.9 8.2 13 9.4 12.5 10.1V8.5H9.5V20H12.5V14.3C12.5 12.8 12.8 11.3 14.5 11.3C16.2 11.3 16.2 12.9 16.2 14.4V20H20.5V13.4Z"
                  />
                </svg>
              </a>

              <a
                href="#"
                className="footer-social-link"
                aria-label="Team Synergy on Instagram"
                onClick={(event) => event.preventDefault()}
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                    ry="5"
                  />

                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                  />

                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </a>

            </div>

            <p className="footer-social-description">
              Follow Team Synergy and stay updated with
              our projects, events, and activities.
            </p>
          </div>

        </div>

        <div className="footer-bottom">

          <span>
            © {new Date().getFullYear()} Team Synergy
          </span>

          <Link to="/" className="footer-bottom-logo">
            SYNERGY
          </Link>

        </div>

      </div>
    </footer>
  );
}

export default Footer;