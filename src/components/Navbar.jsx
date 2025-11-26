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
    { label: "Project", to: "/profile" },
  ];

  return (
    <header className="py-2 position-sticky top-0 z-2">
      <nav className="container">
        <div className="glass-nav d-flex align-items-center justify-content-between gap-3">
          <div className="d-flex align-items-center gap-2">
            <img
              src={webLogo}
              alt="SOLARKON logo"
              className="logo-mark"
              style={{ height: 50 }}
            />
            <span className="fw-bold fs-4" style={{ color: "#2D5016" }}>
              SOLARKON
            </span>
          </div>

          <div className="d-none d-md-flex align-items-center gap-4">
            {navLinks.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `fw-semibold text-decoration-none nav-link-main link-underline-hover ${
                    isActive ? "text-success" : "text-dark"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="d-none d-md-inline-flex">
            <button
              className="btn btn-outline-success btn-pill btn-soft-hover btn-contact"
              type="button"
              onClick={() => navigate("/contact")}
            >
              <HiPhone className="me-2" size={18} />
              Contact Us
            </button>
          </div>

          <button
            className="btn btn-outline-success d-inline-flex d-md-none align-items-center justify-content-center btn-soft-hover nav-toggle"
            onClick={handleToggle}
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
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
              className="mt-3 d-md-none border rounded-4 p-3 bg-white shadow-sm"
            >
              <div className="d-flex flex-column gap-3">
                {navLinks.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive }) =>
                      `fw-semibold text-decoration-none ${
                        isActive ? "text-success" : "text-dark"
                      }`
                    }
                    onClick={closeMenu}
                  >
                    {item.label}
                  </NavLink>
                ))}

                <button
                  className="btn btn-success rounded-pill btn-contact-solid"
                  onClick={() => {
                    closeMenu();
                    navigate("/contact");
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
