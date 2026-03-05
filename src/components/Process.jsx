import '../styles/Process.css';

const STEPS = [
  {
    title: 'Schedule an Appointment',
    text: 'Contact us via phone or online to book a convenient time for your visit. Our team is ready to assist with any scheduling needs.',
    icon: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
  {
    title: 'Consultation with Our Experts',
    text: 'Meet our experienced dentists, who will carefully evaluate your oral health, discuss your concerns, and create a personalized treatment plan.',
    icon: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: 'Begin Your Treatment',
    text: 'Start your journey to a healthier, brighter smile with our advanced dental treatments designed for your comfort and satisfaction.',
    icon: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
];

export default function Process() {
  return (
    <section className="process" id="process">
      <div className="container">
        <div className="process__inner">
          <div className="process__content">
            <span className="section-label">How it Works</span>
            <h2 className="section-heading">
              A Simple Process for Exceptional Dental Care at Caninus
            </h2>
            <p className="process__description">
              At Caninus, we make your dental care journey simple and seamless.
              Here&apos;s how it works:
            </p>

            <div className="process__steps">
              {STEPS.map((step) => (
                <div className="process__step" key={step.title}>
                  <div className="process__step-icon">{step.icon}</div>
                  <div className="process__step-content">
                    <h3 className="process__step-title">{step.title}</h3>
                    <p className="process__step-text">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="process__image">
            <img
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80"
              alt="Dental team at work"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
