import React from 'react';
import AdminLayout from '../admin/layout/AdminLayout';

function Users() {
  return (
    <AdminLayout>
      <div className="container-fluid">
        <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3 mb-4">
          <div>
            <h2 className="h4 section-title mb-1">Users</h2>
            <p className="mb-0 section-subtitle">
              Manage customer accounts, roles, and access to solar monitoring.
            </p>
          </div>

          <div className="d-flex gap-2">
            <button className="btn btn-outline-success btn-pill btn-soft-hover btn-sm">
              Invite User
            </button>
            <button className="btn btn-primary btn-pill btn-soft-hover btn-sm">
              Export
            </button>
          </div>
        </div>

        <div className="surface-card p-3 p-md-4">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-3">
            <h3 className="h6 mb-2 mb-md-0" style={{ color: 'var(--brand-primary)' }}>
              User directory
            </h3>
            <div className="d-flex gap-2">
              <input
                type="search"
                className="form-control form-control-sm"
                placeholder="Search by name or email"
                style={{ maxWidth: 260 }}
              />
            </div>
          </div>

          <div className="table-responsive">
            <table className="table align-middle mb-0">
              <thead className="table-light">
                <tr>
                  <th>User</th>
                  <th>Role</th>
                  <th>Status</th>
                  <th>Last Active</th>
                  <th className="text-end">Actions</th>
                </tr>
              </thead>
              <tbody className="small">
                <tr>
                  <td>
                    <strong>Sarah Johnson</strong>
                    <div className="text-muted">sarah.johnson@example.com</div>
                  </td>
                  <td>
                    <span className="badge bg-success-subtle text-success rounded-pill">
                      Admin
                    </span>
                  </td>
                  <td>
                    <span className="badge bg-success-subtle text-success rounded-pill">
                      Active
                    </span>
                  </td>
                  <td>5 min ago</td>
                  <td className="text-end">
                    <button className="btn btn-sm btn-outline-success btn-soft-hover me-1">
                      View
                    </button>
                    <button className="btn btn-sm btn-outline-secondary btn-soft-hover">
                      Edit
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Ahmed Ali</strong>
                    <div className="text-muted">ahmed.ali@example.com</div>
                  </td>
                  <td>
                    <span className="badge bg-primary-subtle text-primary rounded-pill">
                      Project Manager
                    </span>
                  </td>
                  <td>
                    <span className="badge bg-success-subtle text-success rounded-pill">
                      Active
                    </span>
                  </td>
                  <td>2 hours ago</td>
                  <td className="text-end">
                    <button className="btn btn-sm btn-outline-success btn-soft-hover me-1">
                      View
                    </button>
                    <button className="btn btn-sm btn-outline-secondary btn-soft-hover">
                      Edit
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Maria Lopez</strong>
                    <div className="text-muted">maria.lopez@example.com</div>
                  </td>
                  <td>
                    <span className="badge bg-info-subtle text-info rounded-pill">
                      Client
                    </span>
                  </td>
                  <td>
                    <span className="badge bg-warning-subtle text-warning rounded-pill">
                      Pending
                    </span>
                  </td>
                  <td>Yesterday</td>
                  <td className="text-end">
                    <button className="btn btn-sm btn-outline-success btn-soft-hover me-1">
                      Resend
                    </button>
                    <button className="btn btn-sm btn-outline-secondary btn-soft-hover">
                      Edit
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Jacob Miller</strong>
                    <div className="text-muted">jacob.miller@example.com</div>
                  </td>
                  <td>
                    <span className="badge bg-info-subtle text-info rounded-pill">
                      Client
                    </span>
                  </td>
                  <td>
                    <span className="badge bg-secondary-subtle text-secondary rounded-pill">
                      Inactive
                    </span>
                  </td>
                  <td>14 days ago</td>
                  <td className="text-end">
                    <button className="btn btn-sm btn-outline-success btn-soft-hover me-1">
                      View
                    </button>
                    <button className="btn btn-sm btn-outline-secondary btn-soft-hover">
                      Edit
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

export default Users;
