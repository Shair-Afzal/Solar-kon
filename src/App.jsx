import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import PageLoader from './components/PageLoader';
import WhatsAppFloat from './components/WhatsAppFloat';
import Home from './pages/Home';
import About from './pages/About';
import Solutions from './pages/Solutions';
import Projects from './pages/Projects';
import Financing from './pages/Financing';
import ProjectDetails from './pages/ProjectDetails';
import Profile from './pages/Profile';
import Contact from './pages/Contact';
import AdminLayout from './admin/layout/AdminLayout';
import AdminDashboard from './pages/admin/Dashboard';
import AdminProjects from './pages/admin/Projects';
import AdminProfile from './pages/admin/Profile';
import NavbarFooterContent from './pages/admin/NavbarFooterContent';
import Settings from './pages/admin/Settings';
import HeroSection from './pages/admin/HeroSection';
import AboutUs from './pages/admin/AboutUs';
import AdminSolutions from './pages/admin/Solutions';
import AdminFinancing from './pages/admin/Financing';
import AdminContact from './pages/admin/Contact';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: 'ease-out-cubic',
      once: true,
      offset: 90,
    });
    return () => {
      AOS.refreshHard();
    };
  }, []);

  return (
    <Router>
      <PageLoader />
      <WhatsAppFloat />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/financing" element={<Financing />} />
        <Route path="/project" element={<ProjectDetails />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<AdminLayout />}>
          {/* <Route index element={<AdminDashboard />} /> */}
          <Route path="hero-section" element={<HeroSection />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="solutions" element={<AdminSolutions />} />
          <Route path="projects" element={<AdminProjects />} />
          <Route path="projects/add" element={<AdminProjects />} />
          <Route path="financing" element={<AdminFinancing />} />
          <Route path="contact" element={<AdminContact />} />
          <Route path="navbar-footer" element={<NavbarFooterContent />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
