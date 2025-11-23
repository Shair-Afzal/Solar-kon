// TestimonialsSection component using Bootstrap + Swiper slider
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

function TestimonialsSection() {
  const testimonials = [
    {
      name: "John Doe",
      title: "Homeowner",
      quote: "Solvix transformed my energy consumption! My bills are lower, and I feel great knowing I'm contributing to a sustainable future. The installation was smooth, and their team was incredibly professional and knowledgeable. Highly recommend!",
      image: "testimonial-1",
    },
    {
      name: "Jane Smith",
      title: "Business Owner",
      quote: "Switching to solar with Solvix was the best decision for our company. We've seen significant cost savings and our customers appreciate our commitment to sustainability.",
      image: "testimonial-2",
    },
    {
      name: "Mike Johnson",
      title: "Property Manager",
      quote: "The team at Solvix made the entire process seamless. From consultation to installation, everything was handled professionally. Our property value has increased significantly.",
      image: "testimonial-3",
    },
  ];

  return (
    <section className="py-5 bg-white">
      <div className="container">
        <div className="text-center mb-4">
          <div className="text-uppercase small fw-semibold mb-2" style={{ color: '#22C55E' }}>
            Testimonials
          </div>
          <h2 className="fw-bold" style={{ color: '#2D5016', fontSize: '2.2rem' }}>
            Success Stories
          </h2>
        </div>

        <div className="mx-auto" style={{ maxWidth: 720 }}>
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            loop
            spaceBetween={24}
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-4 shadow p-4 p-md-5 h-100">
                  <div className="d-flex flex-column flex-md-row align-items-center gap-4">
                    {/* Image */}
                    <div className="flex-shrink-0">
                      <div
                        className="rounded-circle"
                        style={{
                          width: 96,
                          height: 96,
                          backgroundImage:
                            'url(https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=400&q=80)',
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                        }}
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-grow-1 text-center text-md-start">
                      <p className="fst-italic text-muted mb-3">"{item.quote}"</p>
                      <div>
                        <div className="fw-bold" style={{ color: '#2D5016' }}>
                          {item.name}
                        </div>
                        <div className="text-muted small">{item.title}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;

