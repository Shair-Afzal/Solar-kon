// BlogSection component using Bootstrap
import Card from './Card';

function BlogSection() {
  const blogPosts = [
    {
      date: 'October 26, 2023',
      title: 'The Future of Solar Energy: Innovations and Trends',
      description:
        'Explore the latest advancements in solar technology and how they are shaping a sustainable future. From new panel designs to smart energy management systems, stay ahead with Solvix.',
      image: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=900&q=80',
    },
    {
      date: 'November 15, 2023',
      title: 'How Solar Panels Increase Your Home Value',
      description:
        "Discover how installing solar panels can significantly boost your property's market value and make it more attractive to potential buyers.",
      image: 'https://images.unsplash.com/photo-1470246973918-29a93221c455?auto=format&fit=crop&w=900&q=80',
    },
    {
      date: 'December 5, 2023',
      title: 'Maximizing Your Solar Investment Returns',
      description:
        'Learn about the financial benefits of solar energy and how to maximize your return on investment with smart energy management strategies.',
      image: 'https://images.unsplash.com/photo-1509395283749-8d6f0c7e1d0b?auto=format&fit=crop&w=900&q=80',
    },
  ];

  return (
    <section className="py-5 bg-white">
      <div className="container">
        <div className="text-center mb-4">
          <div className="text-uppercase small fw-semibold mb-2" style={{ color: '#22C55E' }}>
            Blog & News
          </div>
          <h2 className="fw-bold mx-auto" style={{ color: '#2D5016', maxWidth: 640, fontSize: '2.2rem' }}>
            Stay Informed With Expert Insights, Tips About Solar Energy
          </h2>
        </div>

        <div className="row g-4">
          {blogPosts.map((post, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <Card className="h-100 border-0 shadow-sm">
                {/* Image */}
                <div
                  className="position-relative d-flex align-items-center justify-content-center"
                  style={{
                    height: 180,
                    backgroundImage: `url(${post.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />

                <div className="card-body">
                  <div className="text-muted small mb-2">{post.date}</div>
                  <h3 className="card-title fw-bold mb-2" style={{ color: '#2D5016', fontSize: '1.05rem' }}>
                    {post.title}
                  </h3>
                  <p className="card-text text-muted small mb-3">{post.description}</p>
                  <a
                    href="#"
                    className="d-inline-flex align-items-center gap-2 text-decoration-none fw-semibold"
                    style={{ color: '#22C55E' }}
                  >
                    Read More
                    <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogSection;

