import '../styles/Testimonials.css';

const TESTIMONIALS = [
  {
    text: 'Caninus is great. I was scared about dentists, but the team made me feel comfortable. The results were amazing and I finally have the smile I always wanted!',
    name: 'Sarah M.',
    role: 'Regular Patient',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80',
    stars: 5,
  },
  {
    text: 'The expertise shown by the dentists at Caninus is unmatched. They explained everything clearly, used advanced tools, and my treatment was painless.',
    name: 'Ahmed Wahab',
    role: 'Implant Patient',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80',
    stars: 5,
  },
  {
    text: 'Professional, friendly, and thorough. The whitening treatment exceeded my expectations. I recommend Caninus to everyone looking for quality dental care.',
    name: 'Lisa Chen',
    role: 'Whitening Patient',
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80',
    stars: 5,
  },
];

function StarIcon() {
  return <span className="testimonials__star">★</span>;
}

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="testimonials__header">
          <span className="section-label">What Our Patients Say</span>
          <h2 className="section-heading">
            Hear What Our Happy Patients Have to Say About Their Experience
            with Us
          </h2>
          <p className="testimonials__subtitle">
            Trusted by 1000+ satisfied patients for their dental care needs
          </p>
        </div>

        <div className="testimonials__grid">
          {TESTIMONIALS.map((t) => (
            <div className="testimonials__card" key={t.name}>
              <div className="testimonials__stars">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>
              <p className="testimonials__text">{t.text}</p>
              <div className="testimonials__author">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="testimonials__author-img"
                  loading="lazy"
                />
                <div className="testimonials__author-info">
                  <span className="testimonials__author-name">{t.name}</span>
                  <span className="testimonials__author-role">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
