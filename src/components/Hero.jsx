import '../styles/Hero.css';

const STATS = [
  { number: '247', label: 'Performed Surgeries' },
  { number: '184', label: 'Satisfied Patients' },
  { number: '153', label: 'Staff Members' },
  { number: '8', label: 'Monthly Surgeries' },
];

const AVATARS = [
  'https://dentistry.co.uk/app/uploads/2024/08/dduyd-1024x682.png',
  'https://www.firstchoicelab.com/wp-content/uploads/2022/02/AdobeStock_128979149-1024x683.jpg',
  'https://villageprosthodontics.com/wp-content/uploads/2023/09/Screenshot-2023-09-11-at-8.44.55-AM.png',
];

export default function Hero() {
  return (
    <section className="hero fade-in-section" id="home">
      <div className="hero__bg">
        <img
          src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1920&q=80"
          alt="Dental patient receiving treatment"
          loading="eager"
        />
      </div>

      <div className="container hero__body">
        <div className="hero__content">
          <div className="hero__badge">
            <div className="hero__avatars">
              {AVATARS.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="Dentist"
                  className="hero__avatar"
                />
              ))}
            </div>
            <span className="hero__badge-text">
              With more than 10 experienced dentists, we ensure<br />exceptional care
              for your smile
            </span>
          </div>

          <h1 className="hero__title">
            Your Bright Smile,
            <br />
            Our Priority
          </h1>

          <p className="hero__description">
            Exceptional dental care tailored to your needs, ensuring a confident
            and radiant smile that you can proudly share with the world
          </p>

          <a href="#cta" className="hero__cta-btn">
            Book Appointment
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
