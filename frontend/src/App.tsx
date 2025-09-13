import { useState } from 'react';
import Login from './Login';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import './App.css';

function App() {
  const [token, setToken] = useState<string | null>(localStorage.getItem('token'));
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const handleSetToken = (token: string) => {
    localStorage.setItem('token', token);
    setToken(token);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken(null);
  };

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className="app">
      <Navbar token={token} logout={handleLogout} />
      <div className="main-layout">
        <Sidebar collapsed={sidebarCollapsed} toggleSidebar={toggleSidebar} />
        <main className="content">
          {token ? (
            <div>
              <h2>Welcome to HarborSim</h2>
              <p>Select an option from the sidebar to get started.</p>
            </div>
          ) : (
            <Login setToken={handleSetToken} />
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
