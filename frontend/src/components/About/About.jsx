import "./About.css";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">

        <div className="section-heading">
          <p className="section-eyebrow">WHO WE ARE</p>

          <h2>
            More than a team.
            <br />
            <span>A collective of builders.</span>
          </h2>
        </div>

        <div className="about-content">
          <p>
            Team Synergy is a multidisciplinary student team that brings
            together people from different domains to build, experiment,
            and solve meaningful problems together.
          </p>

          <p>
            We believe that the best ideas emerge when different skills,
            perspectives, and disciplines work together. From engineering
            and technology to management, design, and innovation, Synergy
            provides a platform for students to turn ideas into reality.
          </p>
        </div>

      </div>
    </section>
  );
}

export default About;