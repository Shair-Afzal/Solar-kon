// MissionSection - image + text and key metrics
function MissionSection() {
  const missionImage =
    'https://images.unsplash.com/photo-1509395230301-4b1e6b87a3f5?auto=format&fit=crop&w=1200&q=80';

  const stats = [
    { label: 'Solar Installations', value: '10k+' },
    { label: 'Tons of CO₂ Reduced', value: '100k' },
    { label: 'Up to Savings', value: '70%' },
  ];

  return (
    <section className="py-5 bg-white">
      <div className="container">
        <div className="row align-items-center g-4 g-lg-5">
          {/* Image */}
          <div className="col-lg-6 order-1 order-lg-1">
            <div className="rounded-4 overflow-hidden shadow-sm">
              <div
                style={{
                  height: 280,
                  backgroundImage: `url(${missionImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            </div>
          </div>

          {/* Text + stats */}
          <div className="col-lg-6 order-2 order-lg-2">
            <div className="text-uppercase small fw-semibold mb-2" style={{ color: '#22C55E' }}>
              // About
            </div>
            <h2 className="fw-bold mb-3" style={{ color: '#2D5016', fontSize: '2rem' }}>
              Innovating Solar Solutions For A Sustainable Tomorrow
            </h2>
            <p className="text-muted mb-4">
              Solarkon is a leading provider of solar energy solutions, helping homeowners, businesses,
              and communities transition to clean, renewable power. Our in-house design, engineering,
              and installation teams work together to deliver systems that are efficient, reliable, and
              tailored to every project.
            </p>

            <div className="row g-3">
              {stats.map((item, index) => (
                <div key={index} className="col-4">
                  <div className="text-center text-lg-start">
                    <div className="fw-bold" style={{ color: '#2D5016', fontSize: '1.2rem' }}>
                      {item.value}
                    </div>
                    <div className="text-muted small">{item.label}</div>
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

export default MissionSection;
