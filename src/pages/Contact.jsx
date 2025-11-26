import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactHero from '../components/Contact/ContactHero';
import ContactPanels from '../components/Contact/ContactPanels';
import ContactMap from '../components/Contact/ContactMap';
import ContactFAQ from '../components/Contact/ContactFAQ';
import ContactCTA from '../components/Contact/ContactCTA';

function Contact() {
  return (
    <div className="d-flex flex-column min-vh-100 bg-white">
      <Navbar />
      <main className="flex-grow-1">
        <ContactHero />
        <ContactPanels />
        <ContactMap />
        <ContactFAQ />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}

export default Contact;
