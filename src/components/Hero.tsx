import './Hero.css';

const teamMembers = [
  {
    name: 'Sahil Kadam',
    github: 'kadamsahil2511',
    avatar: 'https://github.com/kadamsahil2511.png',
  },
  {
    name: 'Pratima Vanakhade',
    github: 'pratima0809',
    avatar: 'https://github.com/pratima0809.png',
  },
  {
    name: 'Sahil Kadam',
    github: 'kadamsahil2511',
    avatar: 'https://github.com/kadamsahil2511.png',
  },
  {
    name: 'Sahil Kadam',
    github: 'kadamsahil2511',
    avatar: 'https://github.com/kadamsahil2511.png',
  },
];

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <div className="logo-container">
          <img src="/dark_logo.png" alt="ClarifAI Logo" className="hero-logo" />
        </div>
        
        <h1 className="hero-headline">
          Verify Anything. Instantly.
        </h1>
        
        <p className="hero-subheadline">
          ClarifyAI is your truth layer for the web—powered by agentic reasoning.
        </p>

        {/* Team Members */}
        <div className="team-section">
          <p className="team-label">Built by</p>
          <div className="team-members">
            {teamMembers.map((member, index) => (
              <a
                key={index}
                href={`https://github.com/${member.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="team-member"
              >
                <img src={member.avatar} alt={member.name} className="team-avatar" />
                <div className="team-info">
                  <span className="team-name">{member.name}</span>
                  <span className="team-handle">@{member.github}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className="hero-actions">
          <a href="#install" className="cta-button primary">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            <span>Add to Chrome</span>
          </a>
          
          <a href="https://github.com/kadamsahil2511/ClarifyAI-MumbAI-hacks-2025" target="_blank" rel="noopener noreferrer" className="cta-button secondary">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span>View on GitHub</span>
          </a>
        </div>
        
        <div className="hero-badge">
          <span className="badge-dot"></span>
          <span>Powered by Gemini Agents</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
