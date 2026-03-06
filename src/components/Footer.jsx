import '../styles/Footer.css';
import gentleSmileLogo from '../assets/gentle smile logo.png';

const QUICK_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Appointments', href: '#appointments' },
  { label: 'Contact', href: '#footer' },
];

const SERVICES = [
  { label: 'Professional Cleaning', href: '#services' },
  { label: 'Teeth Whitening', href: '#services' },
  { label: 'Braces', href: '#services' },
  { label: 'Porcelain', href: '#services' },
];

const LEGAL = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Disclaimer', href: '#' },
];

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
    linkedin: (
      <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
    phone: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
    ),
    email: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
    ),
    location: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
    ),
    clock: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
    ),
  };
  return icons[type] || null;
}

export default function Footer() {
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer fade-in-section" id="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <div className="footer__logo">
              <img src={gentleSmileLogo} alt="Gentle Smile Dental" className="footer__logo-img" />
            </div>
            <h4 className="footer__tagline">Caring for you and your smile</h4>
            <p className="footer__brand-text">
              Providing exceptional dental care with a focus on patient comfort and the latest technology across Ghana.
            </p>
            <div className="footer__socials">
              {[
                { id: 'facebook', url: '#' },
                { id: 'instagram', url: 'https://www.instagram.com/gentlesmiledentalcare_/' },
                { id: 'x', url: '#' },
                { id: 'linkedin', url: '#' }
              ].map((social) => (
                  <a
                    key={social.id}
                    href={social.url}
                    className="footer__social-link"
                    aria-label={social.id}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SocialIcon type={social.id} />
                  </a>
                )
              )}
            </div>
          </div>

          <div className="footer__column">
            <h4 className="footer__column-title">Quick Links</h4>
            <ul className="footer__links">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="footer__link" onClick={(e) => handleNavClick(e, link.href)}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__column">
            <h4 className="footer__column-title">Legal</h4>
            <ul className="footer__links">
              {LEGAL.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="footer__link" onClick={link.href === '#' ? undefined : (e) => handleNavClick(e, link.href)}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__column">
            <h4 className="footer__column-title">Our Services</h4>
            <ul className="footer__links">
              {SERVICES.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="footer__link" onClick={(e) => handleNavClick(e, link.href)}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__column">
            <h4 className="footer__column-title">Get in Touch</h4>
            <ul className="footer__contact-list">
              <li className="footer__contact-item">
                <SocialIcon type="phone" />
                <span>024 013 5612 / 050 376 8111</span>
              </li>
              <li className="footer__contact-item">
                <SocialIcon type="email" />
                <span>info@gentlesmile.com</span>
              </li>
              <li className="footer__contact-item">
                <SocialIcon type="location" />
                <span>Lashibi - Shalom Spot Off Ashaiman Road</span>
              </li>
              <li className="footer__contact-item">
                <SocialIcon type="clock" />
                <span>Mon-Sat: 8AM-7PM</span>
              </li>
            </ul>
            <a href="#appointments" className="footer__btn" onClick={(e) => handleNavClick(e, '#appointments')}>
              Book Appointment 
              <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © 2025 All Rights Reserved • Gentle Smile Dental Clinic
          </p>
        </div>
      </div>
    </footer>
  );
}
