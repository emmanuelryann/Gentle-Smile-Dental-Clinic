import '../styles/CTA.css';

export default function CTA() {
  return (
    <section className="cta-section" id="cta">
      <div className="container">
        <h2 className="cta-section__heading">
          Ready for a Healthier, Happier Smile?
        </h2>
        <p className="cta-section__text">
          Take the first step towards the perfect smile. Book your appointment
          with Caninus today and experience world-class dental care delivered
          with warmth and expertise.
        </p>
        <a href="#cta" className="cta-section__btn">
          Book Your Appointment Today
        </a>
      </div>
    </section>
  );
}
