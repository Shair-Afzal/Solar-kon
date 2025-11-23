import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiPhone } from "react-icons/hi2";
import webLogo from "../assets/web-logo.svg";

// Navbar component using Bootstrap with mobile toggle
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="bg-white shadow-sm sticky-top">
      <nav className="container py-3">
        <div className="d-flex align-items-center justify-content-between gap-3">
          {/* Logo */}
          <div className="d-flex align-items-center gap-2">
            <img
              src={webLogo}
              alt="Solvix logo"
              style={{ height: 35, marginTop: 10 }}
            />
            <span className="fw-bold fs-4" style={{ color: "#2D5016" }}>
              SOLARKON
            </span>
          </div>

          {/* Desktop nav */}
          <div className="d-none d-md-flex align-items-center gap-5">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `fw-medium text-decoration-none link-underline-hover nav-link-main ${
                  isActive ? "text-success" : "text-dark"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `fw-medium text-decoration-none link-underline-hover nav-link-main ${
                  isActive ? "text-success" : "text-dark"
                }`
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                `fw-medium text-decoration-none link-underline-hover nav-link-main ${
                  isActive ? "text-success" : "text-dark"
                }`
              }
            >
              Project
            </NavLink>
          </div>

          {/* Desktop CTA */}
          <button className="btn btn-outline-secondary rounded-pill px-4 d-none d-md-inline-flex btn-soft-hover btn-contact">
            <HiPhone className="me-2" size={18} />
            Contact Us
          </button>

          {/* Mobile toggle */}
          <button
            className="btn btn-outline-success d-inline-flex d-md-none align-items-center justify-content-center btn-soft-hover"
            onClick={handleToggle}
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
            style={{ width: 42, height: 42 }}
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

        {/* Mobile menu */}
        {isOpen && (
          <div className="mt-3 d-md-none border rounded-4 p-3 bg-white shadow-sm">
            <div className="d-flex flex-column gap-3">
              <a
                href="#home"
                className="text-success fw-semibold text-decoration-none"
                onClick={closeMenu}
              >
                Home
              </a>
              <a
                href="#about"
                className="text-dark text-decoration-none"
                onClick={closeMenu}
              >
                About Us
              </a>
              <a
                href="#services"
                className="text-dark text-decoration-none"
                onClick={closeMenu}
              >
                Services
              </a>

              <button
                className="btn btn-success rounded-pill btn-contact-solid"
                onClick={closeMenu}
              >
                <HiPhone className="me-2" size={18} />
                Contact Us
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
