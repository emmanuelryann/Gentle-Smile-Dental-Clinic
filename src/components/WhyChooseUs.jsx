import '../styles/WhyChooseUs.css';

const FEATURES = [
  {
    title: 'Experienced and Caring Dentists',
    text: 'Our team of certified dental professionals brings years of hands-on experience and a compassionate approach to every procedure for exceptional care.',
    icon: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="9" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Advanced Dental Technology',
    text: 'We utilize the latest in dental technology, including digital X-rays, laser treatments, and 3D imaging, to ensure accurate diagnostics and efficient treatments.',
    icon: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="8" y1="21" x2="16" y2="21" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="12" y1="17" x2="12" y2="21" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Comfortable and Safe Environment',
    text: 'Our clinic is designed with your comfort in mind, providing a welcoming and sterile atmosphere that puts you at ease throughout your dental experience.',
    icon: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function WhyChooseUs() {
  return (
    <section className="why-choose" id="about">
      <div className="container">
        <div className="why-choose__inner">
          {/* Left panel with image overlay */}
          <div className="why-choose__image">
            <img
              src="https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=800&q=80"
              alt="Dental clinic"
              loading="lazy"
            />
            <div className="why-choose__image-overlay">
              <span className="why-choose__image-label">Why Choose Us</span>
              <h2 className="why-choose__image-title">
                What Makes Caninus Your Trusted Partner in Dental Care
                Excellence
              </h2>
              <p className="why-choose__image-text">
                At Caninus, we combine expertise and compassion to deliver the
                best dental care experience.
              </p>
            </div>
          </div>

          {/* Right feature cards */}
          <div className="why-choose__features">
            {FEATURES.map((feature) => (
              <div className="why-choose__card" key={feature.title}>
                <div className="why-choose__card-icon">{feature.icon}</div>
                <h3 className="why-choose__card-title">{feature.title}</h3>
                <p className="why-choose__card-text">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
