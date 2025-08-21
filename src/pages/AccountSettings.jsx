import { useLocation, useNavigate } from 'react-router-dom';
import profile from '../assets/educase.png';

function AccountSettings() {
  const location = useLocation();
  const navigate = useNavigate();
  const { name, email } = location.state || { name: 'N/A', email: 'N/A' }; // Default values if state is not passed

  return (
    <div className="container">
      <div className="card-account-settings">
        <div className="card-settings-content">
          <button
            type="button"
            className="back-btn"
            onClick={() => navigate(-1)}
          >
            ← Back
          </button>
          <h1 className="settings-title">Account Settings</h1>
          <div className="profile-section">
            <img src={profile} alt="Profile" className="profile-img" /> {/* Placeholder image */}
            <div className="profile-info">
              <h2 className="profile-name">{name}</h2>
              <p className="profile-email">{email}</p>
            </div>
          </div>
          <p className="profile-description">
            Lorem ipsum dolor sit amet, consectetur Sadipscing<br />
            Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut<br />
            Labore Et Dolore Magna Aliquyam Erat, Sed Diam
          </p>
          {/* Additional settings content can go here */}
        </div>
      </div>
    </div>
  );
}

export default AccountSettings;

