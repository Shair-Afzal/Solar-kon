// HeroSection component using Bootstrap with responsive image layout
import { HiPlay, HiArrowRight } from 'react-icons/hi2';
import heroImage from "../assets/images/solarimg-1.jpg";

function HeroSection() {
  // const heroImage =
  //   require("../assets/images/solarimg-1.jpg");
  const heroVideoThumb =
    'https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=800&q=80';

  return (
    <section id="home" className="py-5 bg-white">
      <div className="container">
        <div className="row align-items-center g-4 g-lg-5">
          {/* Right Column - Image with Embedded Card */}
          <div className="col-lg-6 order-1 order-lg-2">
            <div
              className="position-relative rounded-4 overflow-hidden shadow-sm"
              style={{
                minHeight: 360,
                backgroundImage: `url(${heroImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* Embedded Video Card */}
              <div className="position-absolute bottom-0 start-0 end-0 px-3 px-md-4 pb-3 pb-md-4">
                <div className="bg-white rounded-4 shadow p-3 p-md-4">
                  <div
                    className="rounded-3 position-relative mb-3"
                    style={{
                      height: 140,
                      backgroundImage: `url(${heroVideoThumb})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  >
                    {/* Play Button Overlay */}
                    <div className="position-absolute top-50 start-50 translate-middle">
                      <div
                        className="d-flex align-items-center justify-content-center rounded-circle shadow icon-badge-hover"
                        style={{ width: 64, height: 64, backgroundColor: '#ffffff' }}
                      >
                        <HiPlay size={32} color="#22C55E" style={{ marginLeft: 4 }} />
                      </div>
                    </div>
                  </div>
                  <p className="mb-0 text-muted small">
                    Unlock the power of solar energy and enjoy long-term advantages.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Left Column - Text Content */}
          <div className="col-lg-6 order-2 order-lg-1 text-center text-lg-start">
            {/* Tagline */}
            <div className="mb-3">
              <span
                className="px-4 py-2 rounded-pill small fw-semibold"
                style={{ backgroundColor: '#D1FAE5', color: '#374151' }}
              >
                New Energy For Our System
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="fw-bold lh-sm mb-3" style={{ fontSize: '2.7rem' }}>
              <span style={{ color: '#111827' }}>Clean Renewable</span>
              <br />
              <span style={{ color: '#22C55E' }}>Limitless Energy</span>
            </h1>

            {/* Description */}
            <p className="text-muted mb-4">
              Switch to solar with Solvix and experience cost savings, energy independence, and a
              greener future with a system tailored to your needs.
            </p>

            {/* CTA Button */}
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start">
              <button
                className="btn btn-lg rounded-pill d-inline-flex align-items-center justify-content-center gap-2 btn-soft-hover"
                style={{ backgroundColor: '#2D5016', color: '#ffffff', minWidth: 220 }}
              >
                Get Free Consultation
                <HiArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

