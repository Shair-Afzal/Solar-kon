import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import TopNavbar from '../components/TopNavbar';
import Footer from '../components/Footer';

function AdminLayout() {
  return (
    <div className="d-flex min-vh-100 bg-light">
      <Sidebar />
      <div className="flex-grow-1 d-flex flex-column admin-main-content">
        <TopNavbar />
        <main className="flex-grow-1 p-2 p-sm-3 p-md-4 bg-light">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default AdminLayout;
