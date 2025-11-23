// StatisticsSection component using Bootstrap
function StatisticsSection() {
  const stats = [
    { number: '10k+', label: 'Solar Installations' },
    { number: '100k', label: 'Tons of CO2 Reduced' },
    { number: '70%', label: 'Up to Savings' },
  ];

  return (
    <section className="py-4 py-md-5 bg-white">
      <div className="container">
        <div className="row g-3 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="col-12 col-md-4">
              <div
                className="p-4 rounded-4 h-100"
                style={{
                  backgroundColor: index === 1 ? '#e8f5e9' : '#f5fbe9',
                  border: '1px solid rgba(34,197,94,0.15)',
                }}
              >
                <div className="fw-bold" style={{ color: '#22C55E', fontSize: '2.2rem' }}>
                  {stat.number}
                </div>
                <div className="text-muted small text-uppercase">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatisticsSection;

