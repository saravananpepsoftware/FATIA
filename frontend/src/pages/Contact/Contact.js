import React, { useState } from 'react';
import Phone3DCanvas from './Phone3DCanvas';
import './Contact.css';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-page-wrapper">
      {/* Background Guilloche Waves SVG */}
      <svg
        className="contact-bg-guilloche"
        viewBox="0 0 1600 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <path
          d="M-100,200 C300,50 600,450 1100,200 C1400,50 1650,300 1800,250"
          stroke="rgba(212, 175, 55, 0.22)"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M-50,350 C350,150 750,550 1200,300 C1500,150 1750,450 1900,380"
          stroke="rgba(212, 175, 55, 0.16)"
          strokeWidth="1.2"
          fill="none"
        />
        <path
          d="M-80,600 C250,400 650,750 1150,550 C1450,400 1700,700 1850,650"
          stroke="rgba(212, 175, 55, 0.18)"
          strokeWidth="1.4"
          fill="none"
        />
      </svg>

      {/* Main Content Container */}
      <div className="contact-main-container">
        {/* Stadium Hero Card */}
        <div className="contact-stadium-card">
          {/* Card Decorative Wave & Curves */}
          <svg
            className="contact-card-bg-wave"
            viewBox="0 0 1200 580"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="maroonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#690917" />
                <stop offset="45%" stopColor="#4D0511" />
                <stop offset="100%" stopColor="#30030B" />
              </linearGradient>
              <linearGradient id="goldRibbonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F7E6AC" />
                <stop offset="45%" stopColor="#DFB03E" />
                <stop offset="100%" stopColor="#A87920" />
              </linearGradient>
              <radialGradient id="phoneBackdropGlow" cx="72%" cy="48%" r="46%">
                <stop offset="0%" stopColor="#8A1327" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#4D0511" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Rich Curved Maroon Right Half */}
            <path
              d="M570,0 C620,110 610,260 560,370 C500,490 420,545 330,580 L1200,580 L1200,0 Z"
              fill="url(#maroonGrad)"
            />

            {/* Soft Ambient Radial Glow Behind Phone */}
            <circle cx="890" cy="300" r="280" fill="url(#phoneBackdropGlow)" />

            {/* Top Right Subtle Golden Contour Accent */}
            <path
              d="M1000,0 C1070,45 1135,90 1200,150"
              stroke="rgba(247, 230, 172, 0.45)"
              strokeWidth="2.5"
              fill="none"
            />

            {/* Golden Ribbon Swoosh across bottom */}
            <path
              d="M340,580 C500,565 680,545 850,515 C1020,480 1120,430 1200,350 L1200,390 C1120,470 1020,515 850,550 C680,575 500,585 340,580 Z"
              fill="url(#goldRibbonGrad)"
            />
            {/* Fine secondary gold contour trim */}
            <path
              d="M330,580 C490,565 675,545 845,515 C1015,480 1115,430 1200,350"
              stroke="#FFF2CD"
              strokeWidth="2.5"
              fill="none"
              opacity="0.9"
            />
          </svg>

          {/* Stadium Inner Grid */}
          <div className="contact-stadium-grid">
            {/* Left Column: Form Details */}
            <div className="contact-left-col">
              <div className="contact-pill-tag">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <span>GET IN TOUCH</span>
              </div>

              <h1 className="contact-hero-title">Contact Us</h1>

              <p className="contact-hero-sub">
                Official administrative office contact details and correspondence portal for the
                Federation of All Trade & Industry Associations of Erode District.
              </p>

              {submitted ? (
                <div className="contact-form-success-banner">
                  <div className="contact-success-circle">✓</div>
                  <div>
                    <h4>Thank You for Contacting Us</h4>
                    <p>Your message has been received. Our team will get in touch shortly.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-stadium-form">
                  {/* Full Name */}
                  <div className="contact-pill-input-box">
                    <span className="contact-input-icon">
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    </span>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Full Name *"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Email Address */}
                  <div className="contact-pill-input-box">
                    <span className="contact-input-icon">
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                    </span>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Email Address *"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="contact-pill-input-box">
                    <span className="contact-input-icon">
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                      </svg>
                    </span>
                    <input
                      type="tel"
                      name="phone"
                      maxLength={10}
                      placeholder="Phone Number (10 Digits)"
                      value={formData.phone}
                      onChange={(e) => {
                        const val = e.target.value.replace(/\D/g, '').slice(0, 10);
                        setFormData({ ...formData, phone: val });
                      }}
                    />
                  </div>

                  {/* Message */}
                  <div className="contact-pill-input-box textarea-box">
                    <span className="contact-input-icon textarea-icon">
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
                      </svg>
                    </span>
                    <textarea
                      name="message"
                      required
                      placeholder="Type your message here..."
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="contact-btn-container">
                    <button type="submit" className="contact-send-btn">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                      </svg>
                      <span>Send Message</span>
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Right Column: 3D Animated Vintage Rotary Phone */}
            <div className="contact-right-col">
              <div className="contact-3d-wrapper">
                <Phone3DCanvas />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row of 4 Contact Cards */}
        <div className="contact-info-cards-row">
          {/* Card 1: Office Address */}
          <div className="contact-info-pill-card">
            <div className="contact-coin-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </div>
            <div className="contact-info-pill-content">
              <span className="contact-info-pill-label">Office Address</span>
              <span className="contact-info-pill-text">
                3, Vivekananda Street, Veerappampalayam,<br />
                Erode - 638 012, Tamil Nadu, India.
              </span>
            </div>
          </div>

          {/* Card 2: Official Phone */}
          <div className="contact-info-pill-card">
            <div className="contact-coin-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
            </div>
            <div className="contact-info-pill-content">
              <span className="contact-info-pill-label">Official Phone</span>
              <a href="tel:9842333356" className="contact-info-pill-val-link">
                +91 98423 33356
              </a>
            </div>
          </div>

          {/* Card 3: Official Email */}
          <div className="contact-info-pill-card">
            <div className="contact-coin-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </div>
            <div className="contact-info-pill-content">
              <span className="contact-info-pill-label">Official Email</span>
              <a href="mailto:fatia.erode@gmail.com" className="contact-info-pill-val-link email">
                fatia.erode@gmail.com
              </a>
            </div>
          </div>

          {/* Card 4: Follow Us */}
          <div className="contact-info-pill-card">
            <div className="contact-coin-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92z"/>
              </svg>
            </div>
            <div className="contact-info-pill-content">
              <span className="contact-info-pill-label">Follow Us</span>
              <div className="contact-social-pill-actions">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-badge-btn fb"
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span>Facebook</span>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-badge-btn insta"
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Wave on Page */}
      <svg
        className="contact-page-bottom-wave"
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M600,120 C850,85 1150,45 1440,0 L1440,120 Z"
          fill="#4D0612"
        />
        <path
          d="M580,120 C840,85 1140,43 1440,0"
          stroke="#E5C77A"
          strokeWidth="3.5"
          fill="none"
        />
      </svg>
    </div>
  );
};

export default Contact;
