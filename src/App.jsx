import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import CreateAccount from './pages/CreateAccount';
import Login from './pages/Login';
import AccountSettings from './pages/AccountSettings';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create-account" element={<CreateAccount />} />
      <Route path="/login" element={<Login />} />
      <Route path="/account-settings" element={<AccountSettings />} />
    </Routes>
  );
}

export default App;
