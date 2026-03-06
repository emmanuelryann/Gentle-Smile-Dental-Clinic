import { useState } from 'react';
import '../styles/FAQ.css';

const FAQS = [
  {
    question: 'Why is visiting the dentist so important?',
    answer: 'Visiting the dentist regularly helps prevent tooth decay, gum disease, and other oral health issues. Early detection ensures problems are treated before they become serious.',
  },
  {
    question: 'My teeth feel fine. Do I still need to see a dentist?',
    answer: "Your teeth may feel fine, but it's still important to see the dentist regularly because problems can exist without you knowing. Your smile's appearance is important, and your dentist can help keep your smile healthy and looking beautiful.",
  },
  {
    question: 'What should I look for when choosing the right dentist?',
    answer: 'Choosing a dentist who "clicks" with you and your family is important, and you may wish to consider several dentists before making your final decision. During your first visit, you should be able to determine whether the dentist is right for you.',
  },
  {
    question: 'How can I take care of my teeth between dental checkups?',
    answer: 'Always remember to brush your teeth at least two times a day, and floss at least once. Use toothpaste that contains fluoride. Avoid foods with a lot of sugar and tobacco. Be sure to schedule your routine checkup every six months.',
  },
  {
    question: 'At what age should I start taking my child to see the dentist?',
    answer: 'The American Academy of Pediatric Dentistry recommends that children first see a dentist as early as six months of age and no later than one year of age. After the first visit, be sure to schedule regular checkups every six months.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq fade-in-section" id="faq">
      <div className="container">
        <div className="faq__header">
          <h2 className="section-heading">Frequently Asked Questions</h2>
          <p className="faq__subtitle">
            Find answers to common questions about dental care and our services.
          </p>
        </div>

        <div className="faq__accordion">
          {FAQS.map((faq, index) => {
            const isActive = openIndex === index;
            return (
              <div
                key={index}
                className={`faq__item${isActive ? ' active' : ''}`}
              >
                <button
                  className="faq__question"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isActive}
                >
                  <span className="faq__question-text">{faq.question}</span>
                  <span className="faq__icon">
                    {isActive ? (
                      <svg viewBox="0 0 24 24">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    ) : (
                      <svg viewBox="0 0 24 24">
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    )}
                  </span>
                </button>
                {isActive && (
                  <div className="faq__answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="faq__footer">
          <p className="faq__footer-text">Have more questions? We&apos;re here to help.</p>
          <a href="#contact" className="faq__btn">
            Contact Us
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
