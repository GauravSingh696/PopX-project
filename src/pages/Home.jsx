import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="card">
        <div className="card-content">
          <h1 className="welcome-title">Welcome to PopX</h1>
          <p className="welcome-desc">
            Lorem ipsum dolor sit amet,<br />
            consectetur adipiscing elit,
          </p>
          <button className="primary-btn" onClick={() => navigate('/create-account')}>Create Account</button>
          <button className="secondary-btn" onClick={() => navigate('/login')}>Already Registered? Login</button>
        </div>
      </div>
    </div>
  );
}

export default Home;

