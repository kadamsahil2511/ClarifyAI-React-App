import './Footer.css';

const links = [
  { text: 'GitHub', url: 'https://github.com/kadamsahil2511/ClarifyAI-MumbAI-hacks-2025' },
  { text: 'Privacy', url: '/privacy' },
  { text: 'Contact', url: 'mailto:kadamsahil2511@gmail.com' },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <img src="/dark_logo.png" alt="ClarifAI" className="footer-logo" />
            <p className="footer-tagline">
              Your truth layer for the web
            </p>
          </div>

          <div className="footer-links">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target={link.url.startsWith('http') ? '_blank' : '_self'}
                rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="footer-link"
              >
                {link.text}
              </a>
            ))}
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p className="footer-copyright">© 2025 ClarifyAI</p>
          <p className="footer-attribution">
            Built with ❤️ for MumbAI Hacks 2025
          </p>
        </div>
      </div>

      <div className="footer-gradient"></div>
    </footer>
  );
};

export default Footer;
