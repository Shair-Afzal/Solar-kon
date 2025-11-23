// ProfileSettings - bottom CTA inspired by projects banner
function ProfileSettings() {
  const backgroundImage =
    'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1400&q=80';

  return (
    <section className="py-5" style={{ backgroundColor: '#C7EDDA' }}>
      <div className="container">
        <div className="rounded-4 overflow-hidden shadow-sm position-relative">
          <div
            style={{
              minHeight: 260,
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'brightness(0.6)',
            }}
          />
          <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
            <div className="text-center text-white px-3 px-md-5" style={{ maxWidth: 640 }}>
              <p className="text-uppercase small fw-semibold mb-2" style={{ color: '#BBF7D0' }}>
                Inspired By Our Projects?
              </p>
              <h2 className="fw-bold mb-3" style={{ fontSize: '2rem' }}>
                Ready To Bring Solar To Your Space?
              </h2>
              <p className="mb-4 text-white-75">
                Work with our team to design a solar solution tailored to your property, budget, and
                long-term goals.
              </p>
              <button
                className="btn rounded-pill px-4 btn-soft-hover"
                style={{ backgroundColor: '#22C55E', color: '#1F2937' }}
              >
                Book A Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfileSettings;
