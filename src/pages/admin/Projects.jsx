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
    <div className="container-fluid px-2 px-sm-3 px-md-4">
      <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center justify-content-between gap-3 mb-3 mb-sm-4">
        <div>
          <h2 className="fw-bold mb-1 mb-sm-2 projects-title" style={{ color: '#2D5016' }}>
            Projects Management
          </h2>
          <p className="text-muted mb-0 small small-md-normal">Manage all your solar installation projects</p>
        </div>
        <button
          className="btn btn-sm btn-md-normal d-inline-flex align-items-center gap-1 gap-sm-2 add-project-btn"
          style={{ backgroundColor: '#2D5016', color: '#ffffff', whiteSpace: 'nowrap' }}
          onClick={() => navigate('/admin/projects/add')}
        >
          <FontAwesomeIcon icon={faPlus} className="add-project-icon" />
          <span className="add-project-text">Add Project</span>
        </button>
      </div>

      <div className="row g-2 g-sm-3 g-md-4 mb-3 mb-sm-4">
        {projects.map((project) => (
          <div key={project.id} className="col-12 col-sm-6 col-md-6 col-lg-4">
            <div
              className="card border-0 shadow-sm rounded-3 rounded-md-4 h-100 project-card-hover"
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid rgba(34, 197, 94, 0.15)',
              }}
            >
              <div className="card-body p-3 p-sm-4">
                <div className="d-flex align-items-center justify-content-between mb-2 mb-sm-3">
                  <h3 className="fw-bold mb-0 project-card-title" style={{ color: '#2D5016' }}>
                    {project.name}
                  </h3>
                  <span
                    className="badge rounded-pill px-2 px-sm-3 py-1 py-sm-2 project-status-badge"
                    style={{
                      backgroundColor: project.statusBg,
                      color: project.statusColor,
                    }}
                  >
                    {project.status}
                  </span>
                </div>
                <div className="mb-2 mb-sm-3">
                  <p className="text-muted small mb-1">
                    <strong>Client:</strong> {project.client}
                  </p>
                  <p className="text-muted small mb-0">
                    <strong>Date:</strong> {project.date}
                  </p>
                </div>
                <div className="d-flex gap-2">
                  <button
                    className="btn btn-sm rounded-pill flex-grow-1 project-action-btn"
                    style={{ backgroundColor: '#E1F6E8', color: '#2D5016', border: 'none' }}
                  >
                    <FontAwesomeIcon icon={faEdit} className="me-1 me-sm-2" />
                    <span className="d-none d-sm-inline">Edit</span>
                  </button>
                  <button
                    className="btn btn-sm rounded-pill project-action-btn"
                    style={{ backgroundColor: '#FEE2E2', color: '#DC2626', border: 'none', minWidth: '40px' }}
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
        className="card border-0 shadow-sm rounded-3 rounded-md-4 surface-card"
        style={{
          backgroundColor: '#ffffff',
          border: '1px solid rgba(34, 197, 94, 0.15)',
        }}
      >
        <div className="card-body p-3 p-sm-4">
          <h3 className="fw-bold mb-2 mb-sm-3 projects-table-title" style={{ color: '#2D5016' }}>
            Projects Table View
          </h3>
          <div className="table-responsive">
            <table className="table table-hover mb-0">
              <thead>
                <tr style={{ backgroundColor: '#f9fafb' }}>
                  <th className="fw-semibold projects-table-th" style={{ color: '#2D5016' }}>
                    Project Name
                  </th>
                  <th className="fw-semibold projects-table-th d-none d-md-table-cell" style={{ color: '#2D5016' }}>
                    Status
                  </th>
                  <th className="fw-semibold projects-table-th d-none d-lg-table-cell" style={{ color: '#2D5016' }}>
                    Client Name
                  </th>
                  <th className="fw-semibold projects-table-th d-none d-lg-table-cell" style={{ color: '#2D5016' }}>
                    Installation Date
                  </th>
                  <th className="fw-semibold projects-table-th" style={{ color: '#2D5016' }}>
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project) => (
                  <tr key={project.id}>
                    <td className="fw-medium projects-table-td">
                      <div className="d-flex flex-column">
                        <span>{project.name}</span>
                        <span className="d-md-none">
                          <span
                            className="badge rounded-pill px-2 py-1 mt-1"
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
                        className="badge rounded-pill px-2 px-sm-3 py-1"
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
                          className="btn btn-sm rounded-pill project-table-btn"
                          style={{ backgroundColor: '#E1F6E8', color: '#2D5016', border: 'none', minWidth: '36px' }}
                        >
                          <FontAwesomeIcon icon={faEdit} />
                        </button>
                        <button
                          className="btn btn-sm rounded-pill project-table-btn"
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

