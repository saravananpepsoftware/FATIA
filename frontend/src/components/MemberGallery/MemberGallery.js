import React, { useState, useEffect } from 'react';
import './MemberGallery.css';

// Golden Laurel Branch SVG Component (cups inward toward title)
const LaurelBranch = ({ flip = false }) => (
  <svg
    className={`gallery-laurel-svg ${flip ? 'flip' : ''}`}
    viewBox="0 0 54 68"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id={`laurelGrad_${flip ? 'r' : 'l'}`} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFF2BD" />
        <stop offset="35%" stopColor="#E5C158" />
        <stop offset="70%" stopColor="#C4922C" />
        <stop offset="100%" stopColor="#8C5C0D" />
      </linearGradient>
    </defs>
    {/* Elegant Curving Stem Cupping Inward */}
    <path
      d="M10,64 C14,46 25,26 46,6"
      stroke={`url(#laurelGrad_${flip ? 'r' : 'l'})`}
      strokeWidth="2.6"
      strokeLinecap="round"
      fill="none"
    />
    {/* Paired Leaves Ascending & Cupping */}
    <path d="M47,5 C41,7 36,2 39,-4 C41,-4 45,-1 47,5 Z" fill={`url(#laurelGrad_${flip ? 'r' : 'l'})`} />
    <path d="M44,8 C45,15 40,19 35,17 C35,13 39,10 44,8 Z" fill={`url(#laurelGrad_${flip ? 'r' : 'l'})`} />
    <path d="M36,17 C29,15 25,20 27,26 C30,26 34,23 36,17 Z" fill={`url(#laurelGrad_${flip ? 'r' : 'l'})`} />
    <path d="M38,23 C39,30 33,34 28,31 C28,27 32,24 38,23 Z" fill={`url(#laurelGrad_${flip ? 'r' : 'l'})`} />
    <path d="M29,31 C22,29 18,34 20,40 C23,40 27,37 29,31 Z" fill={`url(#laurelGrad_${flip ? 'r' : 'l'})`} />
    <path d="M30,37 C31,44 25,48 20,45 C20,41 24,38 30,37 Z" fill={`url(#laurelGrad_${flip ? 'r' : 'l'})`} />
    <path d="M21,45 C14,43 10,48 12,54 C15,54 19,51 21,45 Z" fill={`url(#laurelGrad_${flip ? 'r' : 'l'})`} />
    <path d="M21,52 C22,59 16,62 11,59 C11,55 15,53 21,52 Z" fill={`url(#laurelGrad_${flip ? 'r' : 'l'})`} />
  </svg>
);

const MemberGallery = ({ photos = [], title = 'Photo Highlights', year = '' }) => {
  const displayPhotos = photos && photos.length > 0
    ? photos
    : [1, 2, 3, 4, 5].map((i) => ({ caption: `Expo Moment ${i}` }));

  // Extract clean year for headings and badges
  const cleanYear = year || (title.match(/\d{4}/) ? title.match(/\d{4}/)[0] : '2015');

  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageErrors, setImageErrors] = useState({});

  const totalPhotos = displayPhotos.length;

  useEffect(() => {
    setCurrentIndex(0);
    setImageErrors({});
  }, [cleanYear, totalPhotos]);

  useEffect(() => {
    if (totalPhotos <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPhotos);
    }, 3000);

    return () => clearInterval(timer);
  }, [totalPhotos]);

  const handlePrev = (e) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPhotos) % totalPhotos);
  };

  const handleNext = (e) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPhotos);
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  const handleImageError = (index) => {
    setImageErrors((prev) => ({ ...prev, [index]: true }));
  };

  // Helper to extract clean caption title (e.g. "FATIA Fair 2015 Keynote Session" -> "Keynote Session")
  const getCleanCaption = (rawCaption, fallbackIndex) => {
    if (!rawCaption) return `Expo Moment ${fallbackIndex + 1}`;
    const cleaned = rawCaption.replace(/^(FATIA\s+Fair\s+\d{4}|Fair\s+\d{4})\s*[:-]?\s*/i, '');
    return cleaned.trim() || rawCaption;
  };

  return (
    <div className="member-gallery-luxury-wrapper">
      {/* 1. Header with Golden Subtitle & Laurel Wreaths */}
      <div className="member-gallery-header-luxury">
        <div className="gallery-gold-subtitle">
          <span className="subtitle-rule-line" />
          <span className="subtitle-text">FATIA FAIR</span>
          <span className="subtitle-rule-line" />
        </div>

        <div className="gallery-title-row">
          <LaurelBranch />
          <h2 className="gallery-main-title">
            FATIA Fair <span className="gallery-title-year">{cleanYear}</span> Photo Highlights
          </h2>
          <LaurelBranch flip />
        </div>
      </div>

      {/* 2. Main Carousel Card Stage */}
      <div className="carousel-stadium-card">
        {/* Auto-Slideshow Progress Bar */}
        {totalPhotos > 1 && (
          <div key={currentIndex} className="carousel-autoplay-progress" aria-hidden="true" />
        )}

        {/* Floating Top-Right Photo Counter Badge */}
        <div className="carousel-photo-badge">
          <svg className="badge-camera-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
          </svg>
          <span className="badge-text">
            Photo {currentIndex + 1} of {totalPhotos}
          </span>
        </div>

        {/* Circular Left Navigation Arrow */}
        <button
          type="button"
          className="carousel-nav-btn prev"
          onClick={handlePrev}
          aria-label="Previous photo"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        {/* Circular Right Navigation Arrow */}
        <button
          type="button"
          className="carousel-nav-btn next"
          onClick={handleNext}
          aria-label="Next photo"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

        {/* Big Images Slides Container */}
        <div className="carousel-slides-viewport">
          {displayPhotos.map((photo, idx) => {
            const isError = imageErrors[idx] || !photo?.url;
            const isActive = idx === currentIndex;
            const captionTitle = getCleanCaption(photo?.caption, idx);

            return (
              <div
                key={idx}
                className={`carousel-slide-luxury ${isActive ? 'active' : ''} ${photo?.fitContain ? 'fit-contain' : ''}`}
                aria-hidden={!isActive}
              >
                {!isError ? (
                  <img
                    src={photo.url}
                    alt={photo.caption || `Fair Photo ${idx + 1}`}
                    className="carousel-hero-image"
                    style={photo?.objectPosition ? { objectPosition: photo.objectPosition } : undefined}
                    onError={() => handleImageError(idx)}
                  />
                ) : (
                  <div className="carousel-placeholder-hero">
                    <svg className="carousel-placeholder-icon" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                    </svg>
                    <span className="carousel-placeholder-label">
                      {photo?.caption || `FATIA Fair ${cleanYear} Moment ${idx + 1}`}
                    </span>
                  </div>
                )}

                {/* Luxury Maroon & Gold Ribbon Wave Bottom Overlay */}
                {!photo?.fitContain && (
                  <div className="carousel-bottom-ribbon-overlay">
                  {/* SVG Ribbon Wave with Flowing Gold Curves */}
                  <svg
                    className="carousel-ribbon-wave-svg"
                    viewBox="0 0 1200 240"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <defs>
                      <linearGradient id="maroonRibbonGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#44030E" stopOpacity="0.98" />
                        <stop offset="35%" stopColor="#6C0B1C" stopOpacity="0.96" />
                        <stop offset="70%" stopColor="#4D0512" stopOpacity="0.95" />
                        <stop offset="100%" stopColor="#2E0209" stopOpacity="0.98" />
                      </linearGradient>

                      <linearGradient id="maroonRibbonGrad2" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#5E0918" stopOpacity="0.92" />
                        <stop offset="60%" stopColor="#800D22" stopOpacity="0.88" />
                        <stop offset="100%" stopColor="#45040E" stopOpacity="0.95" />
                      </linearGradient>

                      <linearGradient id="goldRibbonGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#FFF2B8" />
                        <stop offset="30%" stopColor="#E2BB55" />
                        <stop offset="70%" stopColor="#FFF8D6" />
                        <stop offset="100%" stopColor="#C69528" />
                      </linearGradient>

                      <linearGradient id="goldRibbonGrad2" x1="100%" y1="100%" x2="0%" y2="0%">
                        <stop offset="0%" stopColor="#E9C465" />
                        <stop offset="50%" stopColor="#FFF5CE" />
                        <stop offset="100%" stopColor="#9C6E15" />
                      </linearGradient>

                      <filter id="ribbonGlow" x="-10%" y="-10%" width="120%" height="130%">
                        <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#220106" floodOpacity="0.6" />
                      </filter>
                    </defs>

                    {/* Deep Maroon Wave Base */}
                    <path
                      d="M 0 100 C 180 35, 380 125, 640 90 C 840 60, 1040 120, 1200 95 L 1200 240 L 0 240 Z"
                      fill="url(#maroonRibbonGrad1)"
                      filter="url(#ribbonGlow)"
                    />

                    {/* Gold Wave Crest Line */}
                    <path
                      d="M 0 100 C 180 35, 380 125, 640 90 C 840 60, 1040 120, 1200 95"
                      stroke="url(#goldRibbonGrad1)"
                      strokeWidth="3.4"
                      fill="none"
                    />

                    {/* Right Dynamic Swoop Layer */}
                    <path
                      d="M 520 240 C 700 135, 940 185, 1200 80 L 1200 240 Z"
                      fill="url(#maroonRibbonGrad2)"
                    />
                    <path
                      d="M 520 240 C 700 135, 940 185, 1200 80"
                      stroke="url(#goldRibbonGrad1)"
                      strokeWidth="3.0"
                      fill="none"
                    />

                    {/* Secondary Flowing Gold Accent Line */}
                    <path
                      d="M 100 145 C 340 100, 580 190, 920 140 C 1050 120, 1140 150, 1200 145"
                      stroke="url(#goldRibbonGrad2)"
                      strokeWidth="1.8"
                      strokeOpacity="0.85"
                      fill="none"
                    />
                    <path
                      d="M 680 240 C 840 170, 1040 198, 1200 135"
                      stroke="url(#goldRibbonGrad2)"
                      strokeWidth="1.6"
                      strokeOpacity="0.75"
                      fill="none"
                    />
                  </svg>

                  {/* Ribbon Content (Pill, Large Caption Title, Gold Underline) */}
                  <div className="carousel-caption-content">
                    <div className="carousel-caption-pill">
                      FATIA Fair {cleanYear}
                    </div>
                    <h3 className="carousel-caption-title">
                      {captionTitle}
                    </h3>
                    <div className="carousel-caption-underline" aria-hidden="true" />
                  </div>
                </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. Bottom Thumbnail Preview Navigation Strip */}
      <div className="carousel-thumbnails-strip">
        {displayPhotos.map((photo, idx) => {
          const isError = imageErrors[idx] || !photo?.url;
          const isActive = idx === currentIndex;

          return (
            <button
              key={idx}
              type="button"
              className={`carousel-thumb-item ${isActive ? 'active' : ''}`}
              onClick={() => handleThumbnailClick(idx)}
              aria-label={`View photo ${idx + 1}`}
            >
              {!isError ? (
                <img
                  src={photo.url}
                  alt={photo.caption || `Thumbnail ${idx + 1}`}
                  className="carousel-thumb-img"
                  onError={() => handleImageError(idx)}
                />
              ) : (
                <div className="carousel-thumb-placeholder">
                  <svg className="carousel-thumb-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                  </svg>
                  <span>#{idx + 1}</span>
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default MemberGallery;
