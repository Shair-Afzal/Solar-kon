import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import projectsHeroBg from '../assets/images/solarinstallation.jpg';
import projectsHeroImg from '../assets/images/solarimg4.jpg';

function Projects() {
  const [filter, setFilter] = useState('All');

  // This will be fetched from API later
  const projects = [
    { id: 1, name: 'Bashir Sons Steel Industry', capacity: '5 MWp', sector: 'Industrial', status: 'Completed', location: 'Kala Shah Kaku' },
    { id: 2, name: 'Gourmet Bakeries', capacity: '3.5 MWp', sector: 'Commercial', status: 'Completed', location: 'Multiple Branches' },
    { id: 3, name: 'Hajvery Foods', capacity: '1.2 MWp', sector: 'Industrial', status: 'Completed', location: 'Daska, Sialkot' },
    { id: 4, name: 'Hajvery Beverages', capacity: '1 MWp', sector: 'Industrial', status: 'Completed', location: 'Kala Shah Kaku' },
    { id: 5, name: 'Gourmet Oil & Ghee Mills', capacity: '1.075 MWp', sector: 'Industrial', status: 'Completed', location: 'Gujranwala' },
    { id: 6, name: 'Lahore Grammar School', capacity: '500 KWp', sector: 'Commercial', status: 'Completed', location: 'Multiple Branches' },
    { id: 7, name: 'Bashir Sons Steel Industry', capacity: '10 MWp', sector: 'Industrial', status: 'Ongoing', location: 'Kala Shah Kaku' },
    { id: 8, name: 'Five Star Steel Industry', capacity: '5 MWp', sector: 'Industrial', status: 'Ongoing', location: 'Lahore' },
    { id: 9, name: 'Al Fateh Steel Mill', capacity: '6 MWp', sector: 'Industrial', status: 'Ongoing', location: 'Karachi' },
  ];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.status === filter);

  const filters = ['All', 'Completed', 'Ongoing'];

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <main className="flex-grow-1">
        {/* Hero Section */}
        <section 
          className="position-relative" 
          data-aos="fade-up"
          style={{
            backgroundImage: `url(${projectsHeroBg})`,
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
                    Our Portfolio
                  </span>
                  <h1 className="fw-bold mb-4" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#ffffff', lineHeight: 1.2 }}>
                    Our Projects
                  </h1>
                  <p className="mb-4" style={{ color: 'rgba(255, 255, 255, 0.95)', fontSize: '1.15rem', lineHeight: 1.8, maxWidth: '600px' }}>
                    700+ Solar Installations across Pakistan with 150MW+ Total Capacity. Explore our completed and ongoing projects.
                  </p>
                  <div className="d-flex flex-wrap gap-3 mt-4">
                    <div className="text-white">
                      <div className="fw-bold" style={{ fontSize: '2rem', color: '#D1FAE5' }}>700+</div>
                      <div className="small">Installations</div>
                    </div>
                    <div className="text-white">
                      <div className="fw-bold" style={{ fontSize: '2rem', color: '#D1FAE5' }}>150MW+</div>
                      <div className="small">Total Capacity</div>
                    </div>
                  </div>
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
                    src={projectsHeroImg}
                    alt="Solar Projects"
                    className="w-100"
                    style={{ height: '320px', objectFit: 'cover' }}
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Bar */}
        <section className="section-shell" data-aos="fade-up">
          <div className="container">
            <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`btn btn-pill px-4 ${
                    filter === f
                      ? 'text-white'
                      : 'btn-outline-secondary'
                  }`}
                  style={{
                    backgroundColor: filter === f ? '#2D5016' : 'transparent',
                    borderColor: filter === f ? '#2D5016' : '#e2e8f0',
                    color: filter === f ? '#ffffff' : '#64748b',
                    fontWeight: 600,
                  }}
                >
                  {f}
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="row g-4">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="col-12 col-md-6 col-lg-4"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="surface-card h-100 p-4 rounded-4">
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <span
                        className="badge rounded-pill px-3 py-2"
                        style={{
                          backgroundColor: project.status === 'Completed' ? '#D1FAE5' : '#FEF3C7',
                          color: project.status === 'Completed' ? '#166534' : '#92400E',
                          fontWeight: 600,
                        }}
                      >
                        {project.status}
                      </span>
                      <span className="text-muted small">{project.sector}</span>
                    </div>
                    <h3 className="fw-bold mb-2" style={{ color: '#2D5016', fontSize: '1.2rem' }}>
                      {project.name}
                    </h3>
                    <p className="text-muted small mb-3">{project.location}</p>
                    <div className="d-flex align-items-center justify-content-between">
                      <div>
                        <p className="fw-bold mb-0" style={{ color: '#22C55E', fontSize: '1.5rem' }}>
                          {project.capacity}
                        </p>
                        <p className="text-muted small mb-0">Capacity</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Projects;
