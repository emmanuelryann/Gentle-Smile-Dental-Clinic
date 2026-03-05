import '../styles/Process.css';

const STEPS = [
  {
    number: '1',
    title: 'Schedule an Appointment',
    text: 'Book your visit online or by phone. Choose a time that works best for you, and our friendly staff will confirm your appointment.',
  },
  {
    number: '2',
    title: 'Get a Comprehensive Exam',
    text: 'Our dentists will perform a thorough examination, discuss your dental health goals, and create a personalized treatment plan.',
  },
  {
    number: '3',
    title: 'Begin Your Treatment',
    text: 'Receive expert dental care tailored to your needs in a comfortable and safe environment to achieve your perfect smile.',
  },
];

export default function Process() {
  return (
    <section className="process" id="process">
      <div className="container">
        <div className="process__inner">
          <div className="process__content">
            <span className="section-label">Simple Process</span>
            <h2 className="section-heading">
              A Simple Process for Exceptional Dental Care at Caninus
            </h2>
            <p className="process__description">
              At Caninus, we make your dental care journey effortless. Here is
              how our straightforward process works to give you a beautiful,
              healthy smile.
            </p>

            <div className="process__steps">
              {STEPS.map((step) => (
                <div className="process__step" key={step.number}>
                  <div className="process__step-number">
                    <span>{step.number}</span>
                  </div>
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
