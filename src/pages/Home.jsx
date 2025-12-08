// Home page component
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import StatisticsSection from '../components/StatisticsSection';
import StepsSection from '../components/StepsSection';
import ProjectHighlights from '../components/ProjectHighlights';
import ClientLogosSection from '../components/ClientLogosSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <main className="flex-grow-1">
        <HeroSection />
        <StatisticsSection />
        <StepsSection />
        <ProjectHighlights />
        <ClientLogosSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default Home;

