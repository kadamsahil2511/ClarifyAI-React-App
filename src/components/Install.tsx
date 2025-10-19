import './Install.css';

const steps = [
  'Install the extension from Chrome Web Store',
  'Pin the ClarifyAI icon',
  'Start verifying with one click',
];

const Install = () => {
  return (
    <section className="install" id="install">
      <div className="install-container">
        <div className="install-content">
          <h2 className="install-title">Get Started</h2>
          <p className="install-subtitle">
            Join the fight against misinformation in three simple steps
          </p>

          <div className="install-steps">
            {steps.map((step, index) => (
              <div key={index} className="install-step">
                <div className="step-number">{index + 1}</div>
                <div className="step-content">
                  <p className="step-text">{step}</p>
                  <div className="step-line"></div>
                </div>
              </div>
            ))}
          </div>

          <a
            href="https://chromewebstore.google.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="install-button"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                fill="currentColor"
              />
            </svg>
            <span>Install Now</span>
          </a>

          <p className="install-note">
            Free forever • No signup required • Privacy-first
          </p>
        </div>

        <div className="install-visual">
          <div className="browser-mockup">
            <div className="browser-header">
              <div className="browser-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="browser-address">chrome://extensions</div>
            </div>
            <div className="browser-content">
              <div className="extension-card">
                <img src="/dark_logo.png" alt="ClarifAI" className="extension-icon" />
                <div className="extension-info">
                  <h4>ClarifAI</h4>
                  <p>Your truth layer for the web</p>
                </div>
                <div className="extension-badge">Active</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Install;
