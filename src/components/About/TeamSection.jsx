import teamImg1 from '../../assets/images/teamwork.jpg';
import teamImg2 from '../../assets/images/storyimg.jpg';
import teamImg3 from '../../assets/images/storyimg2.jpg';
import teamImg4 from '../../assets/images/solars.jpg';

// TeamSection - meet our best team cards
function TeamSection() {
  const team = [
    {
      name: 'Faisal Ahmed',
      role: 'Project Director',
      image: teamImg1,
    },
    {
      name: 'Sara Malik',
      role: 'Lead Solar Engineer',
      image: teamImg2,
    },
    {
      name: 'Usman Khan',
      role: 'Energy Consultant',
      image: teamImg3,
    },
    {
      name: 'Ayesha Noor',
      role: 'Customer Success Lead',
      image: teamImg4,
    },
  ];

  return (
    <section className="section-shell bg-white" data-aos="fade-up">
      <div className="container">
        <div className="text-center mb-4 mb-md-5 section-heading">
          <div className="text-uppercase small fw-semibold mb-2" style={{ color: '#22C55E' }}>
            Our Team
          </div>
          <h2 className="fw-bold mb-2 section-title" style={{ fontSize: '2rem' }}>
            Meet Our Best Team
          </h2>
          <p className="text-muted mb-0 mx-auto section-subtitle" style={{ maxWidth: 600 }}>
            Passionate professionals dedicated to helping you make the switch to clean energy with
            confidence.
          </p>
        </div>

        <div className="row g-4">
          {team.map((member) => (
            <div key={member.name} className="col-6 col-md-3">
              <div className="h-100 text-center rounded-4 surface-card overflow-hidden">
                <div
                  className="w-100"
                  style={{
                    height: 180,
                    backgroundImage: `url(${member.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
                <div className="p-3">
                  <h3 className="fw-semibold mb-1" style={{ fontSize: '0.95rem', color: '#111827' }}>
                    {member.name}
                  </h3>
                  <p className="text-muted small mb-0">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
