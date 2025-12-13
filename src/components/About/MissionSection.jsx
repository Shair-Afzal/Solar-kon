import missionImg from '../../assets/images/teamwork.jpg';

// MissionSection - image + text and key metrics
function MissionSection() {
  const missionImage = missionImg;

  const stats = [
    { label: 'Solar Installations', value: '10k+' },
    { label: 'Tons of CO₂ Reduced', value: '100k' },
    { label: 'Up to Savings', value: '70%' },
  ];

  return (
    <section className="section-shell bg-white" data-aos="fade-up">
      <div className="container">
        <div className="row align-items-center g-4 g-lg-5">
          <div className="col-lg-6">
            <div
              className="rounded-4 overflow-hidden gradient-border tilt-float"
              style={{
                minHeight: 280,
                backgroundImage: `url(${missionImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          </div>

          <div className="col-lg-6">
            <div className="text-uppercase small fw-semibold mb-2" style={{ color: '#22C55E' }}>
              Our Story
            </div>
            <h2 className="fw-bold mb-3 section-title" style={{ fontSize: '2rem' }}>
              Leading Solar Energy Provider in Pakistan
            </h2>
            <p className="text-muted mb-4 section-subtitle">
              Solarkon Private Limited is the leading solar energy provider in Pakistan, offering top-of-the-line products and services that can be tailored to meet your individual needs. Our experienced team of professionals is dedicated to delivering the highest quality.
            </p>

            <div className="row g-3">
              {stats.map((item) => (
                <div key={item.label} className="col-12 col-sm-4">
                  <div className="stat-card text-center text-lg-start" style={{ wordBreak: 'break-word', overflowWrap: 'break-word' }}>
                    <div className="fw-bold" style={{ color: '#2D5016', fontSize: 'clamp(1rem, 3vw, 1.2rem)' }}>
                      {item.value}
                    </div>
                    <div className="text-muted small text-uppercase" style={{ fontSize: 'clamp(0.7rem, 2vw, 0.875rem)', lineHeight: 1.4 }}>
                      {item.label}
                    </div>
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
