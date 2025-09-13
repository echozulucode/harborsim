import React from 'react';
import { FaSignInAlt, FaSignOutAlt, FaUserCog } from 'react-icons/fa';
import './Navbar.css';

const Navbar = ({ token, logout }: { token: string | null; logout: () => void }) => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="/vite.svg" alt="logo" className="logo" />
        <h3>HarborSim</h3>
      </div>
      <div className="navbar-right">
        {token ? (
          <>
            <button className="icon-button">
              <FaUserCog />
              <span>User Management</span>
            </button>
            <button onClick={logout} className="icon-button">
              <FaSignOutAlt />
              <span>Logout</span>
            </button>
          </>
        ) : (
          <button className="icon-button">
            <FaSignInAlt />
            <span>Login</span>
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
