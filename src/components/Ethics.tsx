import './Ethics.css';

const Ethics = () => {
  return (
    <section className="ethics">
      <div className="ethics-container">
        <div className="ethics-icon">
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="var(--primary-color)"
            />
            <path
              d="M9 12l2 2 4-4"
              stroke="var(--bg-dark)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <h2 className="ethics-title">Built for Trust</h2>
        
        <p className="ethics-description">
          ClarifyAI never stores personal data. All verdicts are explainable, cited, and transparent.
        </p>

        <div className="ethics-principles">
          <div className="principle" style={{ ['--principle-color' as string]: '#FF6B9D' }}>
            <div className="principle-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
            </div>
            <h4>Privacy First</h4>
            <p>Zero data collection or tracking</p>
          </div>
          <div className="principle" style={{ ['--principle-color' as string]: '#4ECDC4' }}>
            <div className="principle-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
              </svg>
            </div>
            <h4>Open Source</h4>
            <p>Transparent algorithms you can audit</p>
          </div>
          <div className="principle" style={{ ['--principle-color' as string]: '#FFD93D' }}>
            <div className="principle-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </div>
            <h4>Verifiable</h4>
            <p>Every claim backed by citations</p>
          </div>
          <div className="principle" style={{ ['--principle-color' as string]: '#1DB954' }}>
            <div className="principle-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
              </svg>
            </div>
            <h4>Unbiased</h4>
            <p>No political or commercial influence</p>
          </div>
        </div>

        <div className="ethics-badge">
          <span>Committed to ethical AI practices</span>
        </div>
      </div>
    </section>
  );
};

export default Ethics;
