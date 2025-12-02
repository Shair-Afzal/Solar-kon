import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTachometerAlt,
  faFolderOpen,
  faPlusCircle,
  faUser,
  faCog,
  faBars,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import webLogo from '../../assets/web-logo.svg';

function Sidebar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 992);
    };
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  const menuItems = [
    { icon: faTachometerAlt, label: 'Dashboard', path: '/admin' },
    { icon: faFolderOpen, label: 'Projects', path: '/admin/projects' },
    { icon: faPlusCircle, label: 'Add Project', path: '/admin/projects/add' },
    { icon: faBars, label: 'Navbar & Footer', path: '/admin/navbar-footer' },
    { icon: faUser, label: 'Profile', path: '/admin/profile' },
    { icon: faCog, label: 'Settings', path: '/admin/settings' },
  ];

  return (
    <>
      <button
        className="btn d-lg-none position-fixed admin-toggle-btn"
        style={{ 
          zIndex: 1050, 
          width: '40px', 
          height: '40px',
          top: '12px',
          left: '12px',
          padding: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#2D5016',
          border: 'none',
          borderRadius: '50%',
          color: '#ffffff',
        }}
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        aria-label="Toggle sidebar"
      >
        <FontAwesomeIcon icon={isMobileOpen ? faTimes : faBars} style={{ fontSize: '1.1rem' }} />
      </button>

      <aside
        className={`position-fixed top-0 start-0 h-100 bg-white shadow-lg ${
          isMobileOpen ? 'd-block' : 'd-none d-lg-block'
        }`}
        style={{
          width: '280px',
          zIndex: 1040,
          transition: 'transform 0.3s ease-in-out',
          overflowY: 'auto',
          transform: isMobileOpen || isDesktop ? 'translateX(0)' : 'translateX(-100%)',
        }}
      >
        <div className="p-3 p-md-4 border-bottom position-relative">
          <button
            className="btn btn-link text-dark p-1 position-absolute top-0 end-0 m-2 d-lg-none sidebar-close-btn"
            onClick={() => setIsMobileOpen(false)}
            aria-label="Close sidebar"
            style={{
              zIndex: 1051,
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textDecoration: 'none',
            }}
          >
            <FontAwesomeIcon icon={faTimes} style={{ fontSize: '1.1rem' }} />
          </button>
          <div className="d-flex align-items-center gap-2 sidebar-logo-container">
            <img
              src={webLogo}
              alt="SOLARKON Admin"
              className="sidebar-logo"
            />
            <span className="fw-bold sidebar-brand-text" style={{ color: '#2D5016' }}>
              SOLARKON
            </span>
          </div>
          <p className="text-muted small mb-0 mt-1 sidebar-subtitle">Admin Dashboard</p>
        </div>

        <nav className="p-3">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `d-flex align-items-center gap-3 p-3 mb-2 rounded-3 text-decoration-none ${
                  isActive
                    ? 'text-white'
                    : 'text-dark'
                }` +
                (isActive
                  ? ' shadow-sm'
                  : '')
              }
              style={({ isActive }) => ({
                backgroundColor: isActive ? '#2D5016' : 'transparent',
                transition: 'all 0.2s ease',
              })}
              onClick={() => setIsMobileOpen(false)}
            >
              <FontAwesomeIcon icon={item.icon} style={{ width: '20px' }} />
              <span className="fw-medium">{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </aside>

      {isMobileOpen && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-lg-none"
          style={{ zIndex: 1035 }}
          onClick={() => setIsMobileOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}

export default Sidebar;
