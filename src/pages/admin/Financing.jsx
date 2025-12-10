import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faDollarSign } from '@fortawesome/free-solid-svg-icons';

function AdminFinancing() {
  const [formData, setFormData] = useState({
    heroTitle: 'Flexible Financing Solutions',
    heroSubtitle: 'Choose the financing option that best fits your needs and budget. We offer multiple ways to make solar energy accessible.',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Financing data:', formData);
    alert('Financing content saved successfully!');
  };

  return (
    <div className="container-fluid px-2 px-sm-3 px-md-4 px-lg-5 py-3 py-sm-4 py-md-5" style={{ background: '#f8faf9', minHeight: '100vh' }}>
      <div className="mb-4 mb-sm-5 fade-up">
        <div style={{ 
          background: 'linear-gradient(135deg, rgba(45, 80, 22, 0.05) 0%, rgba(34, 197, 94, 0.05) 100%)',
          padding: '2rem 2.5rem',
          borderRadius: '20px',
          border: '1px solid rgba(45, 80, 22, 0.1)',
          marginBottom: '2rem',
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.05)'
        }}>
          <h2 className="fw-bold mb-2 mb-sm-3 dashboard-title" style={{ 
            background: 'linear-gradient(135deg, #2D5016 0%, #22C55E 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontSize: '2.25rem',
            fontWeight: 800,
            letterSpacing: '-0.02em'
          }}>
            Financing Page Content
          </h2>
          <p className="mb-0 small small-md-normal" style={{ color: '#64748b', fontSize: '1.05rem', fontWeight: 500 }}>Manage content for the Financing page</p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Hero Section */}
        <div className="rounded-4 p-4 p-md-5 surface-card admin-form-card fade-up fade-delay-1 mb-4" style={{
          background: 'linear-gradient(135deg, #ffffff 0%, #f8faf9 100%)',
          border: '1px solid rgba(45, 80, 22, 0.1)',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'linear-gradient(90deg, #2D5016 0%, #22C55E 100%)'
          }}></div>
          <h3 className="fw-bold mb-4 chart-title position-relative" style={{ 
            fontSize: '1.75rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem'
          }}>
            <span style={{
              width: '5px',
              height: '28px',
              background: 'linear-gradient(135deg, #2D5016 0%, #22C55E 100%)',
              borderRadius: '3px'
            }}></span>
            Hero Section
          </h3>
          <div className="row g-4">
            <div className="col-12">
              <label className="form-label fw-semibold mb-3 admin-form-label">
                <FontAwesomeIcon icon={faLightbulb} style={{ color: '#22C55E', marginRight: '0.5rem' }} />
                Hero Title
              </label>
              <input
                type="text"
                name="heroTitle"
                className="form-control rounded-3 admin-form-input"
                value={formData.heroTitle}
                onChange={(e) => handleChange(e, 'hero')}
                style={{ padding: '14px 16px', fontSize: '0.95rem' }}
              />
            </div>
            <div className="col-12">
              <label className="form-label fw-semibold mb-3 admin-form-label">
                Hero Subtitle
              </label>
              <textarea
                name="heroSubtitle"
                className="form-control rounded-3 admin-form-input"
                rows="3"
                value={formData.heroSubtitle}
                onChange={(e) => handleChange(e, 'hero')}
                style={{ padding: '14px 16px', fontSize: '0.95rem', resize: 'vertical' }}
              />
            </div>
          </div>
        </div>


        <div className="d-flex justify-content-end gap-3 mt-4">
          <button type="button" className="btn rounded-pill px-4 px-md-5 admin-btn-cancel">
            Cancel
          </button>
          <button type="submit" className="btn rounded-pill px-4 px-md-5 admin-btn-primary" style={{ 
            background: 'linear-gradient(135deg, #14532d 0%, #166534 50%, #15803d 100%)',
            color: '#ffffff',
            border: 'none',
            fontWeight: 600
          }}>
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}

export default AdminFinancing;
