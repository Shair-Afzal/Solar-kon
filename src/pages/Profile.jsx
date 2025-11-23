// Profile page composition
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProfileHeader from '../components/Profile/ProfileHeader';
import ProfileInfo from '../components/Profile/ProfileInfo';
import ProfileStats from '../components/Profile/ProfileStats';
import ProfileSettings from '../components/Profile/ProfileSettings';

function Profile() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <main className="flex-grow-1">
        <ProfileHeader />
        <ProfileInfo />
        <ProfileStats />
        <ProfileSettings />
      </main>
      <Footer />
    </div>
  );
}

export default Profile;
