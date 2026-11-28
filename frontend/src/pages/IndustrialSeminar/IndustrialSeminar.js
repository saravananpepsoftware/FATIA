import React, { useState, useEffect, useRef, useCallback } from 'react';
import PageContainer from '../../components/PageContainer/PageContainer';
import './IndustrialSeminar.css';

// ============================================================================
// TEMPLATE DATA: Industrial Seminars & Technical Workshops (By Year)
// Replace photo, title, date, venue, speaker, and summary with real event data.
// ============================================================================
const seminarYears = [2027, 2025, 2023, 2018, 2016, 2015, 2013];

const seminarWorkshops = seminarYears.flatMap((year) =>
  [1, 2, 3].map((eventNum) => ({
    id: `seminar-${year}-${eventNum}`,
    year,
    eventNumber: eventNum,
    category: 'Industrial Seminar',
    nameTa: `தொழில் கருத்தரங்கு ${year} - நிகழ்வு ${eventNum}`,
    name: `FATIA Industrial Seminar ${year} — Event ${eventNum}`,
    date: `${year} (Date TBA)`,
    venue: 'Erode District, Tamil Nadu',
    speaker: 'Industry Experts & Keynote Speakers',
    summary: `Template content for ${year} Event ${eventNum}. Event details, speaker highlights, and photographs will be updated here.`,
    photo: ''
  }))
);

const IndustrialSeminar = () => {
  // Year Tab & Slideshow State
  const [selectedYear, setSelectedYear] = useState(seminarYears[0]);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [selectedWorkshopModal, setSelectedWorkshopModal] = useState(null);

  const timerRef = useRef(null);

  const tabWorkshops = seminarWorkshops.filter((item) => item.year === selectedYear);

  // Active workshop item (when items exist)
  const currentWorkshop =
    tabWorkshops.length > 0 ? tabWorkshops[activeSlide] || tabWorkshops[0] : null;

  // Navigate Slideshow
  const nextSlide = useCallback(() => {
    if (tabWorkshops.length === 0) return;
    setActiveSlide((prev) => (prev + 1) % tabWorkshops.length);
  }, [tabWorkshops.length]);

  const prevSlide = useCallback(() => {
    if (tabWorkshops.length === 0) return;
    setActiveSlide((prev) => (prev - 1 + tabWorkshops.length) % tabWorkshops.length);
  }, [tabWorkshops.length]);

  const goToSlide = (index) => {
    setActiveSlide(index);
  };

  const handleYearTabClick = (year) => {
    setSelectedYear(year);
    setActiveSlide(0);
  };

  // Auto-play slideshow timer
  useEffect(() => {
    if (isPlaying && tabWorkshops.length > 1) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, nextSlide, tabWorkshops.length]);

  return (
    <PageContainer className="seminar-page-root">
      {/* Hero Header */}
      <section className="seminar-hero-header">
        <h1 className="seminar-main-heading">
          FATIA Industrial Seminars &amp; Technical Workshops
        </h1>
        <p className="seminar-sub-heading-ta">
          ஈரோடு மாவட்ட தொழில் வணிகர்களுக்கான கருத்தரங்குகள், பயிற்சிப் பட்டறைகள் மற்றும் தொழில் வழிகாட்டல்
        </p>
        <p className="seminar-sub-heading-en">
          Empowering regional traders, manufacturers, and entrepreneurs through expert masterclasses, policy updates, and cutting-edge industrial technology adoption.
        </p>
      </section>

      {/* Year Pill Tabs */}
      <div className="seminar-year-nav-bar">
        {seminarYears.map((y) => (
          <button
            key={y}
            type="button"
            className={`seminar-year-nav-pill ${selectedYear === y ? 'active' : ''}`}
            onClick={() => handleYearTabClick(y)}
          >
            <svg className="seminar-nav-cal-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11zM7 11h5v5H7z" />
            </svg>
            <span>{y} Events</span>
          </button>
        ))}
      </div>

      {/* =====================================================================
          SLIDESHOW SECTION (TEMPLATE)
          ===================================================================== */}
      {tabWorkshops.length > 0 ? (
        <section
          className="seminar-showcase-section"
          onMouseEnter={() => setIsPlaying(false)}
          onMouseLeave={() => setIsPlaying(true)}
        >
          <div className="section-title-tag">
            <span className="tag-line" />
            <span className="tag-text">FEATURED WORKSHOP SPOTLIGHT • சிறப்பு பயிலரங்கம்</span>
            <span className="tag-line" />
          </div>

          {/* Sub-Tabs for Multiple Events in Selected Year (Event 1, Event 2, Event 3...) */}
          {tabWorkshops.length > 1 && (
            <div className="seminar-event-subtabs">
              {tabWorkshops.map((ev, idx) => (
                <button
                  key={ev.id}
                  type="button"
                  className={`seminar-event-subtab-btn ${idx === activeSlide ? 'active' : ''}`}
                  onClick={() => goToSlide(idx)}
                >
                  {`Event ${ev.eventNumber}`}
                </button>
              ))}
            </div>
          )}

          <div className="slideshow-main-card">
            {/* Left Column: Workshop Photo Frame */}
            <div className="slideshow-photo-container">
              {currentWorkshop.photo ? (
                <img
                  key={currentWorkshop.id}
                  src={currentWorkshop.photo}
                  alt={currentWorkshop.name}
                  className="slideshow-photo-img"
                />
              ) : (
                <div className="seminar-photo-placeholder">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                  </svg>
                  <span>{currentWorkshop.year} Event Photo</span>
                  <small>Event image will appear here</small>
                </div>
              )}
              <div className="slideshow-photo-gradient-overlay" />

              {/* Date Tag Floating over Photo */}
              <div className="slideshow-photo-date-tag">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                <span>{currentWorkshop.date}</span>
              </div>

              {/* Slideshow Arrow Navigation on photo */}
              <button
                type="button"
                className="slideshow-nav-btn prev-btn"
                onClick={prevSlide}
                aria-label="Previous Workshop"
                title="Previous Workshop"
              >
                ‹
              </button>
              <button
                type="button"
                className="slideshow-nav-btn next-btn"
                onClick={nextSlide}
                aria-label="Next Workshop"
                title="Next Workshop"
              >
                ›
              </button>
            </div>

            {/* Right Column: Workshop Details that update IN SYNC with photo */}
            <div className="slideshow-details-container">
              <div className="slideshow-meta-header">
                <span className="slideshow-category-badge">
                  {currentWorkshop.category}
                </span>
                <span className="slideshow-counter">
                  {String(activeSlide + 1).padStart(2, '0')} / {String(tabWorkshops.length).padStart(2, '0')}
                </span>
              </div>

              {/* Dynamic Workshop Name */}
              <h2 className="slideshow-workshop-name-ta">
                {currentWorkshop.nameTa}
              </h2>
              <h3 className="slideshow-workshop-name-en">
                {currentWorkshop.name}
              </h3>

              {/* Dynamic Date & Venue Info */}
              <div className="slideshow-info-grid">
                <div className="info-cell">
                  <span className="info-cell-icon">📅</span>
                  <div>
                    <span className="info-cell-label">Workshop Date</span>
                    <span className="info-cell-val highlight-gold">{currentWorkshop.date}</span>
                  </div>
                </div>

                <div className="info-cell">
                  <span className="info-cell-icon">📍</span>
                  <div>
                    <span className="info-cell-label">Venue / Location</span>
                    <span className="info-cell-val">{currentWorkshop.venue}</span>
                  </div>
                </div>

                {currentWorkshop.speaker && (
                  <div className="info-cell full-width">
                    <span className="info-cell-icon">🎙️</span>
                    <div>
                      <span className="info-cell-label">Keynote Speaker / Resource Person</span>
                      <span className="info-cell-val speaker-name">{currentWorkshop.speaker}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Workshop Summary Paragraph */}
              {currentWorkshop.summary && (
                <p className="slideshow-workshop-summary">
                  {currentWorkshop.summary}
                </p>
              )}
            </div>
          </div>
        </section>
      ) : (
        /* Clean Template Placeholder State when no mock content is loaded */
        <section className="seminar-template-placeholder-section">
          <div className="template-placeholder-card">
            <div className="placeholder-icon-halo">
              <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
                <path d="M7 8h10" />
                <path d="M7 12h6" />
              </svg>
            </div>
            <div className="placeholder-badge">TEMPLATE READY • விரைவில் பதிவேற்றப்படும்</div>
            <h2 className="placeholder-title-ta">
              தொழில் கருத்தரங்குகள் &amp; பயிற்சிப் பட்டறைகள்
            </h2>
            <h3 className="placeholder-title-en">
              Industrial Seminars &amp; Technical Workshops
            </h3>
            <p className="placeholder-desc-ta">
              இப்பகுதிக்கான கருத்தரங்கு புகைப்படங்கள், தலைப்பு மற்றும் தேதிகள் விரைவில் இங்கு பதிவேற்றப்படும்.
            </p>
            <p className="placeholder-desc-en">
              The slideshow template is prepared and configured. Workshop photographs, titles, and dates will be displayed here dynamically once official content is uploaded.
            </p>

            <div className="placeholder-feature-pills">
              <span className="feat-pill">📸 Dynamic Workshop Photo Slideshow</span>
              <span className="feat-pill">🏷️ Synchronized Name &amp; Date Updates</span>
              <span className="feat-pill">📍 Venue &amp; Speaker Details</span>
            </div>
          </div>
        </section>
      )}

      {/* Propose a Workshop / Host Seminar CTA Banner */}
      <section className="seminar-cta-banner">
        <div className="cta-banner-content">
          <div className="cta-tag">CALL FOR TOPICS &amp; FACILITATORS</div>
          <h2 className="cta-title">
            உறுப்புச் சங்கங்களுக்கான புதிய தொழில் கருத்தரங்கை ஒருங்கிணைக்க
          </h2>
          <p className="cta-desc">
            If your association or business forum wishes to conduct a specialized technical workshop, GST seminar, or industrial awareness session in collaboration with FATIA, please reach out to our Industrial Development Committee.
          </p>
          <div className="cta-btn-group">
            <a href="tel:9842333356" className="cta-primary-btn">
              📞 Contact Committee: 98423 33356
            </a>
            <a href="mailto:fatia.erode@gmail.com" className="cta-secondary-btn">
              ✉️ Email: fatia.erode@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* Workshop Details Modal */}
      {selectedWorkshopModal && (
        <div
          className="seminar-modal-backdrop"
          onClick={() => setSelectedWorkshopModal(null)}
        >
          <div
            className="seminar-modal-dialog"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="modal-close-btn"
              onClick={() => setSelectedWorkshopModal(null)}
            >
              ✕
            </button>

            <div className="modal-header-banner">
              <img
                src={selectedWorkshopModal.photo}
                alt={selectedWorkshopModal.name}
                className="modal-banner-img"
              />
              <div className="modal-banner-overlay" />
              <div className="modal-banner-info">
                <span className="modal-badge">{selectedWorkshopModal.category}</span>
                <span className="modal-date-pill">📅 {selectedWorkshopModal.date}</span>
                <h3 className="modal-title-ta">{selectedWorkshopModal.nameTa}</h3>
                <h4 className="modal-title-en">{selectedWorkshopModal.name}</h4>
              </div>
            </div>

            <div className="modal-body-content">
              <div className="modal-grid-details">
                <div className="modal-info-box">
                  <strong>📍 Location / Venue:</strong>
                  <p>{selectedWorkshopModal.venue}</p>
                </div>
                {selectedWorkshopModal.speaker && (
                  <div className="modal-info-box">
                    <strong>🎙️ Keynote Speaker:</strong>
                    <p>{selectedWorkshopModal.speaker}</p>
                  </div>
                )}
              </div>

              {selectedWorkshopModal.summary && (
                <div className="modal-section-block">
                  <h5 className="modal-section-heading">Workshop Overview:</h5>
                  <p className="modal-desc-p">{selectedWorkshopModal.summary}</p>
                </div>
              )}

              {selectedWorkshopModal.topics && selectedWorkshopModal.topics.length > 0 && (
                <div className="modal-section-block">
                  <h5 className="modal-section-heading">Key Topics &amp; Takeaways:</h5>
                  <ul className="modal-topics-list">
                    {selectedWorkshopModal.topics.map((topic, i) => (
                      <li key={i}>{topic}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="modal-footer-row">
                {selectedWorkshopModal.participants && (
                  <span className="modal-attendees-tag">
                    👥 {selectedWorkshopModal.participants}
                  </span>
                )}
                <button
                  type="button"
                  className="modal-close-action-btn"
                  onClick={() => setSelectedWorkshopModal(null)}
                >
                  Close Window
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </PageContainer>
  );
};

export default IndustrialSeminar;
