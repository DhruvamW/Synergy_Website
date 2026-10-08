import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">

        <div className="hero-content">
          <p className="hero-eyebrow">
            TEAM SYNERGY
          </p>

          <h1 className="hero-title">
            Build.
            <span> Create.</span>
            <br />
            Innovate.
          </h1>

          <p className="hero-description">
            A multidisciplinary student team building innovative
            solutions through technology, creativity, and collaboration.
          </p>

          <div className="hero-actions">
            <a href="/apply" className="hero-primary-button">
              Apply Now
            </a>

            <a href="#about" className="hero-secondary-button">
              Explore Synergy
            </a>
          </div>
        </div>

        <div className="hero-visual">
          {/* Spline will go here */}
        </div>

      </div>
    </section>
  );
}

export default Hero;