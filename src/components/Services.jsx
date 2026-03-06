import '../styles/Services.css';

const SERVICES = [
  {
    title: 'Professional Cleaning',
    text: 'Experience a fresher, healthier smile with our thorough professional cleaning services',
    image:
      'https://images.pexels.com/photos/6812544/pexels-photo-6812544.jpeg',
  },
  {
    title: 'Teeth Whitening',
    text: 'Achieve a bright, radiant smile with our professional teeth whitening treatments',
    image:
      'https://images.pexels.com/photos/7789705/pexels-photo-7789705.jpeg',
  },
  {
    title: 'Braces',
    text: 'Straighten your teeth and perfect your smile with our advanced customized braces',
    image:
      'https://images.pexels.com/photos/6311668/pexels-photo-6311668.jpeg',
  },
  {
    title: 'Porcelain',
    text: 'Enhance your smile with our premium and natural-looking porcelain treatments',
    image:
      'https://images.pexels.com/photos/6812502/pexels-photo-6812502.jpeg',
  },
];

export default function Services() {
  return (
    <section className="services fade-in-section" id="services">
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
                At Gental Smile, we proudly offer a wide range of dental services
                tailored to meet your needs. Our experienced team combines
                advanced technology and personalized care to ensure the best
                possible results for your smile and oral health.
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
