import '../styles/Hero.css';

const STATS = [
  { number: '247', label: 'Happy Patients Treated' },
  { number: '184', label: 'Dental Procedures Done' },
  { number: '153', label: 'Successful Implants' },
  { number: '8', label: 'Years of Excellence' },
];

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__bg">
        <img
          src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1920&q=80"
          alt="Dental patient receiving treatment"
          loading="eager"
        />
      </div>

      <div className="container hero__content">
        <div className="hero__badge">
          <span className="hero__badge-dot" />
          <span className="hero__badge-text">
            Welcome to Caninus — Trusted Dental Care in Town
          </span>
        </div>

        <h1 className="hero__title">
          Your Bright Smile,
          <br />
          Our Priority
        </h1>

        <p className="hero__description">
          We provide gentle, professional dental care to help you achieve a
          beautiful and natural smile that you can proudly share with the world.
        </p>

        <div className="hero__buttons">
          <a href="#cta" className="hero__btn hero__btn--primary">
            Book Appointment
          </a>
          <a href="#services" className="hero__btn hero__btn--secondary">
            Explore Services
          </a>
        </div>
      </div>

      <div className="hero__stats">
        <div className="container hero__stats-inner">
          {STATS.map((stat) => (
            <div className="hero__stat" key={stat.number}>
              <span className="hero__stat-number">{stat.number}</span>
              <span className="hero__stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
