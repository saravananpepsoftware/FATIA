import React, { useState } from 'react';
import PageContainer from '../../components/PageContainer/PageContainer';
import './Activities.css';

// ============================================================================
// TEMPLATE DATA: Activities (Year-wise, MSME Activities & Social Activities)
// (Empty array: Content will be populated once the user uploads real data)
// ============================================================================
const activitiesData = [];

const Activities = () => {
  const [selectedType, setSelectedType] = useState('all'); // 'all' | 'msme' | 'social'
  const [selectedYear, setSelectedYear] = useState('all');
  const [lightboxItem, setLightboxItem] = useState(null);

  // Available Years from data
  const years = ['all', ...Array.from(new Set(activitiesData.map((i) => String(i.year)))).sort((a, b) => b - a)];

  // Filtered List
  const filteredActivities = activitiesData.filter((item) => {
    const matchesType = selectedType === 'all' || item.type === selectedType;
    const matchesYear = selectedYear === 'all' || String(item.year) === selectedYear;
    return matchesType && matchesYear;
  });

  // Group by year for organized collage sections
  const availableFilteredYears = Array.from(
    new Set(filteredActivities.map((item) => item.year))
  ).sort((a, b) => b - a);

  return (
    <PageContainer className="activities-page-root">
      {/* Hero Header */}
      <section className="activities-hero-header">
        <div className="activities-top-badge">
          <span className="badge-glow-dot" />
          <span>ONGOING INITIATIVES &amp; FIELD ENGAGEMENTS • கூட்டமைப்பு களப்பணிகள்</span>
        </div>

        <h1 className="activities-main-heading">
          FATIA Key Activities &amp; Engagements
        </h1>
        <p className="activities-sub-heading-ta">
          தொழில் முனைவோர் முன்னேற்றம் மற்றும் சமூக நற்பணிகளுக்கான தொடர் களப்பணிகள்
        </p>
        <p className="activities-sub-heading-en">
          Visual collage archive of FATIA's proactive trade development forums, MSME policy delegations, and impactful humanitarian welfare initiatives across Erode district and Tamil Nadu.
        </p>

        {/* Dual Filter Controls Bar (Visible when data exists) */}
        {activitiesData.length > 0 && (
          <div className="activities-controls-container">
            {/* Activity Type Filters */}
            <div className="activity-type-tabs">
              <button
                type="button"
                className={`type-tab-btn ${selectedType === 'all' ? 'active' : ''}`}
                onClick={() => setSelectedType('all')}
              >
                <span>All Activities</span>
                <span className="type-count">({activitiesData.length})</span>
              </button>
              <button
                type="button"
                className={`type-tab-btn msme-tab ${selectedType === 'msme' ? 'active' : ''}`}
                onClick={() => setSelectedType('msme')}
              >
                <span className="tab-icon">⚙️</span>
                <span>MSME Activities</span>
                <span className="type-count">
                  ({activitiesData.filter((i) => i.type === 'msme').length})
                </span>
              </button>
              <button
                type="button"
                className={`type-tab-btn social-tab ${selectedType === 'social' ? 'active' : ''}`}
                onClick={() => setSelectedType('social')}
              >
                <span className="tab-icon">🤝</span>
                <span>Social Activities</span>
                <span className="type-count">
                  ({activitiesData.filter((i) => i.type === 'social').length})
                </span>
              </button>
            </div>

            {/* Year Selector Pills */}
            {years.length > 1 && (
              <div className="activity-year-pills">
                <span className="year-pills-label">YEAR:</span>
                {years.map((yr) => (
                  <button
                    key={yr}
                    type="button"
                    className={`year-pill-btn ${selectedYear === yr ? 'active' : ''}`}
                    onClick={() => setSelectedYear(yr)}
                  >
                    {yr === 'all' ? 'All Years' : yr}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
      </section>

      {/* =====================================================================
          YEAR-WISE COLLAGE SECTION
          ===================================================================== */}
      {activitiesData.length > 0 ? (
        <section className="activities-collage-container">
          {availableFilteredYears.map((yearNum) => {
            const yearItems = filteredActivities.filter((i) => i.year === yearNum);
            if (yearItems.length === 0) return null;

            return (
              <div key={yearNum} className="year-collage-block">
                {/* Year Section Divider Banner */}
                <div className="year-divider-banner">
                  <div className="year-badge-bubble">
                    <span className="bubble-year">{yearNum}</span>
                    <span className="bubble-label">ACTIVITIES</span>
                  </div>
                  <div className="year-divider-line" />
                  <div className="year-summary-tag">
                    {yearItems.length} Featured Photos &amp; Highlights
                  </div>
                </div>

                {/* Asymmetric Mosaic / Masonry Collage Grid */}
                <div className="collage-grid">
                  {yearItems.map((item) => (
                    <div
                      key={item.id}
                      className={`collage-item ${item.layoutClass} type-${item.type}`}
                      onClick={() => setLightboxItem(item)}
                    >
                      <div className="collage-photo-frame">
                        <img
                          src={item.photo}
                          alt={item.title}
                          className="collage-photo-img"
                          loading="lazy"
                        />
                        <div className="collage-photo-overlay" />

                        {/* Top Badges */}
                        <div className="collage-top-badges">
                          <span className={`activity-type-pill pill-${item.type}`}>
                            {item.type === 'msme' ? '⚙️ MSME Activity' : '🤝 Social Activity'}
                          </span>
                          <span className="activity-date-pill">
                            {item.date}
                          </span>
                        </div>

                        {/* Bottom Caption Overlay */}
                        <div className="collage-caption-box">
                          <h3 className="caption-title-ta">{item.titleTa}</h3>
                          <h4 className="caption-title-en">{item.title}</h4>
                          <div className="caption-meta-row">
                            <span className="caption-venue">📍 {item.venue}</span>
                            <span className="caption-expand-hint">
                              <span>View Photo</span>
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                                <circle cx="11" cy="11" r="8" />
                                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                                <line x1="11" y1="8" x2="11" y2="14" />
                                <line x1="8" y1="11" x2="14" y2="11" />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </section>
      ) : (
        /* Clean Template Placeholder State when no mock content is loaded */
        <section className="activities-template-placeholder-section">
          <div className="template-placeholder-card">
            <div className="placeholder-icon-halo">
              <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
            </div>
            <div className="placeholder-badge">TEMPLATE READY • விரைவில் பதிவேற்றப்படும்</div>
            <h2 className="placeholder-title-ta">
              கூட்டமைப்பு களப்பணிகள் &amp; செயல்பாடுகள்
            </h2>
            <h3 className="placeholder-title-en">
              FATIA MSME &amp; Social Activities Collage
            </h3>
            <p className="placeholder-desc-ta">
              ஆண்டு வாரியான தொழில் முனைவோர் (MSME) செயல்பாடுகள் மற்றும் சமூக நற்பணிகளின் புகைப்படக் தொகுப்பு விரைவில் இங்கு பதிவேற்றப்படும்.
            </p>
            <p className="placeholder-desc-en">
              The year-wise photo collage template is ready. Once official photographs and activity details are provided, they will be organized here in mosaic collage style with MSME and Social activity categorization.
            </p>

            <div className="placeholder-feature-pills">
              <span className="feat-pill">🖼️ Year-Wise Photo Collage Gallery</span>
              <span className="feat-pill">⚙️ MSME Activities Categorization</span>
              <span className="feat-pill">🤝 Social Welfare Activities Categorization</span>
              <span className="feat-pill">🔍 Full-Screen High-Resolution Lightbox</span>
            </div>
          </div>
        </section>
      )}

      {/* Information Box / Contact Bar */}
      <section className="activities-upload-template-banner">
        <div className="template-banner-inner">
          <div className="template-tag">FATIA ADMINISTRATIVE OFFICE</div>
          <h3 className="template-title">
            செயல்பாடுகள் தொடர்பான விபரங்களுக்கு
          </h3>
          <p className="template-desc">
            For correspondence, member association updates, or submitting activity reports, please contact the Federation office at <strong>3, Vivekananda Street, Veerappampalayam, Erode</strong> or call <strong>+91 98423 33356</strong>.
          </p>
        </div>
      </section>

      {/* Lightbox Modal for Full Screen Photo View (Active when item clicked) */}
      {lightboxItem && (
        <div
          className="activity-lightbox-backdrop"
          onClick={() => setLightboxItem(null)}
        >
          <div
            className="activity-lightbox-dialog"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="lightbox-close-btn"
              onClick={() => setLightboxItem(null)}
              aria-label="Close Lightbox"
            >
              ✕
            </button>

            <div className="lightbox-photo-wrap">
              <img
                src={lightboxItem.photo}
                alt={lightboxItem.title}
                className="lightbox-img"
              />
            </div>

            <div className="lightbox-info-pane">
              <div className="lightbox-badge-row">
                <span className={`activity-type-pill pill-${lightboxItem.type}`}>
                  {lightboxItem.type === 'msme' ? '⚙️ MSME Activity' : '🤝 Social Activity'}
                </span>
                <span className="activity-date-pill">
                  📅 {lightboxItem.date}
                </span>
                <span className="lightbox-year-tag">
                  {lightboxItem.year}
                </span>
              </div>

              <h2 className="lightbox-title-ta">{lightboxItem.titleTa}</h2>
              <h3 className="lightbox-title-en">{lightboxItem.title}</h3>

              <div className="lightbox-venue-bar">
                <strong>📍 Venue / Location:</strong> {lightboxItem.venue}
              </div>

              <p className="lightbox-desc">
                {lightboxItem.description}
              </p>

              <div className="lightbox-footer">
                <button
                  type="button"
                  className="lightbox-close-action"
                  onClick={() => setLightboxItem(null)}
                >
                  Close Photo
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </PageContainer>
  );
};

export default Activities;
