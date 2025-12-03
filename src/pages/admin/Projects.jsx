import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

function Projects() {
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      name: 'Green Valley Residential',
      status: 'Completed',
      client: 'John Smith',
      date: '2024-01-15',
      statusColor: '#22C55E',
      statusBg: '#D1FAE5',
    },
    {
      id: 2,
      name: 'Sunset Commercial Complex',
      status: 'In Progress',
      client: 'ABC Corporation',
      date: '2024-02-20',
      statusColor: '#F59E0B',
      statusBg: '#FEF3C7',
    },
    {
      id: 3,
      name: 'Solar Farm Installation',
      status: 'Pending',
      client: 'Energy Solutions Inc',
      date: '2024-03-10',
      statusColor: '#6B7280',
      statusBg: '#F3F4F6',
    },
  ];

  return (
    <div className="container-fluid px-2 px-sm-3 px-md-4 px-lg-5 py-3 py-sm-4 py-md-5" style={{ background: '#f8faf9', minHeight: '100vh' }}>
      <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center justify-content-between gap-3 mb-4 mb-sm-5 fade-up">
        <div style={{ 
          background: 'linear-gradient(135deg, rgba(45, 80, 22, 0.05) 0%, rgba(34, 197, 94, 0.05) 100%)',
          padding: '2rem 2.5rem',
          borderRadius: '20px',
          border: '1px solid rgba(45, 80, 22, 0.1)',
          flex: 1,
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.05)'
        }}>
          <h2 className="fw-bold mb-2 mb-sm-3 projects-title dashboard-title" style={{ 
            background: 'linear-gradient(135deg, #2D5016 0%, #22C55E 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontSize: '2.25rem',
            fontWeight: 800,
            letterSpacing: '-0.02em'
          }}>
            Projects Management
          </h2>
          <p className="mb-0 small small-md-normal" style={{ color: '#64748b', fontSize: '1.05rem', fontWeight: 500 }}>Manage all your solar installation projects</p>
        </div>
        <button
          className="btn btn-sm btn-md-normal d-inline-flex align-items-center gap-1 gap-sm-2 add-project-btn admin-btn-primary"
          style={{ 
            backgroundColor: '#2D5016',
            color: '#ffffff',
            whiteSpace: 'nowrap',
            fontWeight: 600,
            boxShadow: '0 4px 16px rgba(45, 80, 22, 0.3)',
            border: 'none',
            transition: 'all 0.3s ease'
          }}
          onClick={() => navigate('/admin/projects/add')}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#22C55E';
            e.currentTarget.style.transform = 'translateY(-3px)';
            e.currentTarget.style.boxShadow = '0 8px 24px rgba(34, 197, 94, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#2D5016';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 16px rgba(45, 80, 22, 0.3)';
          }}
        >
          <FontAwesomeIcon icon={faPlus} className="add-project-icon" />
          <span className="add-project-text">Add Project</span>
        </button>
      </div>

      <div className="row g-3 g-sm-4 g-md-4 mb-4 mb-sm-5">
        {projects.map((project, idx) => (
          <div key={project.id} className={`col-12 col-sm-6 col-md-6 col-lg-4 fade-up fade-delay-${Math.min(idx + 1, 3)}`}>
            <div
              className="card border-0 shadow-lg rounded-4 h-100 project-card-hover project-card-enhanced"
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #f8faf9 100%)',
                border: '1px solid rgba(45, 80, 22, 0.1)',
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
                overflow: 'hidden',
                position: 'relative',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: 'linear-gradient(90deg, #2D5016 0%, #22C55E 100%)'
              }}></div>
              <div className="card-body p-3 p-sm-4 p-md-4">
                <div className="d-flex align-items-center justify-content-between mb-3 mb-sm-3">
                  <h3 className="fw-bold mb-0 project-card-title" style={{ 
                    background: 'linear-gradient(135deg, #2D5016 0%, #22C55E 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontSize: '1.25rem'
                  }}>
                    {project.name}
                  </h3>
                  <span
                    className="badge rounded-pill px-2 px-sm-3 py-1 py-sm-2 project-status-badge project-status-badge-enhanced"
                    style={{
                      background: project.status === 'Completed' 
                        ? 'linear-gradient(135deg, #22C55E 0%, #34D399 100%)'
                        : project.status === 'In Progress'
                        ? 'linear-gradient(135deg, #FBBF24 0%, #FCD34D 100%)'
                        : '#94a3b8',
                      color: '#ffffff',
                      fontWeight: 600,
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
                      border: 'none'
                    }}
                  >
                    {project.status}
                  </span>
                </div>
                <div className="mb-3 mb-sm-3 project-card-info">
                  <p className="text-muted small mb-2">
                    <strong className="text-dark">Client:</strong> {project.client}
                  </p>
                  <p className="text-muted small mb-0">
                    <strong className="text-dark">Date:</strong> {project.date}
                  </p>
                </div>
                <div className="d-flex gap-2">
                  <button
                    className="btn btn-sm rounded-pill flex-grow-1 project-action-btn project-action-btn-enhanced"
                    style={{ 
                      backgroundColor: '#2D5016',
                      color: '#ffffff',
                      border: 'none',
                      fontWeight: 600,
                      boxShadow: '0 2px 8px rgba(45, 80, 22, 0.3)',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#22C55E';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(34, 197, 94, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#2D5016';
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 2px 8px rgba(45, 80, 22, 0.3)';
                    }}
                  >
                    <FontAwesomeIcon icon={faEdit} className="me-1 me-sm-2" />
                    <span className="d-none d-sm-inline">Edit</span>
                  </button>
                  <button
                    className="btn btn-sm rounded-pill project-action-btn project-action-btn-enhanced"
                    style={{ 
                      background: 'linear-gradient(135deg, #ef4444 0%, #f87171 100%)',
                      color: '#ffffff',
                      border: 'none',
                      minWidth: '40px',
                      fontWeight: 600,
                      boxShadow: '0 2px 8px rgba(239, 68, 68, 0.3)',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'linear-gradient(135deg, #dc2626 0%, #ef4444 100%)';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(239, 68, 68, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'linear-gradient(135deg, #ef4444 0%, #f87171 100%)';
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 2px 8px rgba(239, 68, 68, 0.3)';
                    }}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div
        className="card border-0 shadow-lg rounded-4 surface-card dashboard-card-enhanced fade-up fade-delay-2"
        style={{
          background: 'linear-gradient(135deg, #ffffff 0%, #f8faf9 100%)',
          border: '1px solid rgba(45, 80, 22, 0.1)',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
          overflow: 'hidden',
          position: 'relative'
        }}
      >
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, #2D5016 0%, #22C55E 100%)'
        }}></div>
        <div className="card-body p-3 p-sm-4 p-md-5">
          <h3 className="fw-bold mb-3 mb-sm-4 projects-table-title chart-title" style={{ 
            color: '#1e293b',
            fontSize: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <span style={{
              width: '4px',
              height: '24px',
              background: 'linear-gradient(135deg, #2D5016 0%, #22C55E 100%)',
              borderRadius: '2px'
            }}></span>
            Projects Table View
          </h3>
          <div className="table-responsive admin-table-wrapper">
            <table className="table table-hover mb-0 admin-table">
              <thead>
                <tr>
                  <th className="fw-semibold projects-table-th" style={{ color: '#374151' }}>
                    Project Name
                  </th>
                  <th className="fw-semibold projects-table-th d-none d-md-table-cell" style={{ color: '#374151' }}>
                    Status
                  </th>
                  <th className="fw-semibold projects-table-th d-none d-lg-table-cell" style={{ color: '#374151' }}>
                    Client Name
                  </th>
                  <th className="fw-semibold projects-table-th d-none d-lg-table-cell" style={{ color: '#374151' }}>
                    Installation Date
                  </th>
                  <th className="fw-semibold projects-table-th" style={{ color: '#374151' }}>
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project, idx) => (
                  <tr key={project.id} className="admin-table-row" style={{ animationDelay: `${0.3 + idx * 0.1}s` }}>
                    <td className="fw-medium projects-table-td">
                      <div className="d-flex flex-column">
                        <span>{project.name}</span>
                        <span className="d-md-none">
                          <span
                            className="badge rounded-pill px-2 py-1 mt-1 project-status-badge-enhanced"
                            style={{
                              backgroundColor: project.statusBg,
                              color: project.statusColor,
                              fontSize: '0.7rem',
                            }}
                          >
                            {project.status}
                          </span>
                        </span>
                      </div>
                    </td>
                    <td className="d-none d-md-table-cell">
                      <span
                        className="badge rounded-pill px-2 px-sm-3 py-1 project-status-badge-enhanced"
                        style={{
                          backgroundColor: project.statusBg,
                          color: project.statusColor,
                          fontSize: '0.75rem',
                        }}
                      >
                        {project.status}
                      </span>
                    </td>
                    <td className="d-none d-lg-table-cell projects-table-td">{project.client}</td>
                    <td className="d-none d-lg-table-cell projects-table-td">{project.date}</td>
                    <td>
                      <div className="d-flex gap-1 gap-sm-2">
                        <button
                          className="btn btn-sm rounded-pill project-table-btn project-action-btn-enhanced"
                          style={{ backgroundColor: '#E1F6E8', color: '#2D5016', border: 'none', minWidth: '36px' }}
                        >
                          <FontAwesomeIcon icon={faEdit} />
                        </button>
                        <button
                          className="btn btn-sm rounded-pill project-table-btn project-action-btn-enhanced"
                          style={{ backgroundColor: '#FEE2E2', color: '#DC2626', border: 'none', minWidth: '36px' }}
                        >
                          <FontAwesomeIcon icon={faTrash} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;

