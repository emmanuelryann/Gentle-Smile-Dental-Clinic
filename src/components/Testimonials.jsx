import '../styles/Testimonials.css';

const TESTIMONIALS = [
  {
    text: '"Gentle Smile made my dental journey stress-free and enjoyable. From the friendly staff to the advanced treatments, everything was perfect!"',
    name: 'Mara Quentin',
    avatar:
      'https://images.pexels.com/photos/3621659/pexels-photo-3621659.jpeg',
    stars: 5,
  },
  {
    text: '"I\'m so grateful for the amazing care I received at Gentle Smile. The team is incredibly professional and kind. My smile has never looked better!"',
    name: 'Jefferson lemar',
    avatar:
      'https://img.freepik.com/free-photo/close-up-upset-american-black-person_23-2148749582.jpg?semt=ais_rp_progressive&w=740&q=80',
    stars: 5,
  },
  {
    text: '"I was nervous about my dental procedure, but the team at Gentle Smile made me feel completely at ease with their support. The results are incredible!"',
    name: 'Jessica Aquah',
    avatar:
      'https://images.pexels.com/photos/15766838/pexels-photo-15766838.jpeg?cs=srgb&dl=pexels-brandon-ricketts-450464466-15766838.jpg&fm=jpg',
    stars: 5,
  },
];

function StarIcon() {
  return <span className="testimonials__star">★</span>;
}

export default function Testimonials() {
  return (
    <section className="testimonials fade-in-section" id="testimonials">
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
