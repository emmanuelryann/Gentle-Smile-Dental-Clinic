import '../styles/Testimonials.css';

const TESTIMONIALS = [
  {
    text: '"Caninus made my dental journey stress-free and enjoyable. From the friendly staff to the advanced treatments, everything was perfect!"',
    name: 'Siti Aisyah',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80',
    stars: 5,
  },
  {
    text: '"I\'m so grateful for the amazing care I received at Caninus. The team is incredibly professional and kind. My smile has never looked better!"',
    name: 'Ahmad Firdaus',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80',
    stars: 5,
  },
  {
    text: '"I was nervous about my dental procedure, but the team at Caninus made me feel completely at ease with their support. The results are incredible!"',
    name: 'Faisal Rahman',
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
            Hear What Our Happy Patients Have to Say<br />
            About Their Experience with Us
          </h2>
          <p className="testimonials__subtitle">
            Trusted by many, loved by all—discover what makes us special
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
              <span className="testimonials__author-name">{t.name}</span>
              <img
                src={t.avatar}
                alt={t.name}
                className="testimonials__author-img"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
