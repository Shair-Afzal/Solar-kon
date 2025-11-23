// BenefitsSection component using Bootstrap
import { HiCurrencyDollar, HiArrowTrendingUp, HiGlobeAlt, HiHomeModern } from 'react-icons/hi2';

function BenefitsSection() {
  const benefits = [
    {
      icon: <HiCurrencyDollar size={24} />,
      title: 'Significant Cost Savings',
      description: 'Reduce your electricity bills by up to 70% with solar power.',
    },
    {
      icon: <HiArrowTrendingUp size={24} />,
      title: 'Energy Independence',
      description: 'Generate your own power and reduce reliance on the grid.',
    },
    {
      icon: <HiGlobeAlt size={24} />,
      title: 'Sustainable Future',
      description: 'Reduce your carbon footprint and contribute to a greener planet.',
    },
    {
      icon: (
        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      ),
      title: 'Increase Home Value',
      description: "Boost your property's market value with a solar energy system.",
    },
  ];

  return (
    <section id="about" style={{ backgroundColor: '#2D5016' }} className="py-5 py-md-5">
      <div className="container">
        <div className="row align-items-center g-4 g-lg-5">
          {/* Image Column */}
          <div className="col-lg-6 order-1 order-lg-1">
            <div
              className="rounded-4 mb-4 mb-lg-0 d-flex align-items-center justify-content-center shadow-sm"
              style={{
                height: 300,
                backgroundImage:
                  'url(https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1200&q=80)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <span className="text-white-50 fs-5 d-lg-none">Solar Panels Field</span>
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className="col-lg-6 order-2 order-lg-2">
            <div className="text-uppercase small fw-semibold mb-2" style={{ color: '#22C55E' }}>
              // Benefits
            </div>
            <h2 className="fw-bold text-white mb-3" style={{ fontSize: '2.2rem' }}>
              The Benefits Of Going Solar With Solvix
            </h2>
            <p className="text-white-50 mb-0">
              Unlock the power of solar energy and enjoy long-term advantages.
            </p>
          </div>

          {/* Benefits List */}
          <div className="col-lg-12 order-3">
            {/* Benefits List */}
            <div className="row g-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="col-md-6 d-flex">
                  <div
                    className="flex-shrink-0 d-flex align-items-center justify-content-center rounded-circle me-3 icon-badge-hover"
                    style={{
                      width: 48,
                      height: 48,
                      backgroundColor: '#22C55E',
                      color: '#2D5016',
                    }}
                  >
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-white fw-bold mb-1" style={{ fontSize: '1rem' }}>
                      {benefit.title}
                    </h3>
                    <p className="text-white-50 small mb-0">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BenefitsSection;

