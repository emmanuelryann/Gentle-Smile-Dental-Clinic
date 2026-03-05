import { useState, useEffect, useCallback } from 'react';
import '../styles/Navbar.css';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Testimonials', href: '#testimonials' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openSidebar = useCallback(() => {
    setSidebarOpen(true);
    document.body.classList.add('no-scroll');
  }, []);

  const closeSidebar = useCallback(() => {
    setSidebarOpen(false);
    document.body.classList.remove('no-scroll');
  }, []);

  const handleNavClick = useCallback(
    (e, href) => {
      e.preventDefault();
      closeSidebar();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    },
    [closeSidebar],
  );

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="container navbar__inner">
          <a
            href="#home"
            className="navbar__logo"
            onClick={(e) => handleNavClick(e, '#home')}
          >
            Caninus
          </a>

          {/* Desktop links */}
          <ul className="navbar__links">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="navbar__link"
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="navbar__cta"
            onClick={(e) => handleNavClick(e, '#cta')}
          >
            Book Appointment
          </a>

          {/* Hamburger */}
          <button
            className={`navbar__hamburger${sidebarOpen ? ' open' : ''}`}
            onClick={sidebarOpen ? closeSidebar : openSidebar}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Overlay */}
      <div
        className={`sidebar-overlay${sidebarOpen ? ' visible' : ''}`}
        onClick={closeSidebar}
      />

      {/* Side Drawer */}
      <aside className={`sidebar${sidebarOpen ? ' open' : ''}`}>
        <ul className="sidebar__links">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="sidebar__link"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="sidebar__cta"
          onClick={(e) => handleNavClick(e, '#cta')}
        >
          Book Appointment
        </a>
      </aside>
    </>
  );
}
