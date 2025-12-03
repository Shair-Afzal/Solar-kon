import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

// Counter Hook for animated numbers
function useCounter(targetValue, duration = 1500) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (inView && !hasAnimated.current) {
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

      requestAnimationFrame(animate);
    }
  }, [inView, targetValue, duration]);

  return [count, ref];
}

function StatisticsSection() {
  const stats = [
    { number: '10k+', label: 'Solar Installations', target: 10000 },
    { number: '100k', label: 'Tons of CO2 Reduced', target: 100000 },
    { number: '70%', label: 'Up to Savings', target: 70 },
  ];

  const [installationsCount, installationsRef] = useCounter(10000, 1500);
  const [co2Count, co2Ref] = useCounter(100000, 1800);
  const [savingsCount, savingsRef] = useCounter(70, 1200);

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
    <section className='section-shell' data-aos='fade-up'>
      <div className='container'>
        <div className='row g-3 g-lg-4 text-center'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className='col-12 col-md-4'
            ref={installationsRef}
          >
            <div className='stat-card h-100'>
              <div className='fw-bold' style={{ color: '#22C55E', fontSize: '2.2rem' }}>
                {formatNumber(installationsCount, 'k+')}
              </div>
              <div className='text-muted small text-uppercase'>{stats[0].label}</div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className='col-12 col-md-4'
            ref={co2Ref}
          >
            <div className='stat-card h-100'>
              <div className='fw-bold' style={{ color: '#22C55E', fontSize: '2.2rem' }}>
                {formatNumber(co2Count, 'k')}
              </div>
              <div className='text-muted small text-uppercase'>{stats[1].label}</div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className='col-12 col-md-4'
            ref={savingsRef}
          >
            <div className='stat-card h-100'>
              <div className='fw-bold' style={{ color: '#22C55E', fontSize: '2.2rem' }}>
                {formatNumber(savingsCount, '%')}
              </div>
              <div className='text-muted small text-uppercase'>{stats[2].label}</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default StatisticsSection;

