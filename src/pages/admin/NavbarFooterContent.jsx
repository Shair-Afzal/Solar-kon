import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

function NavbarFooterContent() {
  const [navbarItems, setNavbarItems] = useState([
    { id: 1, label: 'Home', path: '/' },
    { id: 2, label: 'About Us', path: '/about' },
    { id: 3, label: 'Project', path: '/profile' },
  ]);

  const [footerSections, setFooterSections] = useState([
    {
      id: 1,
      heading: 'Quick Links',
      links: ['Home', 'About', 'Services', 'Projects', 'Blog', 'Contact'],
    },
    {
      id: 2,
      heading: 'Contact Us',
      links: ['+1 (555) 123-4567', 'info@solarkon.com'],
    },
  ]);

  const [socialLinks, setSocialLinks] = useState([
    { id: 1, platform: 'Facebook', url: 'https://facebook.com/solarkon' },
    { id: 2, platform: 'Twitter', url: 'https://twitter.com/solarkon' },
    { id: 3, platform: 'Instagram', url: 'https://instagram.com/solarkon' },
    { id: 4, platform: 'LinkedIn', url: 'https://linkedin.com/company/solarkon' },
  ]);

  const [footerDescription, setFooterDescription] = useState(
    'SOLARKON is a leading provider of solar energy solutions, helping homeowners, businesses, and communities transition to clean, renewable power.'
  );

  const addNavbarItem = () => {
    const newId = Math.max(...navbarItems.map((i) => i.id), 0) + 1;
    setNavbarItems([...navbarItems, { id: newId, label: 'New Item', path: '/' }]);
  };

  const removeNavbarItem = (id) => {
    setNavbarItems(navbarItems.filter((item) => item.id !== id));
  };

  const addFooterSection = () => {
    const newId = Math.max(...footerSections.map((s) => s.id), 0) + 1;
    setFooterSections([
      ...footerSections,
      { id: newId, heading: 'New Section', links: [] },
    ]);
  };

  const removeFooterSection = (id) => {
    setFooterSections(footerSections.filter((section) => section.id !== id));
  };

  const addSocialLink = () => {
    const newId = Math.max(...socialLinks.map((l) => l.id), 0) + 1;
    setSocialLinks([...socialLinks, { id: newId, platform: 'New Platform', url: '' }]);
  };

  const removeSocialLink = (id) => {
    setSocialLinks(socialLinks.filter((link) => link.id !== id));
  };

  return (
    <div>
      <div className="mb-4">
        <h2 className="fw-bold mb-2" style={{ color: '#2D5016', fontSize: '1.75rem' }}>
          Navbar & Footer Content Management
        </h2>
        <p className="text-muted mb-0">
          Manage the navigation menu and footer content for your user-facing website
        </p>
      </div>

      {/* Navbar Management */}
      <div
        className="rounded-4 p-4 p-md-5 surface-card mb-4"
        style={{
          backgroundColor: '#ffffff',
          border: '1px solid rgba(34, 197, 94, 0.15)',
        }}
      >
        <div className="d-flex align-items-center justify-content-between mb-4">
          <h3 className="fw-bold mb-0" style={{ color: '#2D5016' }}>
            Navbar Menu Items
          </h3>
          <button
            className="btn btn-pill d-inline-flex align-items-center gap-2"
            style={{ backgroundColor: '#2D5016', color: '#ffffff' }}
            onClick={addNavbarItem}
          >
            <FontAwesomeIcon icon={faPlus} />
            Add Item
          </button>
        </div>

        <div className="row g-3">
          {navbarItems.map((item) => (
            <div key={item.id} className="col-md-6">
              <div
                className="p-3 rounded-3 border d-flex align-items-center justify-content-between"
                style={{ backgroundColor: '#f9fafb' }}
              >
                <div className="flex-grow-1 me-3">
                  <input
                    type="text"
                    className="form-control form-control-sm mb-2 rounded-3"
                    defaultValue={item.label}
                    placeholder="Menu Label"
                  />
                  <input
                    type="text"
                    className="form-control form-control-sm rounded-3"
                    defaultValue={item.path}
                    placeholder="/path"
                  />
                </div>
                <button
                  className="btn btn-sm rounded-pill"
                  style={{ backgroundColor: '#FEE2E2', color: '#DC2626', border: 'none' }}
                  onClick={() => removeNavbarItem(item.id)}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Sections */}
      <div
        className="rounded-4 p-4 p-md-5 surface-card mb-4"
        style={{
          backgroundColor: '#ffffff',
          border: '1px solid rgba(34, 197, 94, 0.15)',
        }}
      >
        <div className="d-flex align-items-center justify-content-between mb-4">
          <h3 className="fw-bold mb-0" style={{ color: '#2D5016' }}>
            Footer Sections
          </h3>
          <button
            className="btn btn-pill d-inline-flex align-items-center gap-2"
            style={{ backgroundColor: '#2D5016', color: '#ffffff' }}
            onClick={addFooterSection}
          >
            <FontAwesomeIcon icon={faPlus} />
            Add Section
          </button>
        </div>

        <div className="row g-4">
          {footerSections.map((section) => (
            <div key={section.id} className="col-md-6">
              <div
                className="p-4 rounded-3 border"
                style={{ backgroundColor: '#f9fafb' }}
              >
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="text"
                    className="form-control form-control-sm fw-bold rounded-3"
                    defaultValue={section.heading}
                    placeholder="Section Heading"
                    style={{ maxWidth: '200px' }}
                  />
                  <button
                    className="btn btn-sm rounded-pill"
                    style={{ backgroundColor: '#FEE2E2', color: '#DC2626', border: 'none' }}
                    onClick={() => removeFooterSection(section.id)}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
                <div className="d-flex flex-column gap-2">
                  {section.links.map((link, idx) => (
                    <input
                      key={idx}
                      type="text"
                      className="form-control form-control-sm rounded-3"
                      defaultValue={link}
                      placeholder="Link text"
                    />
                  ))}
                  <button
                    className="btn btn-sm rounded-pill mt-2"
                    style={{ backgroundColor: '#E1F6E8', color: '#2D5016', border: 'none' }}
                    onClick={() => {
                      const updated = footerSections.map((s) =>
                        s.id === section.id
                          ? { ...s, links: [...s.links, 'New Link'] }
                          : s
                      );
                      setFooterSections(updated);
                    }}
                  >
                    <FontAwesomeIcon icon={faPlus} className="me-2" />
                    Add Link
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Description */}
      <div
        className="rounded-4 p-4 p-md-5 surface-card mb-4"
        style={{
          backgroundColor: '#ffffff',
          border: '1px solid rgba(34, 197, 94, 0.15)',
        }}
      >
        <h3 className="fw-bold mb-3" style={{ color: '#2D5016' }}>
          Footer Description
        </h3>
        <textarea
          className="form-control rounded-3"
          rows="3"
          defaultValue={footerDescription}
          onChange={(e) => setFooterDescription(e.target.value)}
        />
      </div>

      {/* Social Links */}
      <div
        className="rounded-4 p-4 p-md-5 surface-card"
        style={{
          backgroundColor: '#ffffff',
          border: '1px solid rgba(34, 197, 94, 0.15)',
        }}
      >
        <div className="d-flex align-items-center justify-content-between mb-4">
          <h3 className="fw-bold mb-0" style={{ color: '#2D5016' }}>
            Social Media Links
          </h3>
          <button
            className="btn btn-pill d-inline-flex align-items-center gap-2"
            style={{ backgroundColor: '#2D5016', color: '#ffffff' }}
            onClick={addSocialLink}
          >
            <FontAwesomeIcon icon={faPlus} />
            Add Link
          </button>
        </div>

        <div className="row g-3">
          {socialLinks.map((link) => (
            <div key={link.id} className="col-md-6">
              <div
                className="p-3 rounded-3 border d-flex align-items-center gap-3"
                style={{ backgroundColor: '#f9fafb' }}
              >
                <input
                  type="text"
                  className="form-control form-control-sm rounded-3"
                  defaultValue={link.platform}
                  placeholder="Platform name"
                  style={{ flex: '0 0 150px' }}
                />
                <input
                  type="url"
                  className="form-control form-control-sm rounded-3 flex-grow-1"
                  defaultValue={link.url}
                  placeholder="https://..."
                />
                <button
                  className="btn btn-sm rounded-pill"
                  style={{ backgroundColor: '#FEE2E2', color: '#DC2626', border: 'none' }}
                  onClick={() => removeSocialLink(link.id)}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Save Button */}
      <div className="d-flex justify-content-end mt-4">
        <button
          className="btn btn-pill px-5"
          style={{ backgroundColor: '#2D5016', color: '#ffffff' }}
        >
          Save All Changes
        </button>
      </div>
    </div>
  );
}

export default NavbarFooterContent;

