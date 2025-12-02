import StatsCard from '../../admin/components/StatsCard';
import {
  faFolderOpen,
  faCheckCircle,
  faBolt,
  faDollarSign,
} from '@fortawesome/free-solid-svg-icons';

function Dashboard() {
  return (
    <div className="container-fluid px-2 px-sm-3 px-md-4 px-lg-5">
      <div className="mb-3 mb-sm-4 mb-md-5">
        <h2 className="fw-bold mb-2 text-brand-primary dashboard-title">
          Dashboard Overview
        </h2>
        <p className="text-muted mb-0 small small-md-normal">
          Welcome back! Here's what's happening with your solar projects.
        </p>
      </div>

      <div className="row g-2 g-sm-3 g-md-4 mb-3 mb-sm-4 mb-md-5">
        <div className="col-6 col-md-6 col-lg-3">
          <StatsCard
            icon={faFolderOpen}
            title="Total Projects"
            value="127"
            subtitle="All time projects"
            color="#2D5016"
            bgColor="#E1F6E8"
          />
        </div>
        <div className="col-6 col-md-6 col-lg-3">
          <StatsCard
            icon={faCheckCircle}
            title="Completed"
            value="98"
            subtitle="Successfully installed"
            color="#22C55E"
            bgColor="#D1FAE5"
          />
        </div>
        <div className="col-6 col-md-6 col-lg-3">
          <StatsCard
            icon={faBolt}
            title="Active Installations"
            value="18"
            subtitle="In progress"
            color="#F59E0B"
            bgColor="#FEF3C7"
          />
        </div>
        <div className="col-6 col-md-6 col-lg-3">
          <StatsCard
            icon={faDollarSign}
            title="Revenue"
            value="$2.4M"
            subtitle="This year"
            color="#10B981"
            bgColor="#D1FAE5"
          />
        </div>
      </div>

      <div className="row g-2 g-sm-3 g-md-4">
        <div className="col-12 col-lg-8">
          <div className="card border-0 shadow-sm rounded-3 rounded-md-4 h-100">
            <div className="card-body p-2 p-sm-3 p-md-4">
              <h3 className="fw-bold mb-2 mb-sm-3 mb-md-4 text-brand-primary chart-title">
                Project Performance Chart
              </h3>
              <div className="bg-light rounded-3 p-3 p-sm-4 p-md-5 d-flex align-items-center justify-content-center chart-container">
                <p className="text-muted text-center mb-0 chart-placeholder">
                  Chart placeholder - Integrate your preferred charting library
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-4 mt-3 mt-lg-0">
          <div className="card border-0 shadow-sm rounded-3 rounded-md-4 h-100">
            <div className="card-body p-2 p-sm-3 p-md-4">
              <h3 className="fw-bold mb-2 mb-sm-3 mb-md-4 text-brand-primary activity-title">
                Recent Activity
              </h3>
              <div className="d-flex flex-column gap-2 gap-sm-3">
                {[
                  { text: 'New project "Green Valley" added', time: '2 hours ago' },
                  { text: 'Installation completed at "Sunset Home"', time: '5 hours ago' },
                  { text: 'Client inquiry received', time: '1 day ago' },
                ].map((item, idx) => (
                  <div key={idx} className="border-bottom border-light pb-2 pb-sm-3">
                    <p className="mb-1 small fw-medium text-dark activity-text">
                      {item.text}
                    </p>
                    <p className="text-muted small mb-0 activity-time">{item.time}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

