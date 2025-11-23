// CTASection component using Bootstrap
function CTASection() {
  return (
    <section
      className="py-5"
      style={{
        backgroundColor: '#D1FAE5',
      }}
    >
      <div className="container">
        <div className="text-center mx-auto" style={{ maxWidth: 720 }}>
          <div className="text-uppercase small fw-semibold mb-2" style={{ color: '#2D5016' }}>
            Get Started
          </div>
          <h2 className="fw-bold mb-3" style={{ color: '#2D5016', fontSize: '2.2rem' }}>
            Get A Free Quote Today!
          </h2>
          <p className="text-muted mb-4">
            Ready to switch to solar? Contact us today for a free, no-obligation quote. Our team will
            help you find the perfect solar solution for your home or business.
          </p>

          {/* Email Form */}
          <form className="d-flex flex-column flex-sm-row justify-content-center gap-3 mx-auto" style={{ maxWidth: 480 }}>
            <input
              type="email"
              className="form-control rounded-pill px-3"
              placeholder="Enter your email"
            />
            <button
              type="submit"
              className="btn rounded-pill px-4 btn-soft-hover"
              style={{ backgroundColor: '#2D5016', color: '#ffffff' }}
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default CTASection;

