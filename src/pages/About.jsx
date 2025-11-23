// About page composition
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutHero from '../components/About/AboutHero';
import MissionSection from '../components/About/MissionSection';
import ValuesSection from '../components/About/ValuesSection';
import TeamSection from '../components/About/TeamSection';
import WhyChooseUs from '../components/About/WhyChooseUs';

function About() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <main className="flex-grow-1">
        <AboutHero />
        <MissionSection />
        <ValuesSection />
        <TeamSection />
        <WhyChooseUs />
      </main>
      <Footer />
    </div>
  );
}

export default About;
