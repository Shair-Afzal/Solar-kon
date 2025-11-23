// Home page component
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import StatisticsSection from '../components/StatisticsSection';
import ClientLogosSection from '../components/ClientLogosSection';
import BenefitsSection from '../components/BenefitsSection';
import ServicesSection from '../components/ServicesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import StepsSection from '../components/StepsSection';
import FAQSection from '../components/FAQSection';
import BlogSection from '../components/BlogSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <main className="flex-grow-1">
        <HeroSection />
        <StatisticsSection />
        <ClientLogosSection />
        <BenefitsSection />
        <ServicesSection />
        <TestimonialsSection />
        <StepsSection />
        <FAQSection />
        <BlogSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default Home;

