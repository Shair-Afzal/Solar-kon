import { HiPlay, HiArrowRight } from 'react-icons/hi2';
import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import heroImage from '../assets/images/solarimg-1.jpg';

// Counter Hook for animated numbers
function useCounter(targetValue, duration = 1500, startImmediately = false) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const hasAnimated = useRef(false);

  useEffect(() => {
    const shouldStart = startImmediately || (inView && !hasAnimated.current);
    
    if (shouldStart && !hasAnimated.current) {
      hasAnimated.current = true;
      let startTime = null;
      const startValue = 0;
      const endValue = targetValue;

      const animate = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const current = Math.floor(startValue + (endValue - startValue) * easeOutQuart);
        
        setCount(current);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(endValue);
        }
      };

      // Small delay for hero section to ensure smooth start
      setTimeout(() => {
        requestAnimationFrame(animate);
      }, startImmediately ? 300 : 0);
    }
  }, [inView, targetValue, duration, startImmediately]);

  return [count, ref];
}

function HeroSection() {
  const heroVideoThumb =
    'https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=800&q=80';

  const stats = [
    { label: 'Solar Installations', value: '10k+', target: 10000 },
    { label: 'Tons of CO2 Reduced', value: '100k', target: 100000 },
    { label: 'Up to Savings', value: '70%', target: 70 },
  ];

  const [installationsCount, installationsRef] = useCounter(10000, 1500, true);
  const [co2Count, co2Ref] = useCounter(100000, 1800, true);
  const [savingsCount, savingsRef] = useCounter(70, 1200, true);

  // Format numbers for display
  const formatNumber = (num, type) => {
    if (type === 'k+') {
      return (num / 1000).toFixed(0) + 'k+';
    } else if (type === 'k') {
      return (num / 1000).toFixed(0) + 'k';
    } else if (type === '%') {
      return num + '%';
    }
    return num.toLocaleString();
  };

  return (
    <section id='home' className='section-shell position-relative' data-aos='fade-up'>
      <div className='container'>
        <div className='row align-items-center g-4 g-lg-5'>
          <div className='col-lg-6 text-center text-lg-start order-2 order-lg-1'>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='mb-3'
            >
              <span className='eyebrow hero-badge'>New Energy For Our System</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.1 }}
              className='fw-bold lh-sm mb-3 section-title'
              style={{ fontSize: 'clamp(2.5rem, 4vw, 3.4rem)' }}
            >
              <span className='d-block text-dark'>Clean Renewable</span>
              <span style={{ color: '#22C55E' }}>Limitless Energy</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className='text-muted mb-4'
            >
              Switch to solar with SOLARKON and experience cost savings, energy independence, and a
              greener future with a system tailored to your needs.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start'
            >
              <button className='btn btn-lg btn-pill btn-primary d-inline-flex align-items-center justify-content-center gap-2 btn-soft-hover'>
                Get Free Consultation
                <HiArrowRight size={20} />
              </button>
            </motion.div>

            <div className='d-flex flex-wrap gap-3 mt-4 justify-content-center justify-content-lg-start'>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className='stat-card text-start'
                ref={installationsRef}
              >
                <div className='fw-bold' style={{ fontSize: '1.8rem', color: '#22C55E' }}>
                  {formatNumber(installationsCount, 'k+')}
                </div>
                <div className='text-muted small text-uppercase'>{stats[0].label}</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className='stat-card text-start'
                ref={co2Ref}
              >
                <div className='fw-bold' style={{ fontSize: '1.8rem', color: '#22C55E' }}>
                  {formatNumber(co2Count, 'k')}
                </div>
                <div className='text-muted small text-uppercase'>{stats[1].label}</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className='stat-card text-start'
                ref={savingsRef}
              >
                <div className='fw-bold' style={{ fontSize: '1.8rem', color: '#22C55E' }}>
                  {formatNumber(savingsCount, '%')}
                </div>
                <div className='text-muted small text-uppercase'>{stats[2].label}</div>
              </motion.div>
            </div>
          </div>

          <div className='col-lg-6 order-1 order-lg-2'>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              className='position-relative hero-visual tilt-float'
              style={{ backgroundImage: `url(${heroImage})` }}
            >
              <div className='position-absolute bottom-0 start-0 end-0 p-3 p-md-4'>
                <div className='bg-white rounded-4 shadow p-3 p-md-4'>
                  <div
                    className='rounded-3 position-relative mb-3 gradient-mask'
                    style={{
                      height: 140,
                      backgroundImage: `url(${heroVideoThumb})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  >
                    <div className='position-absolute top-50 start-50 translate-middle'>
                      <div
                        className='d-flex align-items-center justify-content-center rounded-circle shadow icon-badge-hover bg-white'
                        style={{ width: 64, height: 64 }}
                      >
                        <HiPlay size={32} color='#22C55E' style={{ marginLeft: 4 }} />
                      </div>
                    </div>
                  </div>
                  <p className='mb-0 text-muted small'>
                    Unlock the power of solar energy and enjoy long-term advantages.
                  </p>
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

