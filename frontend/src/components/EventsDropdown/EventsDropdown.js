import React from 'react';
import { NavLink } from 'react-router-dom';
import '../BoardDropdown/BoardDropdown.css';

const EventsDropdown = ({ onItemClick }) => {
  return (
    <div className="board-dropdown-menu">
      <NavLink
        to="/social-welfare"
        className={({ isActive }) =>
          `board-dropdown-item ${isActive ? 'active' : ''}`
        }
        onClick={onItemClick}
      >
        <span>Social Welfare</span>
      </NavLink>

      <NavLink
        to="/industrial-seminar"
        className={({ isActive }) =>
          `board-dropdown-item ${isActive ? 'active' : ''}`
        }
        onClick={onItemClick}
      >
        <span>Industrial Seminar</span>
      </NavLink>
    </div>
  );
};

export default EventsDropdown;
