import React from 'react';
import { FaTachometerAlt, FaChartLine, FaCog, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = ({ collapsed, toggleSidebar }: { collapsed: boolean; toggleSidebar: () => void }) => {
  return (
    <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-content">
        <nav>
          <ul>
            <li>
              <a href="#">
                <FaTachometerAlt />
                {!collapsed && <span>Status</span>}
              </a>
            </li>
            <li>
              <a href="#">
                <FaChartLine />
                {!collapsed && <span>Monitoring</span>}
              </a>
            </li>
            <li>
              <a href="#">
                <FaCog />
                {!collapsed && <span>Configuration</span>}
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="sidebar-footer">
        <button onClick={toggleSidebar} className="toggle-btn">
          {collapsed ? <FaChevronRight /> : <FaChevronLeft />}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
