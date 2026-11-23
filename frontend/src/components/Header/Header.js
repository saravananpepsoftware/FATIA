import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import MembersDropdown from '../MembersDropdown/MembersDropdown';
import MobileMembersMenu from '../MobileMembersMenu/MobileMembersMenu';
import BoardDropdown from '../BoardDropdown/BoardDropdown';
import MobileBoardMenu from '../MobileBoardMenu/MobileBoardMenu';
import FairDropdown from '../FairDropdown/FairDropdown';
import MobileFairMenu from '../MobileFairMenu/MobileFairMenu';
import './Header.css';

const navItemsList = [
  { label: 'Home', route: '/' },
  { label: 'About Us', route: '/about' },
  { label: 'Members', route: '/members', hasDropdown: true, dropdownType: 'members' },
  { label: 'Board', route: '/board', hasDropdown: true, dropdownType: 'board' },
  { label: 'Fair', route: '/fair', hasDropdown: true, dropdownType: 'fair' },
  { label: 'Contact Us', route: '/contact' }
];

const Header = () => {
  const [showMembersDropdown, setShowMembersDropdown] = useState(false);
  const [showBoardDropdown, setShowBoardDropdown] = useState(false);
  const [showFairDropdown, setShowFairDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const location = useLocation();

  const isMembersActive =
    location.pathname.startsWith('/members') || location.pathname.includes('honorary');
  const isBoardActive = location.pathname.startsWith('/board');
  const isFairActive = location.pathname.startsWith('/fair');

  return (
    <header className="header-root">
      <div className="header-floating-pill">
        {/* Left Brand Section */}
        <Link
          to="/"
          className="header-brand-section"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="header-logo-badge">
            <img
              src="/assets/logo.png"
              alt="FATIA Logo"
              className="header-logo-img"
            />
          </div>
          <div className="header-brand-divider" />
          <div className="header-brand-text">
            <div className="header-brand-top-row">
              <span className="header-brand-title">FATIA</span>
              <div className="header-brand-meta-text">
                <span className="header-meta-since">Since 1999</span>
                <span className="header-meta-sep">,</span>
                <span className="header-meta-reg">Reg No: 86/99</span>
              </div>
            </div>
            <span className="header-brand-sub">
              FEDERATION OF ALL TRADE &amp; INDUSTRY<br />ASSOCIATIONS OF ERODE DISTRICT
            </span>
          </div>
        </Link>

        {/* Dynamic Sweeping Gold S-Curve Divider */}
        <div className="header-curve-divider" aria-hidden="true">
          <svg
            viewBox="0 0 68 84"
            preserveAspectRatio="none"
            className="header-curve-svg"
          >
            <defs>
              <linearGradient id="curveDarkMaroon" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#2A0105" />
                <stop offset="100%" stopColor="#3D020A" />
              </linearGradient>
              <linearGradient id="goldRibbonNav" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#D9A42F" />
                <stop offset="35%" stopColor="#FFEAA7" />
                <stop offset="70%" stopColor="#F5D061" />
                <stop offset="100%" stopColor="#C89222" />
              </linearGradient>
              <filter id="goldGlow" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="2.5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Darker wine backdrop shape to the left of the curve */}
            <path
              d="M0,0 L64,0 C38,4 32,84 0,84 Z"
              fill="url(#curveDarkMaroon)"
            />

            {/* Glowing gold S-curve */}
            <path
              d="M0,84 C32,84 38,4 64,0"
              stroke="url(#goldRibbonNav)"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
              filter="url(#goldGlow)"
            />
            {/* Specular secondary highlight */}
            <path
              d="M2,84 C34,84 40,4 66,0"
              stroke="rgba(255, 255, 255, 0.65)"
              strokeWidth="1.4"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav">
          <div className="nav-links-group">
            {navItemsList.map((item) => {
              if (item.hasDropdown && item.dropdownType === 'members') {
                return (
                  <div
                    key={item.label}
                    className="nav-item-dropdown-container"
                    onMouseEnter={() => setShowMembersDropdown(true)}
                    onMouseLeave={() => setShowMembersDropdown(false)}
                  >
                    <NavLink
                      to={item.route}
                      className={({ isActive }) =>
                        `nav-link ${isActive || isMembersActive ? 'active' : ''}`
                      }
                      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                      <span>{item.label}</span>
                      <svg
                        className="nav-caret-svg"
                        width="9"
                        height="9"
                        viewBox="0 0 10 10"
                        fill="currentColor"
                      >
                        <path d="M2 3.5L5 6.5L8 3.5H2Z" />
                      </svg>
                    </NavLink>
                    {showMembersDropdown && (
                      <MembersDropdown onItemClick={() => setShowMembersDropdown(false)} />
                    )}
                  </div>
                );
              }

              if (item.hasDropdown && item.dropdownType === 'board') {
                return (
                  <div
                    key={item.label}
                    className="nav-item-dropdown-container"
                    onMouseEnter={() => setShowBoardDropdown(true)}
                    onMouseLeave={() => setShowBoardDropdown(false)}
                  >
                    <NavLink
                      to={item.route}
                      className={({ isActive }) =>
                        `nav-link ${isActive || isBoardActive ? 'active' : ''}`
                      }
                      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                      <span>{item.label}</span>
                      <svg
                        className="nav-caret-svg"
                        width="9"
                        height="9"
                        viewBox="0 0 10 10"
                        fill="currentColor"
                      >
                        <path d="M2 3.5L5 6.5L8 3.5H2Z" />
                      </svg>
                    </NavLink>
                    {showBoardDropdown && (
                      <BoardDropdown onItemClick={() => setShowBoardDropdown(false)} />
                    )}
                  </div>
                );
              }

              if (item.hasDropdown && item.dropdownType === 'fair') {
                return (
                  <div
                    key={item.label}
                    className="nav-item-dropdown-container"
                    onMouseEnter={() => setShowFairDropdown(true)}
                    onMouseLeave={() => setShowFairDropdown(false)}
                  >
                    <NavLink
                      to={item.route}
                      className={({ isActive }) =>
                        `nav-link ${isActive || isFairActive ? 'active' : ''}`
                      }
                      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                      <span>{item.label}</span>
                      <svg
                        className="nav-caret-svg"
                        width="9"
                        height="9"
                        viewBox="0 0 10 10"
                        fill="currentColor"
                      >
                        <path d="M2 3.5L5 6.5L8 3.5H2Z" />
                      </svg>
                    </NavLink>
                    {showFairDropdown && (
                      <FairDropdown onItemClick={() => setShowFairDropdown(false)} />
                    )}
                  </div>
                );
              }

              return (
                <NavLink
                  key={item.label}
                  to={item.route}
                  end={item.route === '/'}
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  {item.label}
                </NavLink>
              );
            })}
          </div>
        </nav>

        {/* Mobile Hamburger Toggle Button */}
        <button
          type="button"
          aria-label="Toggle Navigation Menu"
          className="mobile-hamburger-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <NavLink
            to="/"
            end
            className={({ isActive }) => `mobile-drawer-link ${isActive ? 'active' : ''}`}
            onClick={() => {
              setMobileMenuOpen(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) => `mobile-drawer-link ${isActive ? 'active' : ''}`}
            onClick={() => {
              setMobileMenuOpen(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            About Us
          </NavLink>

          <MobileMembersMenu
            onItemClick={() => {
              setMobileMenuOpen(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />

          <MobileBoardMenu
            onItemClick={() => {
              setMobileMenuOpen(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />

          <MobileFairMenu
            onItemClick={() => {
              setMobileMenuOpen(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />

          <NavLink
            to="/contact"
            className={({ isActive }) => `mobile-drawer-link ${isActive ? 'active' : ''}`}
            onClick={() => {
              setMobileMenuOpen(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            Contact Us
          </NavLink>
        </div>
      )}
    </header>
  );
};

export default Header;
