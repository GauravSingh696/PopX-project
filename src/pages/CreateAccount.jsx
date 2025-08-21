import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function CreateAccount() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    agency: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle account creation logic here
    console.log('Account creation form submitted:', form);
    // Navigate to account settings after successful creation
    navigate('/account-settings', { state: { name: form.fullName, email: form.email } });
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-content">
          <button
            type="button"
            className="back-btn"
            onClick={() => navigate('/')}
          >
            ← Back
          </button>
          <h1 className="welcome-title" style={{ marginBottom: 0, marginTop: 8 }}>
            Create your<br />PopX account
          </h1>
          <form className="popx-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <input
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              className="popx-input"
              placeholder=" "
              required
             />
              <label htmlFor="fullName">Full Name<span>*</span>
               </label>
            </div>
            <div className="input-group">
              <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="popx-input"
              placeholder=" "
              required
              />
              <label htmlFor="phone">Phone Number<span>*</span>
              </label>
              </div>
              <div className="input-group">
                <input
                name="email"
                value={form.email}
                onChange={handleChange}
                className="popx-input"
                placeholder=" "
                required
                />
                <label htmlFor="email">Email Address<span>*</span>
                </label>
                </div>
                <div className="input-group">
                  <input
                  name="password"
                  type="password"
                  value={form.password}
                  onChange={handleChange}
                  className="popx-input"
                  placeholder=" "
                  required
                  />
                  <label htmlFor="password">Password<span>*</span>
                  </label>
                  </div>
                  <div className="input-group">
                    <input
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    className="popx-input"
                    placeholder=" "
                    />
                    <label htmlFor="company">Company Name</label>
                  </div>
            <div className="popx-radio-group">
              <span className="popx-label radio-question">
                Are you an Agency?<sup className="radio-span">*</sup>
              </span>
              <div className="popx-radio-options">
                <label className="popx-radio-label">
                  <input type="radio" name="agency" value="yes" checked={form.agency === 'yes'} onChange={handleChange} />
                  <span className="custom-radio"></span> Yes
                </label>
                <label className="popx-radio-label">
                  <input type="radio" name="agency" value="no" checked={form.agency === 'no'} onChange={handleChange} />
                  <span className="custom-radio"></span> No
                </label>
              </div>
            </div>
            <button className="primary-btn" type="submit" style={{ marginTop: 24 }}>
              Create Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;

