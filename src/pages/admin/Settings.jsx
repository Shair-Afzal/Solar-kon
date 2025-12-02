function Settings() {
  return (
    <div>
      <div className="mb-4">
        <h2 className="fw-bold mb-2" style={{ color: '#2D5016', fontSize: '1.75rem' }}>
          System Settings
        </h2>
        <p className="text-muted mb-0">Configure system-wide settings and preferences</p>
      </div>

      <div
        className="rounded-4 p-4 p-md-5 surface-card"
        style={{
          backgroundColor: '#ffffff',
          border: '1px solid rgba(34, 197, 94, 0.15)',
          maxWidth: '800px',
        }}
      >
        <h3 className="fw-bold mb-4" style={{ color: '#2D5016' }}>
          General Settings
        </h3>
        <form className="row g-4">
          <div className="col-12">
            <label className="form-label fw-semibold" style={{ color: '#2D5016' }}>
              Site Name
            </label>
            <input
              type="text"
              className="form-control rounded-3"
              defaultValue="SOLARKON"
            />
          </div>

          <div className="col-12">
            <label className="form-label fw-semibold" style={{ color: '#2D5016' }}>
              Site Description
            </label>
            <textarea
              className="form-control rounded-3"
              rows="3"
              defaultValue="Leading provider of solar energy solutions"
            />
          </div>

          <div className="col-12">
            <label className="form-label fw-semibold" style={{ color: '#2D5016' }}>
              Admin Email
            </label>
            <input
              type="email"
              className="form-control rounded-3"
              defaultValue="admin@solarkon.com"
            />
          </div>

          <div className="col-12">
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                id="maintenanceMode"
                defaultChecked={false}
              />
              <label className="form-check-label fw-semibold" htmlFor="maintenanceMode" style={{ color: '#2D5016' }}>
                Maintenance Mode
              </label>
            </div>
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
              Save Settings
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Settings;

