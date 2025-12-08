// About page composition
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutHero from '../components/About/AboutHero';
import MissionSection from '../components/About/MissionSection';
import VisionValuesSection from '../components/About/VisionValuesSection';
import WhyChooseSolarkonSection from '../components/About/WhyChooseSolarkonSection';
import CertificationsSection from '../components/About/CertificationsSection';
import TeamSection from '../components/About/TeamSection';

function About() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <main className="flex-grow-1">
        <AboutHero />
        <MissionSection />
        <VisionValuesSection />
        <WhyChooseSolarkonSection />
        <CertificationsSection />
        <TeamSection />
      </main>
      <Footer />
    </div>
  );
}

export default About;
