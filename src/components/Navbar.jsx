import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { HiPhone } from "react-icons/hi2";
import webLogo from "../assets/web-logo.svg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleToggle = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "About Us", to: "/about" },
    { label: "Solutions", to: "/solutions" },
    { label: "Projects", to: "/projects" },
    { label: "Financing", to: "/financing" },
  ];

  return (
    <header className="position-relative" style={{ paddingTop: '0.75rem', paddingBottom: '0.75rem', zIndex: 1000 }}>
      <nav className="container">
        <div className="glass-nav d-flex align-items-center justify-content-between" style={{ gap: 'clamp(0.5rem, 2vw, 1.5rem)' }}>
          <div className="d-flex align-items-center gap-2 flex-shrink-0" style={{ minWidth: 0 }}>
            <img
              src={webLogo}
              alt="SOLARKON logo"
              className="logo-mark"
              style={{ 
                height: 'clamp(28px, 3vw, 35px)', 
                width: 'auto',
                flexShrink: 0
              }}
            />
            <span 
              className="fw-bold d-none d-sm-inline" 
              style={{ 
                color: "#14532d", 
                fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              }}
            >
              SOLARKON
            </span>
          </div>

          <div className="d-none d-lg-flex align-items-center" style={{ gap: 'clamp(1rem, 2vw, 2rem)', flexWrap: 'nowrap' }}>
            {navLinks.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `fw-semibold text-decoration-none nav-link-main link-underline-hover ${
                    isActive ? "text-success" : "text-dark"
                  }`
                }
                style={{ 
                  fontSize: 'clamp(0.875rem, 1.2vw, 1rem)',
                  whiteSpace: 'nowrap'
                }}
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="d-none d-lg-inline-flex flex-shrink-0">
            <button
              className="btn btn-outline-success btn-pill btn-soft-hover btn-contact"
              type="button"
              onClick={() => navigate("/contact")}
              style={{
                fontSize: 'clamp(0.875rem, 1.2vw, 1rem)',
                padding: 'clamp(0.5rem, 1vw, 0.75rem) clamp(1rem, 2vw, 1.5rem)'
              }}
            >
              <HiPhone className="me-2" size={18} />
              <span className="d-none d-xl-inline">Contact Us</span>
              <span className="d-xl-none">Contact</span>
            </button>
          </div>

          <button
            className="btn btn-outline-success d-inline-flex d-lg-none align-items-center justify-content-center btn-soft-hover nav-toggle flex-shrink-0"
            onClick={handleToggle}
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
            style={{
              minWidth: '44px',
              minHeight: '44px',
              padding: '0.5rem'
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {isOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="mt-3 d-lg-none border rounded-4 p-3 bg-white shadow-sm"
              style={{ maxHeight: '80vh', overflowY: 'auto' }}
            >
              <div className="d-flex flex-column gap-3">
                {navLinks.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive }) =>
                      `fw-semibold text-decoration-none py-2 ${
                        isActive ? "text-success" : "text-dark"
                      }`
                    }
                    onClick={closeMenu}
                    style={{ fontSize: '1rem' }}
                  >
                    {item.label}
                  </NavLink>
                ))}

                <button
                  className="btn btn-success rounded-pill btn-contact-solid w-100"
                  onClick={() => {
                    closeMenu();
                    navigate("/contact");
                  }}
                  style={{ 
                    padding: '0.75rem 1.5rem',
                    fontSize: '1rem'
                  }}
                >
                  <HiPhone className="me-2" size={18} />
                  Contact Us
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

export default Navbar;
