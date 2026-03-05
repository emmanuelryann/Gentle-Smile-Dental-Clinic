import '../styles/Appointments.css';

export default function Appointments() {
  return (
    <section className="appointments fade-in-section" id="appointments">
      <div className="container appointments__inner">
        <div className="appointments__card">
          <div className="appointments__card-content">
            <div className="appointments__icon-sparkle">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L14.645 9.355L22 12L14.645 14.645L12 22L9.355 14.645L2 12L9.355 9.355L12 2Z" fill="currentColor"/>
              </svg>
            </div>
            
            <h2 className="appointments__heading">Book Your<br/>Dental Appointment</h2>
            <p className="appointments__description">
              Schedule a visit with our expert dental team and experience exceptional care
            </p>

            <div className="appointments__features">
              <div className="appointments__feature">
                <div className="appointments__feature-icon">
                  <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                </div>
                <div className="appointments__feature-text">
                  <h4>Flexible Scheduling</h4>
                  <p>Mon-Sat, morning to evening slots available</p>
                </div>
              </div>
              <div className="appointments__feature">
                <div className="appointments__feature-icon">
                  <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div className="appointments__feature-text">
                  <h4>Quick Confirmation</h4>
                  <p>Get booking confirmation in minutes</p>
                </div>
              </div>
            </div>

            <div className="appointments__actions">
              <a href="#book" className="appointments__btn appointments__btn--primary">
                <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                Book Appointment
                <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
              <a href="tel:233303956341" className="appointments__btn appointments__btn--outline">
                <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Call Now
              </a>
            </div>

            <div className="appointments__emergency">
              <span>Dental Emergency? Call our 24/7 hotline at</span>
              <a href="tel:233303956341" className="appointments__hotline">(233) 30 395 6341</a>
            </div>
          </div>
        </div>
        
        <div className="appointments__image">
          <img 
            src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80" 
            alt="Child receiving dental care" 
            loading="lazy" 
          />
        </div>
      </div>
    </section>
  );
}
