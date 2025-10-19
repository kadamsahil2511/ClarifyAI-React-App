import './Demo.css';

const Demo = () => {
  return (
    <section className="demo" id="demo">
      <div className="demo-container">
        <div className="demo-header">
          <h2 className="demo-title">How It Works</h2>
          <div className="title-underline-demo"></div>
        </div>

        <div className="demo-content-wrapper">
          <div className="demo-info">
            <p className="demo-description">
              See ClarifyAI in action—powered by Gemini agents and a Flask API orchestrator.
            </p>

            <div className="demo-features">
              <div className="demo-feature">
                <div className="demo-feature-icon" style={{ background: '#FFD93D' }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                  </svg>
                </div>
                <div className="demo-feature-text">
                  <h4>Lightning Fast</h4>
                  <p>Get results in seconds</p>
                </div>
              </div>
              <div className="demo-feature">
                <div className="demo-feature-icon" style={{ background: '#FF6B9D' }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="16 12 12 8 8 12"/>
                    <line x1="12" y1="16" x2="12" y2="8"/>
                  </svg>
                </div>
                <div className="demo-feature-text">
                  <h4>Highly Accurate</h4>
                  <p>Powered by advanced AI</p>
                </div>
              </div>
              <div className="demo-feature">
                <div className="demo-feature-icon" style={{ background: '#4ECDC4' }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                  </svg>
                </div>
                <div className="demo-feature-text">
                  <h4>Full Citations</h4>
                  <p>Transparent source tracking</p>
                </div>
              </div>
            </div>
          </div>

          <div className="demo-video-wrapper">
            <div className="video-container">
              <iframe
                src="https://www.youtube.com/embed/jkF5NJxaKk4?si=-PhdkUSwmPaDrWwQ"
                title="ClarifyAI Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="video-glow"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
