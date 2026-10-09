import "./VisionMission.css";

function VisionMission() {
  return (
    <section className="vision-mission-section">
      <div className="vision-mission-container">

        <div className="vm-card">
          <p className="vm-label">01 — VISION</p>

          <h3>
            Build a community
            <span> that creates.</span>
          </h3>

          <p className="vm-description">
            To create an environment where students from different
            disciplines can collaborate, experiment, and transform
            ambitious ideas into meaningful solutions.
          </p>
        </div>

        <div className="vm-card vm-card-highlight">
          <p className="vm-label">02 — MISSION</p>

          <h3>
            Learn together.
            <span> Build together.</span>
          </h3>

          <p className="vm-description">
            To empower students with the skills, opportunities, and
            collaborative environment needed to work on real-world
            problems and create impactful projects.
          </p>
        </div>

      </div>
    </section>
  );
}

export default VisionMission;