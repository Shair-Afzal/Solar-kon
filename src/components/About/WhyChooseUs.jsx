import galleryImg1 from '../../assets/images/solarimg4.jpg';
import galleryImg2 from '../../assets/images/solarimg5.jpg';
import galleryImg3 from '../../assets/images/solarinstallation.jpg';
import galleryImg4 from '../../assets/images/solarimage2.jpg';

// WhyChooseUs - dark section with image grid and copy + CTA
function WhyChooseUs() {
  const gallery = [
    galleryImg1,
    galleryImg2,
    galleryImg3,
    galleryImg4,
  ];

  return (
    <section className="section-shell section-dark" data-aos="fade-up">
      <div className="container">
        <div className="row g-4 g-lg-5 align-items-center mb-5">
          <div className="col-lg-7 order-2 order-lg-1">
            <div className="row g-3">
              {gallery.map((src, index) => (
                <div key={src} className="col-6">
                  <div className="rounded-4 overflow-hidden surface-card surface-card--muted">
                    <div
                      style={{
                        height: index % 2 === 0 ? 140 : 180,
                        backgroundImage: `url(${src})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-5 order-1 order-lg-2 text-center text-lg-start">
            <div className="text-uppercase small fw-semibold mb-2" style={{ color: '#A7F3D0' }}>
              See The Power Of Solar In Action
            </div>
            <h2 className="fw-bold text-white mb-3" style={{ fontSize: '2rem' }}>
              Real Projects. Real Impact.
            </h2>
            <p className="text-white-50 mb-4">
              From modern homes to large commercial installations, our projects show what is possible
              when smart design meets renewable energy. Every system is engineered for performance,
              reliability, and long-term value.
            </p>
            <ul className="list-unstyled text-white-50 small mb-4">
              <li className="mb-1">• High-efficiency panels and inverters</li>
              <li className="mb-1">• Precision installation by certified experts</li>
              <li className="mb-1">• Monitoring and support after your system goes live</li>
            </ul>
            <button
              className="btn btn-lg rounded-pill px-4 btn-soft-hover"
              style={{ backgroundColor: '#22C55E', color: '#1F2937' }}
            >
              View Our Projects
            </button>
          </div>
        </div>

        <div className="rounded-4 p-4 p-md-5 bg-opacity-90 surface-card surface-card--muted">
          <div className="row align-items-center g-3 g-md-4">
            <div className="col-md-8 text-center text-md-start">
              <h3 className="fw-bold text-white mb-2" style={{ fontSize: '1.6rem' }}>
                Ready To Make The Switch To Solar?
              </h3>
              <p className="text-white-50 mb-0">
                Talk with our energy consultants about a custom solar solution for your home or
                business.
              </p>
            </div>
            <div className="col-md-4 d-flex justify-content-center justify-content-md-end gap-2">
              <button
                className="btn rounded-pill px-4 btn-soft-hover"
                style={{ backgroundColor: '#22C55E', color: '#1F2937' }}
              >
                Get Free Consultation
              </button>
              <button className="btn btn-outline-light rounded-pill px-4 btn-soft-hover">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
