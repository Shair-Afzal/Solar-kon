import { motion } from 'framer-motion';
import aboutHeroBg from '../../assets/images/storyimg.jpg';
import aboutHeroImg from '../../assets/images/storyimg2.jpg';

// AboutHero section - hero banner with headline and top image
function AboutHero() {
  return (
    <section 
      className="position-relative" 
      data-aos="fade-up"
      style={{
        backgroundImage: `url(${aboutHeroBg})`,
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
                About Us
              </span>
              <h1 className="fw-bold mb-4" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#ffffff', lineHeight: 1.2 }}>
                Leading Solar Energy Provider in Pakistan
              </h1>
              <p className="mb-4" style={{ color: 'rgba(255, 255, 255, 0.95)', fontSize: '1.15rem', lineHeight: 1.8, maxWidth: '600px' }}>
                Solarkon Private Limited is the leading solar energy provider in Pakistan, offering top-of-the-line products and services that can be tailored to meet your individual needs. Our experienced team of professionals is dedicated to delivering the highest quality.
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
                <div className="text-white">
                  <div className="fw-bold" style={{ fontSize: '2rem', color: '#D1FAE5' }}>10+</div>
                  <div className="small">Years Experience</div>
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
                src={aboutHeroImg}
                alt="About Solarkon"
                className="w-100"
                style={{ height: '320px', objectFit: 'cover' }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutHero;
