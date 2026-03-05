import '../styles/CTA.css';

export default function CTA() {
  return (
    <section className="cta-section fade-in-section" id="cta">
      <div className="cta-section__bg">
        <img
          src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1920&q=80"
          alt="Dental instruments"
          loading="lazy"
        />
      </div>
      <div className="container cta-section__content">
        <h2 className="cta-section__heading">
          Ready for a Healthier, Happier Smile?
        </h2>
        <p className="cta-section__text">
          It&apos;s time to prioritize your smile and oral health. Take the
          first step toward a brighter, more<br />
          confident you by booking your appointment with Caninus today.
        </p>
        <a href="#cta" className="cta-section__btn">
          Book Your Appointment Today
        </a>
      </div>
    </section>
  );
}
