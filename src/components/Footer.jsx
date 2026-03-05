import '../styles/Footer.css';

const QUICK_LINKS = ['Home', 'Services', 'About', 'Testimonials', 'Contact'];
const LEGAL = ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Disclaimer'];
const SERVICES = ['Dental Implants', 'Teeth Whitening', 'Orthodontics', 'Root Canal', 'Dental Crowns'];
const RESOURCES = ['Patient Forms', 'Insurance Info', 'FAQs', 'Dental Tips', 'Before & After'];

function SocialIcon({ type }) {
  const icons = {
    facebook: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
    twitter: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
      </svg>
    ),
    instagram: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="5" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
    linkedin: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z" />
      </svg>
    ),
    youtube: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.43z" />
        <polygon points="9.75,15.02 15.5,11.75 9.75,8.48" fill="#154360" />
      </svg>
    ),
  };
  return icons[type] || null;
}

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <div className="footer__logo">Caninus</div>
            <p className="footer__brand-text">
              Expert dental care with a gentle touch. Your smile is our passion
              and our priority.
            </p>
          </div>

          <div className="footer__column">
            <h4 className="footer__column-title">Quick Links</h4>
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
              {['facebook', 'twitter', 'instagram', 'linkedin', 'youtube'].map(
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
            © 2025 All Rights Reserved. Caninus Dental Care • TDRA
          </p>
        </div>
      </div>
    </footer>
  );
}
