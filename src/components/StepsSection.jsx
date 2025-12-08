import { useEffect, useRef } from "react";
import {
  HiClipboardDocumentCheck,
  HiMagnifyingGlass,
  HiWrenchScrewdriver,
  HiCheckCircle,
  HiWrench,
} from "react-icons/hi2";

function StepsSection() {
  const sectionRef = useRef(null);
  const stepsRef = useRef(null);

  const steps = [
    {
      number: "1",
      icon: <HiClipboardDocumentCheck size={28} />,
      title: "Inquiry of System",
      description: "Contact us to discuss your energy needs and requirements.",
    },
    {
      number: "2",
      icon: <HiMagnifyingGlass size={28} />,
      title: "Engineering Team Site Survey",
      description: "Our certified engineers visit your location for assessment.",
    },
    {
      number: "3",
      icon: <HiWrenchScrewdriver size={28} />,
      title: "Installation",
      description: "Professional installation by expert technicians.",
    },
    {
      number: "4",
      icon: <HiCheckCircle size={28} />,
      title: "Completion of Task & Sign-off",
      description: "System testing, commissioning, and final handover.",
    },
    {
      number: "5",
      icon: <HiWrench size={28} />,
      title: "After-Sales Services",
      description: "Ongoing support, maintenance, and monitoring services.",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      const stepsBox = stepsRef.current;

      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;

      const stepsScrollHeight = stepsBox.scrollHeight - stepsBox.clientHeight;

      // ✅ Only scroll steps when user is inside section
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight - 50) {
        const progress = (scrollY - sectionTop) / (sectionHeight - windowHeight);
        stepsBox.scrollTop = progress * stepsScrollHeight;
      }

      // ✅ After steps end → normal page scroll continues
      if (scrollY >= sectionTop + sectionHeight - windowHeight) {
        stepsBox.scrollTop = stepsScrollHeight;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} style={{ padding: "4rem 0", background: "#fff" }}>
      <div className="container">
        <div className="text-center mb-5">
          <span className="eyebrow" style={{ color: "#166534", backgroundColor: "#D1FAE5" }}>Working Methodology</span>
          <h2 className="fw-bold mt-3" style={{ fontSize: "2.3rem", color: "#14532d" }}>
            Installation Process
          </h2>
        </div>

        <div
          className="rounded-4 overflow-hidden"
          style={{
            height: "520px",
            border: "2px solid #e2e8f0",
            boxShadow: "0 8px 30px rgba(0,0,0,0.09)",
            display: "flex",
          }}
        >
          {/* LEFT STATIC */}
          <div
            className="col-lg-6 border-end"
            style={{
              borderColor: "#e2e8f0",
              background: "linear-gradient(135deg, #14532d 0%, #166534 50%, #15803d 100%)",
              padding: "2rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <span
                className="eyebrow d-inline-block mb-3"
                style={{
                  color: "#fff",
                  backgroundColor: "rgba(255,255,255,0.2)",
                  padding: "0.5rem 1rem",
                  borderRadius: "20px",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                }}
              >
                Working Methodology
              </span>
              <h3 className="fw-bold mb-3" style={{ color: "#fff" }}>Our Process Flow</h3>
              <p style={{ color: "rgba(255,255,255,0.9)", lineHeight: 1.6 }}>
                At Solarkon, we follow a systematic approach to ensure your solar installation is seamless.
              </p>
            </div>
          </div>

          {/* RIGHT SCROLLABLE STEPS */}
          <div
            className="col-lg-6"
            style={{ height: "100%", overflow: "hidden", padding: "2rem" }}
          >
            <div ref={stepsRef} style={{ height: "100%", overflowY: "hidden" }}>
              {steps.map((step) => (
                <div
                  key={step.number}
                  style={{
                    marginBottom: "2rem",
                    padding: "1.5rem",
                    border: "1px solid #e5e7eb",
                    borderRadius: "12px",
                    background: "#fff",
                  }}
                >
                  <div className="d-flex align-items-start gap-3">
                    <div
                      className="d-flex align-items-center justify-content-center rounded-circle"
                      style={{
                        width: 56,
                        height: 56,
                        backgroundColor: "rgba(20, 83, 45, 0.1)",
                        color: "#166534",
                      }}
                    >
                      {step.icon}
                    </div>
                    <div>
                      <h4 className="fw-bold mb-2" style={{ fontSize: "1.1rem" }}>
                        {step.number}. {step.title}
                      </h4>
                      <p className="text-muted" style={{ fontSize: "0.95rem" }}>
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StepsSection;
