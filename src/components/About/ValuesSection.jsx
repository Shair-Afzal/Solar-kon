// ValuesSection - cards for company values
function ValuesSection() {
  const values = [
    {
      title: 'Customer-First Approach',
      description: 'We design every system around your goals, budget, and long-term plans.',
    },
    {
      title: 'Sustainable Design',
      description: 'Our solutions reduce environmental impact while maximizing performance.',
    },
    {
      title: 'Transparent Process',
      description: 'From proposal to installation, we keep you informed at every step.',
    },
  ];

  return (
    <section className="py-5 bg-white">
      <div className="container">
        <div className="mb-4 text-center text-md-start">
          <div className="text-uppercase small fw-semibold mb-2" style={{ color: '#22C55E' }}>
            Our Values
          </div>
          <h2 className="fw-bold mb-2" style={{ color: '#2D5016', fontSize: '2rem' }}>
            Our Values At Solarkon Solar Panel Solutions
          </h2>
          <p className="text-muted mb-0" style={{ maxWidth: 620 }}>
            We believe solar should be simple, accessible, and built to last. Our team is committed to
            delivering systems that perform beautifully for years to come.
          </p>
        </div>

        <div className="row g-3 g-md-4">
          {values.map((value, index) => (
            <div key={index} className="col-md-4">
              <div className="h-100 p-3 p-md-4 rounded-4 shadow-sm card-hover">
                <h3 className="fw-semibold mb-2" style={{ fontSize: '1rem', color: '#111827' }}>
                  {value.title}
                </h3>
                <p className="text-muted small mb-0">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ValuesSection;
