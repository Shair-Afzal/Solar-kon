// Footer component using Bootstrap
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  const socialIcons = [
    {
      name: "Facebook",
      icon: <FaFacebookF />,
    },
    {
      name: "Twitter",
      icon: <FaTwitter />,
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn />,
    },
  ];

  const quickLinks = ['Home', 'About', 'Services', 'Projects', 'Blog', 'Contact'];

  return (
    <footer style={{ backgroundColor: '#2D5016' }} className="pt-5 pb-4 mt-4">
      <div className="container">
        <div className="row g-4 mb-3">
          {/* Column 1 - Logo and Social */}
          <div className="col-md-6 col-lg-3">
            <div className="d-flex align-items-center gap-2 mb-3">
              <div
                className="rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: 32, height: 32, backgroundColor: '#22C55E' }}
              >
                <span className="fw-bold" style={{ color: '#2D5016' }}>
                  S
                </span>
              </div>
              <span className="fw-bold text-white fs-5">Solvix</span>
            </div>
            <div className="d-flex gap-2 mb-3">
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href="#"
                  aria-label={social.name}
                  className="d-flex align-items-center justify-content-center rounded-circle"
                  style={{
                    width: 40,
                    height: 40,
                    backgroundColor: 'rgba(255,255,255,0.08)',
                    color: '#ffffff',
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <p className="text-white-50 small mb-0">123 Main Street, Anytown, USA 12345</p>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="col-md-6 col-lg-3">
            <h3 className="text-white fs-6 fw-bold mb-3">Quick Links</h3>
            <ul className="list-unstyled mb-0">
              {quickLinks.map((link, index) => (
                <li key={index} className="mb-1">
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-white-50 text-decoration-none small"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Contact Us */}
          <div className="col-md-6 col-lg-3">
            <h3 className="text-white fs-6 fw-bold mb-3">Contact Us</h3>
            <ul className="list-unstyled mb-0 text-white-50 small">
              <li className="mb-1">+1 (555) 123-4567</li>
              <li>
                <a href="mailto:info@solvix.com" className="text-white-50 text-decoration-none">
                  info@solvix.com
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 - Newsletter */}
          <div className="col-md-6 col-lg-3">
            <h3 className="text-white fs-6 fw-bold mb-3">Newsletter</h3>
            <form className="d-flex flex-column gap-2">
              <input
                type="email"
                className="form-control form-control-sm bg-transparent border-light text-white"
                placeholder="Your email"
              />
              <button
                type="submit"
                className="btn btn-sm fw-semibold"
                style={{ backgroundColor: '#22C55E', color: '#2D5016' }}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-top border-light-subtle pt-3 text-center">
          <p className="text-white-50 small mb-0">© 2023 Solvix. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

