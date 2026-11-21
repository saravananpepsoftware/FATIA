import React, { useState, useEffect, useRef, useCallback } from 'react';
import PageContainer from '../../components/PageContainer/PageContainer';
import './IndustrialSeminar.css';

// ============================================================================
// TEMPLATE DATA: Industrial Seminars & Technical Workshops
// (Empty array: Content will be populated once the user uploads real data)
// ============================================================================
const seminarWorkshops = [];

const IndustrialSeminar = () => {
  // Slideshow State: active slide index
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedWorkshopModal, setSelectedWorkshopModal] = useState(null);

  const timerRef = useRef(null);

  // Active workshop item (when items exist)
  const currentWorkshop = seminarWorkshops.length > 0 ? seminarWorkshops[activeSlide] : null;

  // Navigate Slideshow
  const nextSlide = useCallback(() => {
    if (seminarWorkshops.length === 0) return;
    setActiveSlide((prev) => (prev + 1) % seminarWorkshops.length);
  }, []);

  const prevSlide = useCallback(() => {
    if (seminarWorkshops.length === 0) return;
    setActiveSlide((prev) => (prev - 1 + seminarWorkshops.length) % seminarWorkshops.length);
  }, []);

  const goToSlide = (index) => {
    setActiveSlide(index);
  };

  // Auto-play slideshow timer
  useEffect(() => {
    if (isPlaying && seminarWorkshops.length > 1) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, nextSlide]);

  // Categories list
  const categories = [
    'All',
    'MSME & Automation',
    'Taxation & Finance',
    'Export & Global Trade',
    'Clean Energy & Power',
    'Safety & Compliance',
    'Digital Business'
  ];

  // Filtered workshops for directory
  const filteredWorkshops = seminarWorkshops.filter((item) => {
    const matchesCat = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.nameTa.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.speaker.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.date.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <PageContainer className="seminar-page-root">
      {/* Hero Header */}
      <section className="seminar-hero-header">
        <div className="seminar-top-badge">
          <span className="badge-glow-dot" />
          <span>KNOWLEDGE SHARING &amp; TECHNICAL EMPOWERMENT • தொழில் கருத்தரங்குகள்</span>
        </div>
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

      {/* =====================================================================
          SLIDESHOW SECTION (TEMPLATE)
          ===================================================================== */}
      {seminarWorkshops.length > 0 ? (
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

          <div className="slideshow-main-card">
            {/* Left Column: Workshop Photo Frame */}
            <div className="slideshow-photo-container">
              <img
                key={currentWorkshop.id}
                src={currentWorkshop.photo}
                alt={currentWorkshop.name}
                className="slideshow-photo-img"
              />
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
                  {String(activeSlide + 1).padStart(2, '0')} / {String(seminarWorkshops.length).padStart(2, '0')}
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

              {/* Action Buttons */}
              <div className="slideshow-action-row">
                <button
                  type="button"
                  className="slideshow-primary-btn"
                  onClick={() => setSelectedWorkshopModal(currentWorkshop)}
                >
                  <span>View Full Details</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>

                <button
                  type="button"
                  className="slideshow-play-pause-btn"
                  onClick={() => setIsPlaying(!isPlaying)}
                  title={isPlaying ? 'Pause Autoplay' : 'Resume Autoplay'}
                >
                  {isPlaying ? (
                    <>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <rect x="6" y="4" width="4" height="16" />
                        <rect x="14" y="4" width="4" height="16" />
                      </svg>
                      <span>Pause</span>
                    </>
                  ) : (
                    <>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="5 3 19 12 5 21 5 3" />
                      </svg>
                      <span>Auto-Play</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Thumbnail Navigation Strip */}
          <div className="slideshow-thumbnails-strip">
            <div className="thumbnail-strip-title">
              <span>SELECT WORKSHOP TO VIEW PHOTO, NAME &amp; DATE:</span>
            </div>
            <div className="thumbnails-grid">
              {seminarWorkshops.map((item, idx) => (
                <button
                  key={item.id}
                  type="button"
                  className={`workshop-thumb-card ${idx === activeSlide ? 'active' : ''}`}
                  onClick={() => goToSlide(idx)}
                >
                  <div className="thumb-photo-wrap">
                    <img src={item.photo} alt={item.name} className="thumb-img" />
                    {idx === activeSlide && <div className="thumb-active-glow" />}
                  </div>
                  <div className="thumb-text-wrap">
                    <span className="thumb-date">{item.date}</span>
                    <span className="thumb-title">{item.name}</span>
                  </div>
                </button>
              ))}
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

      {/* Directory Section (Renders when workshops exist) */}
      {seminarWorkshops.length > 0 && (
        <section className="seminar-directory-section">
          <div className="directory-header-row">
            <div>
              <h2 className="directory-title">
                Complete Seminars &amp; Workshops Archive
              </h2>
              <p className="directory-subtitle">
                Browse past and upcoming industrial programs organized by FATIA and member associations.
              </p>
            </div>

            {/* Search Box */}
            <div className="directory-search-box">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9C7722" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                type="text"
                className="directory-search-input"
                placeholder="Search by topic, speaker, or date..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <button
                  type="button"
                  className="search-clear-btn"
                  onClick={() => setSearchTerm('')}
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Category Filter Tabs */}
          <div className="directory-category-tabs">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`cat-tab-btn ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Directory Cards Grid */}
          <div className="directory-cards-grid">
            {filteredWorkshops.map((item, idx) => (
              <article key={item.id} className="directory-card">
                <div className="dir-card-photo-box">
                  <img src={item.photo} alt={item.name} className="dir-card-photo" loading="lazy" />
                  <span className="dir-card-date-badge">
                    {item.date}
                  </span>
                  <span className="dir-card-cat-badge">
                    {item.category}
                  </span>
                </div>

                <div className="dir-card-body">
                  <h3 className="dir-card-title-ta">{item.nameTa}</h3>
                  <h4 className="dir-card-title-en">{item.name}</h4>

                  <div className="dir-card-meta">
                    <div className="dir-meta-item">
                      <span className="meta-icon">📍</span>
                      <span className="meta-text">{item.venue}</span>
                    </div>
                    {item.speaker && (
                      <div className="dir-meta-item">
                        <span className="meta-icon">🎙️</span>
                        <span className="meta-text speaker-text">{item.speaker}</span>
                      </div>
                    )}
                  </div>

                  {item.summary && (
                    <p className="dir-card-desc">
                      {item.summary}
                    </p>
                  )}

                  <div className="dir-card-footer">
                    <button
                      type="button"
                      className="dir-view-btn"
                      onClick={() => setSelectedWorkshopModal(item)}
                    >
                      View Agenda &amp; Takeaways →
                    </button>
                    <button
                      type="button"
                      className="dir-spotlight-btn"
                      onClick={() => {
                        goToSlide(idx);
                        window.scrollTo({ top: 380, behavior: 'smooth' });
                      }}
                      title="Spotlight in Slideshow"
                    >
                      Spotlight ⎈
                    </button>
                  </div>
                </div>
              </article>
            ))}
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
