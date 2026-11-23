import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-root">
      {/* Decorative Top-Left Gold Curve Swoosh */}
      <div className="footer-top-left-curves" aria-hidden="true">
        <svg viewBox="0 0 450 140" preserveAspectRatio="none" className="footer-top-curves-svg">
          <path
            d="M0,15 C140,25 280,75 450,135"
            stroke="rgba(217, 164, 47, 0.45)"
            strokeWidth="1.8"
            fill="none"
          />
          <path
            d="M0,35 C130,45 260,95 420,140"
            stroke="rgba(217, 164, 47, 0.25)"
            strokeWidth="1.2"
            fill="none"
          />
        </svg>
      </div>

      {/* Main Content Area */}
      <div className="footer-main-container">
        {/* Right Background Landmark Sketch Watermark */}
        <div className="footer-landmark-bg" aria-hidden="true">
          <img
            src="/assets/erode-landmark.png"
            alt=""
            className="footer-landmark-img"
          />
        </div>

        <div className="footer-columns-grid">
          {/* Column 1: Brand, Association Titles & Social Links */}
          <div className="footer-brand-col">
            {/* Top Brand Lockup */}
            <Link
              to="/"
              className="footer-brand-lockup"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <div className="footer-logo-circle">
                <img
                  src="/assets/logo.png"
                  alt="FATIA Logo"
                  className="footer-logo-img"
                />
              </div>
              <div className="footer-logo-divider" />
              <div className="footer-brand-text-block">
                <div className="footer-fatia-row">
                  <span className="footer-fatia-name">FATIA</span>
                  <span className="footer-regd-badge">Regd. No: 86/99</span>
                </div>
                <span className="footer-fatia-sub">
                  FEDERATION OF ALL TRADE &amp; INDUSTRY<br />ASSOCIATIONS OF ERODE DISTRICT
                </span>
              </div>
            </Link>

            {/* Full English & Tamil Titles */}
            <div className="footer-association-titles">
              <h3 className="footer-title-en">
                Federation of All Trade &amp; Industry<br />Associations of Erode District
              </h3>
              <p className="footer-title-ta">
                ஈரோடு மாவட்ட அனைத்து தொழில் வணிக<br />சங்கங்களின் கூட்டமைப்பு
              </p>
            </div>

            {/* Follow Us Row */}
            <div className="footer-follow-row">
              <span className="footer-follow-label">Follow Us:</span>
              <div className="footer-social-pills">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-pill pill-facebook"
                  aria-label="Follow us on Facebook"
                >
                  <svg width="17" height="17" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span>Facebook</span>
                </a>

                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-pill pill-instagram"
                  aria-label="Follow us on Instagram"
                >
                  <svg width="17" height="17" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-links-col">
            <h4 className="footer-column-heading">Quick Links</h4>
            <div className="footer-heading-underline" />
            <ul className="footer-nav-list">
              <li>
                <NavLink
                  to="/about"
                  className="footer-nav-link"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  <span className="footer-chevron">&gt;</span>
                  <span>About Us</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/social-welfare"
                  className="footer-nav-link"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  <span className="footer-chevron">&gt;</span>
                  <span>Social Welfare</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/industrial-seminar"
                  className="footer-nav-link"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  <span className="footer-chevron">&gt;</span>
                  <span>Industrial Seminar</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/activities"
                  className="footer-nav-link"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  <span className="footer-chevron">&gt;</span>
                  <span>Activities</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/events"
                  className="footer-nav-link"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  <span className="footer-chevron">&gt;</span>
                  <span>Events</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="footer-nav-link"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  <span className="footer-chevron">&gt;</span>
                  <span>Contact Us</span>
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Column 3: Administrative Office */}
          <div className="footer-admin-col">
            <h4 className="footer-column-heading">Administrative Office</h4>
            <div className="footer-heading-underline" />
            <div className="footer-contact-stack">
              {/* Address */}
              <div className="footer-contact-row">
                <div className="footer-contact-icon-box">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="#610915">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"/>
                  </svg>
                </div>
                <div className="footer-contact-text">
                  3, Vivekananda Street, <strong>Veerappampalayam</strong>,<br />
                  Erode – 638 012, Tamil Nadu, India.
                </div>
              </div>

              {/* Cell Phone */}
              <div className="footer-contact-row">
                <div className="footer-contact-icon-box">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#610915">
                    <path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </div>
                <div className="footer-contact-text">
                  Cell: <a href="tel:9842333356" className="footer-phone-link"><strong>98423 33356</strong></a>
                </div>
              </div>

              {/* Email */}
              <div className="footer-contact-row">
                <div className="footer-contact-icon-box">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#610915" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div className="footer-contact-text">
                  Email: <a href="mailto:fatia.erode@gmail.com" className="footer-email-link"><strong>fatia.erode@gmail.com</strong></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sweeping Dynamic Bottom Maroon Wave & Copyright Ribbon */}
      <div className="footer-bottom-wave-wrapper">
        {/* Dynamic Curved SVG Wave */}
        <svg
          className="footer-bottom-wave-svg"
          viewBox="0 0 1440 90"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="footerMaroonGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3C020A" />
              <stop offset="30%" stopColor="#540512" />
              <stop offset="70%" stopColor="#690918" />
              <stop offset="100%" stopColor="#45020B" />
            </linearGradient>
            <linearGradient id="footerGoldStroke" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#D9A42F" />
              <stop offset="35%" stopColor="#FFEAA7" />
              <stop offset="70%" stopColor="#F5D061" />
              <stop offset="100%" stopColor="#C89222" />
            </linearGradient>
          </defs>

          {/* Sweeping Dark Maroon Fill Wave */}
          <path
            d="M0,45 C280,68 560,78 880,50 C1140,28 1320,12 1440,2 L1440,90 L0,90 Z"
            fill="url(#footerMaroonGrad)"
          />

          {/* Glowing Golden Contour Highlight */}
          <path
            d="M0,45 C280,68 560,78 880,50 C1140,28 1320,12 1440,2"
            stroke="url(#footerGoldStroke)"
            strokeWidth="3.2"
            fill="none"
          />

          {/* Secondary Golden Arc Highlight */}
          <path
            d="M0,35 C280,58 540,70 820,44 C1060,20 1280,6 1440,0"
            stroke="rgba(223, 176, 62, 0.45)"
            strokeWidth="1.2"
            fill="none"
          />
        </svg>

        {/* Fanned Golden Arcs in Bottom-Left */}
        <div className="footer-left-arcs" aria-hidden="true">
          <svg viewBox="0 0 450 160" preserveAspectRatio="none" className="footer-arcs-svg">
            <path
              d="M-20,135 C90,135 200,155 340,160"
              stroke="rgba(217, 164, 47, 0.75)"
              strokeWidth="2.2"
              fill="none"
            />
            <path
              d="M-20,110 C80,110 180,135 300,150"
              stroke="rgba(217, 164, 47, 0.5)"
              strokeWidth="1.5"
              fill="none"
            />
            <path
              d="M-20,85 C70,85 160,118 260,140"
              stroke="rgba(217, 164, 47, 0.3)"
              strokeWidth="1.1"
              fill="none"
            />
          </svg>
        </div>

        {/* Copyright Text Row inside Maroon Wave */}
        <div className="footer-copyright-content">
          <span className="footer-copy-left">
            © {new Date().getFullYear()} FATIA Association (Regd. No: 86/99). All rights reserved.
          </span>
          <span className="footer-copy-divider" aria-hidden="true">|</span>
          <span className="footer-copy-right">
            Federation of All Trade &amp; Industry Associations of Erode District
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
