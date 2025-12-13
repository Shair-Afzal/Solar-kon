import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { HiHomeModern, HiBuildingOffice2, HiBolt, HiTruck } from 'react-icons/hi2';
import solutionsHeroBg from '../assets/images/homesolar.jpg';
import solutionsHeroImg from '../assets/images/solarimg5.jpg';
import residentialImg from '../assets/images/homesolar.jpg';
import commercialImg from '../assets/images/solarimage2.jpg';
import industrialImg from '../assets/images/solarinstallation.jpg';
import agriculturalImg from '../assets/images/solarwind.jpg';

function Solutions() {
  const solutions = [
    {
      icon: <HiHomeModern size={32} />,
      title: 'Residential Solutions',
      description: 'Supported by a skilled team of engineers and technical specialists across Pakistan, committed to lowering electricity costs and delivering top-tier, cutting-edge solutions for Pakistani communities.',
      image: residentialImg,
      features: [
        'Customized system design for your home',
        'Net metering assistance',
        'Long-term warranties',
        'Professional installation',
      ],
    },
    {
      icon: <HiBuildingOffice2 size={32} />,
      title: 'Commercial Solutions',
      description: 'Empower your workplace with efficient solar power systems, effectively replacing high-cost conventional energy.',
      image: commercialImg,
      features: [
        'Reduced operational costs',
        'Scalable systems for businesses',
        'ROI optimization',
        'Maintenance support',
      ],
    },
    {
      icon: <HiBolt size={32} />,
      title: 'Industrial Solutions',
      description: 'From factories to warehouses, high-capacity solar systems designed for heavy-load usage. Delivering stable energy and operational savings without compromising performance.',
      image: industrialImg,
      features: [
        'High-capacity systems',
        'Heavy-load optimization',
        '24/7 power supply',
        'Cost-effective operations',
      ],
    },
    {
      icon: <HiTruck size={32} />,
      title: 'Agricultural Solutions',
      description: 'Transition your farm to dependable, off-grid solar energy ensuring steady power for irrigation, pumping, and operations while slashing expenses. Boost yield and income with clean, cost-effective solutions.',
      image: agriculturalImg,
      features: [
        'Off-grid solutions',
        'Irrigation system power',
        'Pump operation support',
        'Increased farm productivity',
      ],
    },
  ];

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <main className="flex-grow-1">
        {/* Hero Section */}
        <section 
          className="position-relative" 
          data-aos="fade-up"
          style={{
            backgroundImage: `url(${solutionsHeroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '500px',
            display: 'flex',
            alignItems: 'center',
            paddingTop: '6rem',
            paddingBottom: '4rem',
          }}
        >
          <div 
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{
              background: 'linear-gradient(135deg, rgba(20, 83, 45, 0.85) 0%, rgba(22, 101, 52, 0.75) 100%)',
              zIndex: 1,
            }}
          ></div>
          <div className="container-fluid position-relative px-3 px-lg-5" style={{ zIndex: 2 }}>
            <div className="row align-items-center g-2 g-lg-3">
              <div className="col-lg-5 text-center text-lg-start">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <span 
                    className="eyebrow d-inline-block mb-3"
                    style={{ 
                      color: '#D1FAE5', 
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                      padding: '0.5rem 1.2rem',
                      borderRadius: '25px',
                    }}
                  >
                    Our Solutions
                  </span>
                  <h1 className="fw-bold mb-4" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#ffffff', lineHeight: 1.2 }}>
                    Solar Solutions For Every Need
                  </h1>
                  <p className="mb-4" style={{ color: 'rgba(255, 255, 255, 0.95)', fontSize: '1.15rem', lineHeight: 1.8, maxWidth: '600px' }}>
                    From residential homes to large industrial facilities, we provide tailored solar energy solutions that meet your specific requirements and maximize your savings.
                  </p>
                </motion.div>
              </div>
              <div className="col-lg-7">
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="rounded-4 overflow-hidden"
                  style={{
                    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
                  }}
                >
                  <img 
                    src={solutionsHeroImg}
                    alt="Solar Solutions"
                    className="w-100"
                    style={{ height: '320px', objectFit: 'cover' }}
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Sections */}
        {solutions.map((solution, index) => (
          <section
            key={solution.title}
            className={`section-shell ${index % 2 === 0 ? 'bg-white' : ''}`}
            data-aos="fade-up"
          >
            <div className="container">
              <div className={`row align-items-center g-4 g-lg-5 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}>
                <div className="col-lg-6">
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="rounded-4 overflow-hidden gradient-border tilt-float"
                    style={{
                      minHeight: 350,
                      backgroundImage: `url(${solution.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  />
                </div>
                <div className="col-lg-6">
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                  >
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <div className="d-flex align-items-center justify-content-center rounded-circle" style={{ width: 64, height: 64, backgroundColor: '#E1F6E8', color: '#22C55E' }}>
                        {solution.icon}
                      </div>
                      <h2 className="fw-bold mb-0 section-title" style={{ fontSize: '2rem' }}>
                        {solution.title}
                      </h2>
                    </div>
                    <p className="text-muted mb-4" style={{ fontSize: '1.05rem' }}>
                      {solution.description}
                    </p>
                    <div className="row g-3">
                      {solution.features.map((feature, idx) => (
                        <div key={idx} className="col-12 col-md-6">
                          <div className="d-flex align-items-start gap-2">
                            <svg width="20" height="20" fill="#22C55E" viewBox="0 0 20 20" className="mt-1 flex-shrink-0">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-muted small">{feature}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </main>
      <Footer />
    </div>
  );
}

export default Solutions;
