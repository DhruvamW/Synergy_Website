import { Link } from "react-router-dom";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">

        <div className="contact-heading">
          <p className="section-eyebrow">GET IN TOUCH</p>

          <h2>
            Let's build
            <br />
            <span>something together.</span>
          </h2>
        </div>

        <div className="contact-content">
          <p className="contact-description">
            Have an idea, a project, or simply want to be a part
            of Team Synergy? We'd love to hear from you.
          </p>

          <Link to="/apply" className="contact-card">
            <div>
              <span className="contact-card-label">
                JOIN SYNERGY
              </span>

              <h3>
                Apply to join the team.
              </h3>
            </div>

            <span className="contact-card-arrow">
              ↗
            </span>
          </Link>

          <div className="contact-details">
            <span>CONTACT</span>

            <p>
              Email, social links, and other contact information
              will be added here.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;