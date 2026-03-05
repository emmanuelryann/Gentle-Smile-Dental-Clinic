import '../styles/WhyChooseUs.css';

const FEATURES = [
  {
    title: 'Experienced and Caring Dentists',
    text: 'Our team of skilled dentists is not only highly trained but also deeply committed to providing compassionate care tailored to each patient\'s needs.',
    variant: 'dark',
  },
  {
    title: 'Advanced Dental Technology',
    text: 'We use cutting-edge dental technology to ensure accurate diagnoses and effective treatments, giving you the best care possible.',
    variant: 'light',
  },
  {
    title: 'Comfortable and Safe Environment',
    text: 'Your comfort and safety are our top priorities. We create a relaxing atmosphere where you can feel at ease throughout your visit.',
    variant: 'light',
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
              <span className="why-choose__image-label">Why Caninus?</span>
              <h2 className="why-choose__image-title">
                What Makes Caninus Your Trusted Partner in Dental Care
                Excellence
              </h2>
              <p className="why-choose__image-text">
                At Caninus, we&apos;re committed to high-quality dental care
                that prioritizes your comfort and confidence. Here&apos;s why so
                many trust us.
              </p>
            </div>
          </div>

          {/* Right feature cards */}
          <div className="why-choose__features">
            {FEATURES.map((feature) => (
              <div
                className={`why-choose__card why-choose__card--${feature.variant}`}
                key={feature.title}
              >
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
