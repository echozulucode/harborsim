import { useState } from 'react';
import Login from './Login';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Status from './Status';
import ConfigurationView from './ConfigurationView';
import './App.css';

function App() {
  const [token, setToken] = useState<string | null>(localStorage.getItem('token'));
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeView, setActiveView] = useState('');

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
      <header className="navbar">
      <Navbar token={token} logout={handleLogout} />
      </header>
      <div className="main-layout">
        <Sidebar
          collapsed={sidebarCollapsed}
          toggleSidebar={toggleSidebar}
          activeView={activeView}
          setActiveView={setActiveView}
        />
        <main className="content">
          {token ? (
            activeView === 'status' ? (
              <Status />
            ) : activeView === 'configuration' ? (
              <ConfigurationView sidebarCollapsed={sidebarCollapsed} />
            ) : (
              <div className="p-8">
                <h2>Welcome to HarborSim</h2>
                <p>Select an option from the sidebar to get started.</p>
              </div>
            )
          ) : (
            <Login setToken={handleSetToken} />
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
