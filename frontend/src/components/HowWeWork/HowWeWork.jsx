import "./HowWeWork.css";

const workModes = [
  {
    number: "01",
    title: "Industry Projects",
    description:
      "Collaborate with industries and organizations to work on real-world problems, applying multidisciplinary skills to develop practical solutions.",
    tags: ["Real-world Problems", "Industry Collaboration", "Innovation"],
  },
  {
    number: "02",
    title: "Student Projects",
    description:
      "Turn ideas into projects through experimentation, collaboration, and hands-on learning across different technical and creative domains.",
    tags: ["Student-led", "Experimentation", "Hands-on Learning"],
  },
];

function HowWeWork() {
  return (
    <section className="how-we-work-section">
      <div className="how-we-work-container">

        <div className="how-we-work-heading">
          <p className="section-eyebrow">HOW WE WORK</p>

          <h2>
            From ideas
            <br />
            <span>to impact.</span>
          </h2>

          <p className="how-we-work-intro">
            Synergy brings together students, ideas, and opportunities
            to create meaningful projects through collaboration.
          </p>
        </div>

        <div className="work-modes">
          {workModes.map((mode) => (
            <article className="work-card" key={mode.number}>
              <div className="work-card-top">
                <span className="work-number">
                  {mode.number}
                </span>

                <span className="work-arrow">↗</span>
              </div>

              <div className="work-card-content">
                <h3>{mode.title}</h3>

                <p>{mode.description}</p>

                <div className="work-tags">
                  {mode.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default HowWeWork;