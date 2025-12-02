function Profile() {
  return (
    <div>
      <div className="mb-4">
        <h2 className="fw-bold mb-2" style={{ color: '#2D5016', fontSize: '1.75rem' }}>
          Profile Settings
        </h2>
        <p className="text-muted mb-0">Manage your admin account information</p>
      </div>

      <div
        className="rounded-4 p-4 p-md-5 surface-card"
        style={{
          backgroundColor: '#ffffff',
          border: '1px solid rgba(34, 197, 94, 0.15)',
          maxWidth: '800px',
        }}
      >
        <form className="row g-4">
          <div className="col-12">
            <label className="form-label fw-semibold" style={{ color: '#2D5016' }}>
              Full Name
            </label>
            <input
              type="text"
              className="form-control rounded-3"
              placeholder="John Doe"
              defaultValue="Admin User"
            />
          </div>

          <div className="col-md-6">
            <label className="form-label fw-semibold" style={{ color: '#2D5016' }}>
              Email Address
            </label>
            <input
              type="email"
              className="form-control rounded-3"
              placeholder="admin@solarkon.com"
              defaultValue="admin@solarkon.com"
            />
          </div>

          <div className="col-md-6">
            <label className="form-label fw-semibold" style={{ color: '#2D5016' }}>
              Phone Number
            </label>
            <input
              type="tel"
              className="form-control rounded-3"
              placeholder="+1 (555) 123-4567"
              defaultValue="+1 (555) 123-4567"
            />
          </div>

          <div className="col-12">
            <label className="form-label fw-semibold" style={{ color: '#2D5016' }}>
              Address
            </label>
            <textarea
              className="form-control rounded-3"
              rows="3"
              placeholder="123 Main Street, City, State, ZIP"
              defaultValue="123 Main Street, Anytown, USA 12345"
            />
          </div>

          <div className="col-12">
            <label className="form-label fw-semibold" style={{ color: '#2D5016' }}>
              Bio
            </label>
            <textarea
              className="form-control rounded-3"
              rows="4"
              placeholder="Tell us about yourself..."
              defaultValue="Administrator for SOLARKON Solar Solutions"
            />
          </div>

          <div className="col-12 d-flex justify-content-end gap-3">
            <button
              type="button"
              className="btn rounded-pill px-4"
              style={{ backgroundColor: '#f3f4f6', color: '#111827', border: 'none' }}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn btn-pill px-4"
              style={{ backgroundColor: '#2D5016', color: '#ffffff' }}
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Profile;

