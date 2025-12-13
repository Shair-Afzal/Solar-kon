import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

function PageLoader() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Show loader immediately on route change
    setLoading(true);

    // Hide loader quickly (very fast - won't slow down site)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 400); // Fast transition - 400ms only

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            zIndex: 9999,
          }}
        >
          <div className="text-center">
            {/* Smooth Spinner */}
            <div style={{ width: '80px', height: '80px', margin: '0 auto', position: 'relative' }}>
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  border: '5px solid rgba(20, 83, 45, 0.1)',
                  borderTop: '5px solid #166534',
                  borderRight: '5px solid #15803d',
                  borderRadius: '50%',
                  animation: 'spin 0.9s cubic-bezier(0.5, 0, 0.5, 1) infinite',
                }}
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-4"
            >
              <div
                className="fw-bold"
                style={{
                  background: 'linear-gradient(135deg, #14532d 0%, #166534 50%, #15803d 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontSize: '1.3rem',
                  letterSpacing: '0.1em',
                }}
              >
                SOLARKON
              </div>
              <div
                className="small mt-2"
                style={{
                  color: '#64748b',
                  fontSize: '0.9rem',
                }}
              >
                Loading...
              </div>
            </motion.div>

            <style>{`
              @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }
            `}</style>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default PageLoader;
