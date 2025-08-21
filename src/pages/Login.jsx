import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const [isEmailValid, setIsEmailValid] = useState(false);

  // Simple email validation function
  const validateEmail = (email) => {
    // Basic regex for email validation
    const emailRegex = /.+@.+\..+/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    
    // Validate email on change
    if (name === 'email') {
      setIsEmailValid(validateEmail(value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Only proceed with login if email is valid (you might want to add password validation too)
    if (isEmailValid) {
        console.log('Login form submitted:', form);
        // Navigate to account settings after successful login
        navigate('/account-settings', { state: { name: 'User', email: form.email } }); // Assuming a placeholder name for now
    } else {
        console.log('Login failed: Invalid email');
        // Optionally show an error message to the user
    }
  };

  return (
    <div className="container">
      <div className="card-signin">
        <div className="card-content">
          <h1 className="welcome-title">SignIn to your<br />PopX account</h1>
          <p className="welcome-desc">Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit,</p>
          <form className="popx-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className="popx-input"
                placeholder=" "
                required
              />
              <label htmlFor="email">Email Address</label>
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
              <label htmlFor="password">Password</label>
            </div>
            <button
              className={`primary-btn login-btn ${isEmailValid ? 'valid-email' : ''}`}
              type="submit"
              style={{ marginTop: 20 }}
              disabled={!isEmailValid} // Disable button if email is not valid
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

