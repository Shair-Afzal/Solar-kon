import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function StatsCard({ icon, title, value, subtitle, color = '#2D5016', bgColor = '#E1F6E8' }) {
  return (
    <div className="card border-0 shadow-sm rounded-3 rounded-md-4 h-100 stats-card-hover">
      <div className="card-body p-2 p-sm-3 p-md-4">
        <div className="d-flex align-items-center justify-content-between mb-2 mb-sm-3">
          <div
            className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0 stats-icon"
            style={{
              backgroundColor: bgColor,
              color: color,
            }}
          >
            <FontAwesomeIcon icon={icon} className="stats-icon-svg" />
          </div>
        </div>
        <h3 className="fw-bold mb-1 stats-value" style={{ color: color }}>
          {value}
        </h3>
        <p className="fw-semibold mb-1 text-dark stats-title">
          {title}
        </p>
        {subtitle && (
          <p className="text-muted small mb-0 stats-subtitle">{subtitle}</p>
        )}
      </div>
    </div>
  );
}

export default StatsCard;
