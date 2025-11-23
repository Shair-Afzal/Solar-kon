// StepsSection component using Bootstrap
function StepsSection() {
  const steps = [
    {
      number: '1',
      title: 'Consultation',
      description: 'Schedule a free consultation with our experts to assess your energy needs.',
    },
    {
      number: '2',
      title: 'Installation',
      description: 'Our certified technicians will install your solar system efficiently and safely.',
    },
    {
      number: '3',
      title: 'Activation',
      description: 'Start generating your own clean energy and enjoy immediate savings.',
    },
  ];

  return (
    <section style={{ backgroundColor: '#2D5016' }} className="py-5 py-md-5">
      <div className="container">
        <div className="text-center mb-4">
          <div className="text-uppercase small fw-semibold mb-2" style={{ color: '#22C55E' }}>
            How It Works
          </div>
          <h2 className="fw-bold text-white" style={{ fontSize: '2.2rem' }}>
            Switching To Solar In 3 Easy Steps
          </h2>
        </div>

        <div className="row g-4 mb-4">
          {/* Large Image */}
          <div className="col-lg-6">
            <div
              className="rounded-4 mb-3 mb-lg-0"
              style={{
                height: 320,
                backgroundImage:
                  'url(https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=900&q=80)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          </div>

          {/* Two Smaller Images */}
          <div className="col-lg-6 d-flex flex-column gap-3">
            <div
              className="rounded-4"
              style={{
                height: 150,
                backgroundImage:
                  'url(https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?auto=format&fit=crop&w=900&q=80)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <div
              className="rounded-4"
              style={{
                height: 150,
                backgroundImage:
                  'url(https://images.unsplash.com/photo-1438978189732-53f498b5d3c1?auto=format&fit=crop&w=900&q=80)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          </div>
        </div>

        {/* Steps List */}
        <div className="row g-4">
          {steps.map((step, index) => (
            <div key={index} className="col-md-4 text-md-start text-center">
              <div
                className="fw-bold mb-2"
                style={{ color: '#22C55E', fontSize: '3rem', opacity: 0.6 }}
              >
                {step.number}
              </div>
              <h3 className="text-white fw-bold mb-2" style={{ fontSize: '1.25rem' }}>
                {step.title}
              </h3>
              <p className="text-white-50 small mb-0">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StepsSection;

