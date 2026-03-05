import '../styles/Footer.css';
import gentleSmileLogo from '../assets/gentle smile logo.png';

const QUICK_LINKS = ['Home', 'Clinics', 'Pricing', 'About', 'Locations'];
const LEGAL = ['Privacy Policy', 'Terms of Service', 'Disclaimer'];
const SERVICES = ['Dental Implants', 'Teeth Whitening', 'Orthodontics', 'Routine Checkups'];
const RESOURCES = ['Information', 'Insurance', 'FAQs', 'Testimonials'];

function SocialIcon({ type }) {
  const icons = {
    x: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    instagram: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="5" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
    facebook: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
    youtube: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.43z" />
        <polygon points="9.75,15.02 15.5,11.75 9.75,8.48" fill="#2d3748" />
      </svg>
    ),
    tiktok: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.75a8.18 8.18 0 004.77 1.52V6.84a4.84 4.84 0 01-1-.15z" />
      </svg>
    ),
  };
  return icons[type] || null;
}

export default function Footer() {
  return (
    <footer className="footer fade-in-section" id="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <div className="footer__logo">
              <img src={gentleSmileLogo} alt="Gentle Smile Dental" className="footer__logo-img" />
            </div>
          </div>

          <div className="footer__column">
            <h4 className="footer__column-title">Quick Links:</h4>
            <ul className="footer__links">
              {QUICK_LINKS.map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="footer__link">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__column">
            <h4 className="footer__column-title">Legal</h4>
            <ul className="footer__links">
              {LEGAL.map((link) => (
                <li key={link}>
                  <a href="#" className="footer__link">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__column">
            <h4 className="footer__column-title">Services</h4>
            <ul className="footer__links">
              {SERVICES.map((link) => (
                <li key={link}>
                  <a href="#services" className="footer__link">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__column">
            <h4 className="footer__column-title">Patient Resources</h4>
            <ul className="footer__links">
              {RESOURCES.map((link) => (
                <li key={link}>
                  <a href="#" className="footer__link">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__social-column">
            <h4 className="footer__social-label">Social</h4>
            <div className="footer__socials">
              {['x', 'instagram', 'facebook', 'youtube', 'tiktok'].map(
                (social) => (
                  <a
                    key={social}
                    href="#"
                    className="footer__social-link"
                    aria-label={social}
                  >
                    <SocialIcon type={social} />
                  </a>
                ),
              )}
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © 2025 All Rights Reserved • Caninus • Dental Clinic — 75914
          </p>
        </div>
      </div>
    </footer>
  );
}
