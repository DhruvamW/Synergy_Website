import { useEffect, useState } from "react";
import "./Team.css";

const teamMembers = [
  {
    name: "Riddhiman Ganguly",
    position: "Team Leader",
    image: "/assets/team/ridhiman.png",
    description:
      "Leads Team Synergy and works across different domains to coordinate the team, drive projects, and turn ideas into meaningful outcomes.",
    email: "",
    linkedin: "",
  },
  {
    name: "T Shrithan Reddy",
    position: "Team Manager",
    image: "/assets/team/shrithan 1.png",
    description:
      "Works on managing the team and coordinating people, projects, and opportunities to keep Synergy moving forward.",
    email: "",
    linkedin: "",
  },
  {
    name: "Ayush Prakash Thorat",
    position: "Treasurer",
    image: "/assets/team/ayush 1.png",
    description:
      "Handles the financial side of Team Synergy and contributes to managing the resources required for projects and activities.",
    email: "",
    linkedin: "",
  },
  {
    name: "Sarayu Matam",
    position: "Management Head",
    image: "/assets/team/sarayu 1.png",
    description:
      "Works across the management side of Synergy, helping coordinate people, activities, and the team's overall operations.",
    email: "",
    linkedin: "",
  },
  {
    name: "Arnav Gupta",
    position: "Electronics Head",
    image: "/assets/team/arnav 1.png",
    description:
      "Leads the electronics side of Team Synergy and contributes to developing hardware-focused solutions and projects.",
    email: "",
    linkedin: "",
  },
  {
    name: "Mrinal",
    position: "Software Head",
    image: "/assets/team/mrinal 1.png",
    description:
      "Leads the software side of Synergy and works on building technical solutions across the team's projects.",
    email: "",
    linkedin: "",
  },
  {
    name: "Samridhi",
    position: "Manufacturing Head",
    image: "/assets/team/samridhi 1.png",
    description:
      "Leads the manufacturing side of Synergy and works on turning ideas and designs into practical, physical solutions.",
    email: "",
    linkedin: "",
  },
];

function Team() {
  const [selectedMember, setSelectedMember] = useState(null);

  useEffect(() => {
    if (!selectedMember) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedMember(null);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [selectedMember]);

  return (
    <section className="team-section" id="team">
      <div className="team-container">

        <div className="team-heading">
          <div>
            <p className="section-eyebrow">
              THE PEOPLE BEHIND SYNERGY
            </p>

            <h2>
              Meet the
              <br />
              <span>team.</span>
            </h2>
          </div>

          <div className="team-intro">
            <p>
              Team Synergy brings together students from different
              disciplines, each contributing their own skills, ideas,
              and perspective to build something bigger together.
            </p>

            <p>
              From technology and electronics to management and
              manufacturing, our team works across disciplines to
              turn ideas into meaningful projects.
            </p>
          </div>
        </div>

        <div className="team-grid">
          {teamMembers.map((member) => (
            <button
              className="team-card"
              key={member.name}
              onClick={() => setSelectedMember(member)}
            >
              <div className="team-image-wrapper">
                <img
                  src={member.image}
                  alt={member.name}
                  className="team-image"
                />

                <div className="team-card-arrow">
                  ↗
                </div>
              </div>

              <div className="team-card-info">
                <h3>{member.name}</h3>
                <p>{member.position}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedMember && (
        <div
          className="team-modal-overlay"
          onClick={() => setSelectedMember(null)}
        >
          <div
            className="team-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="team-modal-close"
              onClick={() => setSelectedMember(null)}
              aria-label="Close"
            >
              ×
            </button>

            <div className="team-modal-image">
              <img
                src={selectedMember.image}
                alt={selectedMember.name}
              />
            </div>

            <div className="team-modal-content">
              <p className="team-modal-position">
                {selectedMember.position}
              </p>

              <h3>{selectedMember.name}</h3>

              <div className="team-modal-divider" />

              <p className="team-modal-description">
                {selectedMember.description}
              </p>

              <div className="team-modal-contact">
                <span>CONNECT:</span>

                <div className="team-contact-links">
                  {selectedMember.linkedin && (
                    <a
                      href={selectedMember.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${selectedMember.name} LinkedIn`}
                    >
                      in
                    </a>
                  )}

                  {selectedMember.email && (
                    <a
                      href={`mailto:${selectedMember.email}`}
                      aria-label={`Email ${selectedMember.name}`}
                    >
                      @
                    </a>
                  )}

                  {!selectedMember.linkedin &&
                    !selectedMember.email && (
                      <span className="contact-unavailable">
                        Contact details coming soon
                      </span>
                    )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Team;