// FAQSection component using Bootstrap
import { useState } from 'react';

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What are the benefits of solar energy?',
      answer:
        "Solar energy reduces electricity bills, lowers your carbon footprint, increases home value, and provides energy independence. It's a sustainable and cost-effective solution for your energy needs.",
    },
    {
      question: 'How long does solar panel installation take?',
      answer:
        'The installation timeline varies depending on the system size and complexity, but typically ranges from 1 to 3 days after permits are approved.',
    },
    {
      question: 'Is solar energy reliable?',
      answer:
        'Yes, solar energy systems are highly reliable. With proper maintenance, they can last for decades, providing consistent power. Battery storage solutions can also ensure power during outages.',
    },
    {
      question: 'What is the cost of solar panel installation?',
      answer:
        'The cost depends on various factors like system size, panel type, and installation complexity. We offer customized quotes after a free consultation to provide an accurate estimate.',
    },
  ];

  return (
    <section className="py-5 bg-white">
      <div className="container">
        <div className="text-center mb-4">
          <div className="text-uppercase small fw-semibold mb-2" style={{ color: '#22C55E' }}>
            FAQ
          </div>
          <h2 className="fw-bold" style={{ color: '#2D5016', fontSize: '2.2rem' }}>
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mx-auto" style={{ maxWidth: 720 }}>
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-3 mb-3">
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-100 border-0 bg-white text-start px-3 px-md-4 py-3 d-flex align-items-center justify-content-between"
              >
                <span className="fw-semibold" style={{ color: '#2D5016' }}>
                  {faq.question}
                </span>
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="#22C55E"
                  viewBox="0 0 24 24"
                  style={{
                    transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.2s',
                  }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-3 px-md-4 pb-3 bg-light">
                  <p className="text-muted small mb-0">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;

