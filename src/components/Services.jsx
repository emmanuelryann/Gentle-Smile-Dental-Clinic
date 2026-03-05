import '../styles/Services.css';

const SERVICES = [
  {
    title: 'Dental Implants',
    text: 'Replace missing or damaged teeth with our advanced dental implant solutions, delivering a natural and lasting smile.',
    image:
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Teeth Whitening',
    text: 'Achieve a brighter, more radiant smile with our effective and professional teeth whitening treatments.',
    image:
      'https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Orthodontics',
    text: 'Straighten your teeth and perfect your bite with customized orthodontic treatments for all ages.',
    image:
      'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Restorative Dentistry',
    text: 'Repair and restore damaged or decaying teeth with our comprehensive restorative dental services.',
    image:
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=80',
  },
];

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services__header">
          <div className="services__header-top">
            <div className="services__header-left">
              <span className="section-label">Our Services</span>
              <h2 className="section-heading">
                Discover Our Expertise in Comprehensive Dental Care for Your
                Perfect Smile
              </h2>
            </div>
            <div className="services__header-right">
              <p className="section-description">
                At Caninus, we provide a full range of dental services, from
                preventive care and treatments to advanced cosmetic and
                restorative procedures. Our experienced dental professionals are
                dedicated to delivering the highest quality care with compassion
                and precision, ensuring a healthy and radiant smile for every
                patient.
              </p>
            </div>
          </div>
        </div>

        <div className="services__grid">
          {SERVICES.map((svc) => (
            <div className="services__card" key={svc.title}>
              <div className="services__card-img">
                <img src={svc.image} alt={svc.title} loading="lazy" />
              </div>
              <div className="services__card-body">
                <h3 className="services__card-title">{svc.title}</h3>
                <p className="services__card-text">{svc.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="services__footer">
          <a href="#services" className="services__btn">
            See More
          </a>
        </div>
      </div>
    </section>
  );
}
