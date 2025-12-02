import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import Home from './pages/Home';
import About from './pages/About';
import ProjectDetails from './pages/ProjectDetails';
import Profile from './pages/Profile';
import Contact from './pages/Contact';
import AdminLayout from './admin/layout/AdminLayout';
import AdminDashboard from './pages/admin/Dashboard';
import AdminProjects from './pages/admin/Projects';
import AdminProfile from './pages/admin/Profile';
import NavbarFooterContent from './pages/admin/NavbarFooterContent';
import Settings from './pages/admin/Settings';

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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<ProjectDetails />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="projects" element={<AdminProjects />} />
          <Route path="projects/add" element={<AdminProjects />} />
          <Route path="navbar-footer" element={<NavbarFooterContent />} />
          <Route path="profile" element={<AdminProfile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
