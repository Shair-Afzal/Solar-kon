import { useState, useEffect } from 'react';
import { HiArrowRight } from 'react-icons/hi2';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import heroImage from '../assets/images/solarimg-1.jpg';
import financeImg1 from '../assets/images/financeimg.jpg';
import financeImg2 from '../assets/images/financeimg2.jpg';
import financeImg3 from '../assets/images/financeimg3.jpg';

function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const sliderImages = [
    financeImg1,
    financeImg2,
    financeImg3,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [sliderImages.length]);

  return (
    <section 
      id='home' 
      className='position-relative' 
      data-aos='fade-up'
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        marginTop: 0,
        paddingTop: '6rem',
        paddingBottom: '4rem',
      }}
    >
      {/* Overlay for better text readability */}
      <div 
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          background: 'linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 100%)',
          zIndex: 1,
        }}
      ></div>
      
      <div className='container-fluid position-relative px-3 px-lg-5' style={{ zIndex: 2 }}>
        <div className='row align-items-center g-2 g-lg-3'>
          <div className='col-lg-5 text-center text-lg-start'>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='mb-3'
            >
              <span className='eyebrow hero-badge' style={{ backgroundColor: 'rgba(20, 83, 45, 0.3)', color: '#D1FAE5' }}>
                Nature Produces & We Deliver Solar System
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.1 }}
              className='fw-bold lh-sm mb-3 section-title'
              style={{ fontSize: 'clamp(2.5rem, 4vw, 3.4rem)', color: '#ffffff' }}
            >
              Powering a Brighter, Greener Pakistan
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className='mb-4'
              style={{ color: '#E5F2E0', fontSize: '1.1rem', lineHeight: 1.8 }}
            >
              Solarkon Private Limited is a premier solar energy solutions provider in Pakistan, known for delivering high-performance systems tailored to residential, commercial, industrial, and agricultural needs.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='mb-4'
            >
              <div className='d-inline-flex align-items-center gap-2 p-3 rounded-3' style={{ backgroundColor: 'rgba(20, 83, 45, 0.3)', border: '1px solid rgba(22, 101, 52, 0.4)' }}>
                <span className='fw-bold' style={{ color: '#D1FAE5', fontSize: '1.2rem' }}>150MW</span>
                <span style={{ color: '#E5F2E0' }}>Pakistan's Largest Solar Project</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className='d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start'
            >
              <button 
                className='btn btn-lg btn-pill d-inline-flex align-items-center justify-content-center gap-2 btn-soft-hover'
                style={{ background: 'linear-gradient(135deg, #14532d 0%, #166534 50%, #15803d 100%)', color: '#ffffff', fontWeight: 600, border: 'none' }}
              >
                Get Free Consultation
                <HiArrowRight size={20} />
              </button>
            </motion.div>
          </div>

          <div className='col-lg-7'>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
            >
              <div 
                className='surface-card rounded-4 overflow-hidden position-relative' 
                style={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                  backdropFilter: 'blur(10px)',
                  border: '3px solid #14532d',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.1)';
                }}
              >
                {/* Image Slider */}
                <div className='position-relative' style={{ height: '320px' }}>
                  {sliderImages.map((img, index) => (
                    <div
                      key={index}
                      className='position-absolute top-0 start-0 w-100 h-100'
                      style={{
                        backgroundImage: `url(${img})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        opacity: currentSlide === index ? 1 : 0,
                        transition: 'opacity 0.8s ease-in-out',
                        zIndex: currentSlide === index ? 1 : 0,
                      }}
                    />
                  ))}
                  
                  {/* Button on Right Side */}
                  <div className='position-absolute bottom-0 end-0 p-3' style={{ zIndex: 3 }}>
                    <button
                      onClick={() => navigate('/financing')}
                      className='btn btn-pill d-inline-flex align-items-center gap-2'
                      style={{
                        background: 'linear-gradient(135deg, #14532d 0%, #166534 50%, #15803d 100%)',
                        color: '#ffffff',
                        fontWeight: 600,
                        border: 'none',
                        padding: '0.6rem 1.2rem',
                        fontSize: '0.95rem',
                        boxShadow: '0 4px 12px rgba(20, 83, 45, 0.4)',
                        transition: 'all 0.3s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.05)';
                        e.currentTarget.style.boxShadow = '0 6px 16px rgba(20, 83, 45, 0.6)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(20, 83, 45, 0.4)';
                      }}
                    >
                      Financing Options
                      <HiArrowRight size={18} />
                    </button>
                  </div>

                  {/* Slider Indicators */}
                  <div className='position-absolute bottom-0 start-50 translate-middle-x d-flex gap-2 mb-3' style={{ zIndex: 2 }}>
                    {sliderImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentSlide(index);
                        }}
                        className='border-0 rounded-circle'
                        style={{
                          width: '10px',
                          height: '10px',
                          backgroundColor: currentSlide === index ? '#166534' : 'rgba(255,255,255,0.6)',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                          if (currentSlide !== index) {
                            e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.8)';
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (currentSlide !== index) {
                            e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.6)';
                          }
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
