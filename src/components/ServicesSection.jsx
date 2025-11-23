// ServicesSection component using Bootstrap
import Card from './Card';
import { HiHomeModern, HiBuildingOffice2, HiBolt, HiArrowRight } from 'react-icons/hi2';

function ServicesSection() {
  const services = [
    {
      icon: <HiHomeModern size={24} />,
      title: 'Residential Solar',
      description:
        "Power your home with clean, renewable energy. Our residential solar solutions are tailored to meet your household's specific needs, ensuring maximum efficiency and savings.",
      image:
        'https://images.unsplash.com/photo-1502673530728-f79b4cab31b1?auto=format&fit=crop&w=900&q=80',
    },
    {
      icon: <HiBuildingOffice2 size={24} />,
      title: 'Commercial Solar',
      description:
        'Reduce operational costs and demonstrate your commitment to sustainability with our commercial solar solutions designed for businesses of all sizes.',
      image:
        'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?auto=format&fit=crop&w=900&q=80',
    },
    {
      icon: <HiBolt size={24} />,
      title: 'Industrial Solar',
      description:
        'Scale up your energy production with industrial-grade solar systems that deliver maximum output and reliability for large-scale operations.',
      image:
        'https://images.unsplash.com/photo-1509395283749-8d6f0c7e1d0b?auto=format&fit=crop&w=900&q=80',
    },
  ];

  return (
    <section id="services" className="py-5 bg-white">
      <div className="container">
        <div className="text-center mb-4">
          <div className="text-uppercase small fw-semibold mb-2" style={{ color: '#22C55E' }}>
            Our Services
          </div>
          <h2 className="fw-bold" style={{ color: '#2D5016', fontSize: '2.2rem' }}>
            Our Solar Solutions
          </h2>
        </div>

        <div className="row g-4">
          {services.map((service, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <Card className="h-100 border-0 shadow-sm">
                {/* Image Placeholder */}
                <div
                  className="position-relative"
                  style={{
                    height: 190,
                    backgroundImage: `url(${service.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <div
                    className="position-absolute top-0 start-0 m-3 d-flex align-items-center justify-content-center rounded-circle icon-badge-hover"
                    style={{
                      width: 48,
                      height: 48,
                      backgroundColor: '#22C55E',
                      color: '#2D5016',
                    }}
                  >
                    {service.icon}
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="fw-bold mb-2" style={{ color: '#2D5016', fontSize: '1.1rem' }}>
                    {service.title}
                  </h3>
                  <p className="text-muted small mb-3">{service.description}</p>
                  <a
                    href="#"
                    className="d-inline-flex align-items-center gap-2 text-decoration-none fw-semibold link-underline-hover"
                    style={{ color: '#22C55E' }}
                  >
                    Learn More
                    <HiArrowRight size={16} />
                  </a>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;

