import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUserCircle } from '@fortawesome/free-solid-svg-icons';

function TopNavbar() {
  return (
    <header className="bg-white shadow-sm border-bottom sticky-top admin-navbar" style={{ zIndex: 1030 }}>
      <div className="container-fluid px-2 px-sm-3 px-md-4">
        <div className="d-flex align-items-center justify-content-between py-2 py-sm-3">
          <div className="admin-navbar-content">
            <h1 className="h6 h-sm-5 mb-0 fw-bold text-brand-primary admin-navbar-title">
              Admin Dashboard
            </h1>
          </div>
          <div className="d-flex align-items-center gap-1 gap-sm-2 gap-md-3">
            <button
              className="btn btn-link text-dark position-relative p-1 p-sm-2 text-decoration-none rounded-circle admin-notification-btn"
              aria-label="Notifications"
            >
              <FontAwesomeIcon icon={faBell} className="admin-bell-icon" />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success admin-badge">
                3
              </span>
            </button>
            <div className="d-flex align-items-center gap-1 gap-sm-2">
              <FontAwesomeIcon icon={faUserCircle} className="text-brand-primary admin-user-icon" />
              <div className="d-none d-md-block">
                <div className="fw-semibold small text-brand-primary admin-user-name">
                  Admin User
                </div>
                <div className="text-muted small admin-user-email">
                  admin@solarkon.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default TopNavbar;
