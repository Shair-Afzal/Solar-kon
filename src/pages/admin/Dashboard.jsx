import StatsCard from '../../admin/components/StatsCard';
import {
  faFolderOpen,
  faCheckCircle,
  faBolt,
  faDollarSign,
} from '@fortawesome/free-solid-svg-icons';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';

function Dashboard() {
  const chartData = [
    { name: 'Jan', Projects: 12, Completed: 8, Revenue: 240 },
    { name: 'Feb', Projects: 19, Completed: 15, Revenue: 380 },
    { name: 'Mar', Projects: 15, Completed: 12, Revenue: 300 },
    { name: 'Apr', Projects: 22, Completed: 18, Revenue: 440 },
    { name: 'May', Projects: 18, Completed: 14, Revenue: 360 },
    { name: 'Jun', Projects: 25, Completed: 20, Revenue: 500 },
    { name: 'Jul', Projects: 20, Completed: 16, Revenue: 400 },
  ];

  return (
    <div className="container-fluid px-2 px-sm-3 px-md-4 px-lg-5 py-3 py-sm-4 py-md-5" style={{ background: '#f8faf9', minHeight: '100vh' }}>
      {/* Header Section with Enhanced Styling */}
      <div className="mb-4 mb-sm-5 mb-md-5 fade-up">
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
            Dashboard Overview
          </h2>
          <p className="mb-0 small small-md-normal" style={{ color: '#64748b', fontSize: '1.05rem', fontWeight: 500 }}>
            Welcome back! Here's what's happening with your solar projects.
          </p>
        </div>
      </div>

      {/* Stats Cards Grid with Staggered Animation */}
      <div className="row g-3 g-sm-4 g-md-4 g-lg-4 mb-4 mb-sm-5 mb-md-5">
        <div className="col-6 col-md-6 col-lg-3 fade-up fade-delay-1">
          <StatsCard
            icon={faFolderOpen}
            title="Total Projects"
            value="127"
            subtitle="All time projects"
            color="#2D5016"
            bgColor="#E1F6E8"
          />
        </div>
        <div className="col-6 col-md-6 col-lg-3 fade-up fade-delay-2">
          <StatsCard
            icon={faCheckCircle}
            title="Completed"
            value="98"
            subtitle="Successfully installed"
            color="#22C55E"
            bgColor="#D1FAE5"
          />
        </div>
        <div className="col-6 col-md-6 col-lg-3 fade-up fade-delay-3">
          <StatsCard
            icon={faBolt}
            title="Active Installations"
            value="18"
            subtitle="In progress"
            color="#2D5016"
            bgColor="#E1F6E8"
          />
        </div>
        <div className="col-6 col-md-6 col-lg-3 fade-up fade-delay-4">
          <StatsCard
            icon={faDollarSign}
            title="Revenue"
            value="$2.4M"
            subtitle="This year"
            color="#22C55E"
            bgColor="#D1FAE5"
          />
        </div>
      </div>

      {/* Charts and Activity Section */}
      <div className="row g-3 g-sm-4 g-md-4">
        <div className="col-12 col-lg-8 fade-up fade-delay-1">
          <div className="card border-0 shadow-lg rounded-4 h-100 dashboard-card-enhanced" style={{ 
            border: '1px solid rgba(45, 80, 22, 0.1)', 
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
            background: 'linear-gradient(135deg, #ffffff 0%, #f8faf9 100%)',
            overflow: 'hidden',
            position: 'relative'
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '4px',
              background: 'linear-gradient(90deg, #2D5016 0%, #22C55E 100%)'
            }}></div>
            <div className="card-body p-3 p-sm-4 p-md-5">
              <h3 className="fw-bold mb-3 mb-sm-4 mb-md-4 chart-title" style={{ 
                background: 'linear-gradient(135deg, #2D5016 0%, #22C55E 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: '1.75rem',
                fontWeight: 700,
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
                Project Performance Chart
              </h3>
              <div className="chart-container chart-container-enhanced" style={{ minHeight: '300px', width: '100%' }}>
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={chartData}
                    margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient id="colorProjects" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#2D5016" stopOpacity={0.5} />
                        <stop offset="50%" stopColor="#22C55E" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#22C55E" stopOpacity={0} />
                      </linearGradient>
                      <linearGradient id="colorCompleted" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#22C55E" stopOpacity={0.6} />
                        <stop offset="50%" stopColor="#34D399" stopOpacity={0.4} />
                        <stop offset="95%" stopColor="#34D399" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis 
                      dataKey="name" 
                      stroke="#6b7280"
                      style={{ fontSize: '12px' }}
                    />
                    <YAxis 
                      stroke="#6b7280"
                      style={{ fontSize: '12px' }}
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#ffffff',
                        border: '1px solid rgba(45, 80, 22, 0.15)',
                        borderRadius: '8px',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                      }}
                    />
                    <Legend 
                      wrapperStyle={{ paddingTop: '20px' }}
                      iconType="circle"
                    />
                    <Area
                      type="monotone"
                      dataKey="Projects"
                      stroke="#2D5016"
                      strokeWidth={3}
                      fillOpacity={1}
                      fill="url(#colorProjects)"
                    />
                    <Area
                      type="monotone"
                      dataKey="Completed"
                      stroke="#22C55E"
                      strokeWidth={3}
                      fillOpacity={1}
                      fill="url(#colorCompleted)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-4 mt-3 mt-lg-0 fade-up fade-delay-2">
          <div className="card border-0 shadow-lg rounded-4 h-100 dashboard-card-enhanced" style={{ 
            border: '1px solid rgba(45, 80, 22, 0.1)', 
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
            background: 'linear-gradient(135deg, #ffffff 0%, #f8faf9 100%)',
            overflow: 'hidden',
            position: 'relative'
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '4px',
              background: 'linear-gradient(90deg, #2D5016 0%, #22C55E 100%)'
            }}></div>
            <div className="card-body p-3 p-sm-4 p-md-5">
              <h3 className="fw-bold mb-3 mb-sm-4 mb-md-4 activity-title" style={{ 
                background: 'linear-gradient(135deg, #2D5016 0%, #22C55E 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: '1.75rem',
                fontWeight: 700,
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
                Recent Activity
              </h3>
              <div className="d-flex flex-column gap-3 gap-sm-3 activity-list">
                {[
                  { text: 'New project "Green Valley" added', time: '2 hours ago', icon: '✨', color: '#22C55E' },
                  { text: 'Installation completed at "Sunset Home"', time: '5 hours ago', icon: '✅', color: '#22C55E' },
                  { text: 'Client inquiry received', time: '1 day ago', icon: '📧', color: '#2D5016' },
                ].map((item, idx) => (
                  <div 
                    key={idx} 
                    className={`activity-item pb-3 pb-sm-3 activity-item-${idx + 1}`}
                    style={{
                      borderBottom: idx < 2 ? '1px solid #e2e8f0' : 'none',
                      padding: '1rem',
                      borderRadius: '12px',
                      transition: 'all 0.3s ease',
                      background: 'transparent'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(34, 197, 94, 0.05) 100%)';
                      e.currentTarget.style.transform = 'translateX(6px)';
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(34, 197, 94, 0.15)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.transform = 'translateX(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <div className="d-flex align-items-start gap-3">
                      <div style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '12px',
                        background: `linear-gradient(135deg, ${item.color}15 0%, ${item.color}05 100%)`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.2rem',
                        flexShrink: 0
                      }}>
                        {item.icon}
                      </div>
                      <div className="flex-grow-1">
                        <p className="mb-1 mb-sm-2 fw-medium activity-text" style={{ color: '#1e293b', fontSize: '0.95rem' }}>
                          {item.text}
                        </p>
                        <p className="small mb-0 activity-time" style={{ color: '#64748b' }}>{item.time}</p>
                      </div>
                    </div>
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

