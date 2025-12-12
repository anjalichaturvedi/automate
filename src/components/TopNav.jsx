// src/components/TopNav.jsx
import React from "react";
import PropTypes from "prop-types";
import { FiSearch, FiBell } from "react-icons/fi";
import "../styles/topnav.css";

export default function TopNav({ onSearch }) {
  return (
    <header className="topnav" role="banner">
      <div className="topnav-inner">

        {/* Left (Spacer or Breadcrumbs) */}
        <div className="topnav-left">
           {/* Add breadcrumbs here later if needed */}
        </div>

        {/* Center Search - The "Pretty" Pill */}
        <div className="topnav-center">
          <div className="search-box">
            <FiSearch size={18} className="search-icon" />
            <input
              type="text"
              placeholder="Search reg, job ID, or customer..."
              aria-label="Search"
              onChange={(e) => onSearch?.(e.target.value)}
            />
          </div>
        </div>

        {/* Right Icons */}
        <div className="topnav-right">
          <button className="icon-btn" aria-label="Notifications">
            <FiBell size={20} />
            <span className="notif-dot" />
          </button>

          <div className="avatar" role="button" aria-label="Profile menu">
            AM
          </div>
        </div>

      </div>
    </header>
  );
}

TopNav.propTypes = {
  onSearch: PropTypes.func,
};