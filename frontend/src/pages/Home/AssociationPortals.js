import React from 'react';
import { Link } from 'react-router-dom';
import { membersData } from '../../data/members';
import './AssociationPortals.css';

const portalsData = [
  {
    id: 'members',
    title: 'Member Associations',
    description: `Comprehensive registry of all ${membersData.length || 78} member associations with active Head Table office bearers across Tamil Nadu.`,
    link: '/members',
    buttonText: 'View Members Registry',
    buttonStyle: 'maroon',
    isHero: false,
    image: '/assets/portals/members.jpg',
    icon: (
      <svg width="38" height="38" viewBox="0 0 24 24" fill="none">
        <circle cx="9" cy="7" r="3.2" stroke="#780E28" strokeWidth="2" />
        <circle cx="16" cy="10" r="2.6" stroke="#780E28" strokeWidth="1.8" />
        <path d="M3.5 18c0-3 2.5-5.5 5.5-5.5s5.5 2.5 5.5 5.5" stroke="#780E28" strokeWidth="2" strokeLinecap="round" />
        <path d="M13.5 17c0-2.2 1.8-4 4-4s4 1.8 4 4" stroke="#780E28" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    )
  },
  {
    id: 'board',
    title: 'Board of Directors',
    description: 'Key state office bearers including President V.K. Rajamanickam, General Secretary P. Ravichandran, and Directors.',
    link: '/board',
    buttonText: 'View Board Members',
    buttonStyle: 'outline',
    isHero: true,
    image: '/assets/portals/board.jpg',
    icon: (
      <svg width="38" height="38" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="5" r="3" stroke="#FFFFFF" strokeWidth="2" />
        <path d="M12 8v4M6 16v-2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
        <circle cx="6" cy="18" r="2" stroke="#FFFFFF" strokeWidth="2" />
        <circle cx="12" cy="18" r="2" stroke="#FFFFFF" strokeWidth="2" />
        <circle cx="18" cy="18" r="2" stroke="#FFFFFF" strokeWidth="2" />
      </svg>
    )
  },
  {
    id: 'events',
    title: 'Events & Conventions',
    description: 'Stay updated with annual general meetings, trade summits, and executive leadership forums.',
    link: '/events',
    buttonText: 'Explore Events',
    buttonStyle: 'maroon',
    isHero: false,
    image: '/assets/portals/events.jpg',
    icon: (
      <svg width="38" height="38" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="5" width="18" height="16" rx="3" stroke="#780E28" strokeWidth="2" />
        <path d="M16 2v4M8 2v4M3 10h18" stroke="#780E28" strokeWidth="2" strokeLinecap="round" />
        <circle cx="8" cy="15" r="1.3" fill="#780E28" />
        <circle cx="12" cy="15" r="1.3" fill="#780E28" />
        <circle cx="16" cy="15" r="1.3" fill="#780E28" />
      </svg>
    )
  },
  {
    id: 'fair',
    title: 'Technology Fair',
    description: 'Explore landmark state technology fair editions from 2014 to 2027 with photo galleries and committee details.',
    link: '/fair',
    buttonText: 'Explore Fair Archives',
    buttonStyle: 'outline',
    isHero: true,
    image: '/assets/portals/fair.jpg',
    icon: (
      <svg width="38" height="38" viewBox="0 0 24 24" fill="none">
        <path d="M3 9l2-5h14l2 5v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9z" stroke="#FFFFFF" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"/>
        <path d="M3 9c0 1.5 1.5 2.5 3 2.5s3-1 3-2.5c0 1.5 1.5 2.5 3 2.5s3-1 3-2.5c0 1.5 1.5 2.5 3 2.5s3-1 3-2.5" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round"/>
        <path d="M9 21v-6h6v6" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  }
];

const AssociationPortals = () => {
  return (
    <section className="portals-section-root">
      <div className="portals-content-container">
        {/* Background Architectural Landmark Illustration (Erode Iconic Landmark - Preserved) */}
        <div className="portals-landmark-watermark" aria-hidden="true">
          <img
            src="/assets/erode-landmark.png"
            alt="Erode Landmark"
            className="portals-landmark-img"
          />
        </div>

        {/* Section Header */}
        <div className="portals-header-group">
          {/* Explore FATIA Tag (Clean Inline Typography) */}
          <div className="portals-tag-pill">
            <span className="portals-grid-icon" aria-hidden="true">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <rect x="3" y="3" width="7" height="7" rx="1.5" />
                <rect x="14" y="3" width="7" height="7" rx="1.5" />
                <rect x="3" y="14" width="7" height="7" rx="1.5" />
                <rect x="14" y="14" width="7" height="7" rx="1.5" />
              </svg>
            </span>
            <span className="portals-tag-text">EXPLORE FATIA</span>
          </div>

          {/* Section Main Title with Gold Accent Bar */}
          <h2 className="portals-main-title">
            <span className="title-dark-part">Association Portals &amp; </span>
            <span className="title-maroon-part">Information</span>
          </h2>
          <div className="portals-gold-underline" aria-hidden="true" />

          {/* Section Subtitle */}
          <p className="portals-subtitle">
            Direct access to our state network, leadership hierarchy, industry gatherings, and historical annual tech fairs.
          </p>
        </div>

        {/* ========================================================
            DESKTOP JIGSAW PUZZLE INTERLOCKING CARDS (EXACT MATCH)
            ======================================================== */}
        <div className="jigsaw-portals-desktop-wrapper">
          <div className="jigsaw-puzzle-canvas-wrap">
            {/* Jigsaw Vector Artwork Canvas with Clipped Photos and Wave Dividers */}
            <svg
              className="jigsaw-puzzle-svg"
              viewBox="0 0 1200 450"
              preserveAspectRatio="xMidYMid meet"
              aria-hidden="true"
            >
              <defs>
                <filter id="puzzlePieceShadow" x="-5%" y="-5%" width="112%" height="116%">
                  <feDropShadow dx="0" dy="8" stdDeviation="10" floodColor="#3D2008" floodOpacity="0.09" />
                </filter>

                <linearGradient id="puzzleIvoryGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#FFFFFF" />
                  <stop offset="45%" stopColor="#FDFBF7" />
                  <stop offset="100%" stopColor="#F6EEE1" />
                </linearGradient>

                <linearGradient id="puzzleMaroonGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#87122F" />
                  <stop offset="35%" stopColor="#66081F" />
                  <stop offset="100%" stopColor="#440313" />
                </linearGradient>

                <linearGradient id="puzzleGoldWaveGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#C5964E" />
                  <stop offset="40%" stopColor="#FFDF88" />
                  <stop offset="70%" stopColor="#F3D17A" />
                  <stop offset="100%" stopColor="#B5822C" />
                </linearGradient>

                {/* Photo Clipping Paths */}
                {/* Photo 1 Clip */}
                <clipPath id="puzzle-clip-photo-1">
                  <path d="M 20 280 Q 164 310, 308 280 L 308 410 Q 308 430, 288 430 L 44 430 Q 20 430, 20 406 Z" />
                </clipPath>

                {/* Photo 2 Clip */}
                <clipPath id="puzzle-clip-photo-2">
                  <path d="M 308 280 C 375 305, 435 265, 602 280 L 602 410 Q 602 430, 582 430 L 328 430 Q 308 430, 308 410 Z" />
                </clipPath>

                {/* Photo 3 Clip */}
                <clipPath id="puzzle-clip-photo-3">
                  <path d="M 602 280 Q 748 310, 895 280 L 895 410 Q 895 430, 875 430 L 622 430 Q 602 430, 602 410 Z" />
                </clipPath>

                {/* Photo 4 Clip */}
                <clipPath id="puzzle-clip-photo-4">
                  <path d="M 895 280 C 962 305, 1022 265, 1180 280 L 1180 406 Q 1180 430, 1156 430 L 915 430 Q 895 430, 895 410 Z" />
                </clipPath>
              </defs>

              {/* PIECE 1: Member Associations (Ivory, Right Tab) */}
              <g className="puzzle-piece-group piece-1-svg">
                <path
                  d="M 44 40 L 288 40 Q 308 40, 308 60 L 308 162 C 304 171, 320 166, 334 176 C 346 186, 346 204, 334 214 C 320 224, 304 219, 308 228 L 308 410 Q 308 430, 288 430 L 44 430 Q 20 430, 20 406 L 20 64 Q 20 40, 44 40 Z"
                  fill="url(#puzzleIvoryGrad)"
                  stroke="#D4AF37"
                  strokeWidth="1.5"
                  filter="url(#puzzlePieceShadow)"
                />
                <image
                  href="/assets/portals/members.jpg"
                  x="20"
                  y="250"
                  width="330"
                  height="190"
                  preserveAspectRatio="xMidYMid slice"
                  clipPath="url(#puzzle-clip-photo-1)"
                />
                <path
                  d="M 20 280 Q 164 310, 308 280"
                  stroke="url(#puzzleGoldWaveGrad)"
                  strokeWidth="3.5"
                  fill="none"
                />
              </g>

              {/* PIECE 3: Events & Conventions (Ivory, Left Socket, Right Tab) */}
              <g className="puzzle-piece-group piece-3-svg">
                <path
                  d="M 622 40 L 875 40 Q 895 40, 895 60 L 895 162 C 891 171, 907 166, 921 176 C 933 186, 933 204, 921 214 C 907 224, 891 219, 895 228 L 895 410 Q 895 430, 875 430 L 622 430 Q 602 430, 602 410 L 602 228 C 598 219, 614 224, 628 214 C 640 204, 640 186, 628 176 C 614 166, 598 171, 602 162 L 602 60 Q 602 40, 622 40 Z"
                  fill="url(#puzzleIvoryGrad)"
                  stroke="#D4AF37"
                  strokeWidth="1.5"
                  filter="url(#puzzlePieceShadow)"
                />
                <image
                  href="/assets/portals/events.jpg"
                  x="602"
                  y="250"
                  width="330"
                  height="190"
                  preserveAspectRatio="xMidYMid slice"
                  clipPath="url(#puzzle-clip-photo-3)"
                />
                <path
                  d="M 602 280 Q 748 310, 895 280"
                  stroke="url(#puzzleGoldWaveGrad)"
                  strokeWidth="3.5"
                  fill="none"
                />
              </g>

              {/* PIECE 4: Technology Fair (Hero Maroon Piece, Raised Top Tab, Left Socket) */}
              <g className="puzzle-piece-group piece-4-svg">
                <path
                  d="M 915 30 L 1005 30 C 1013 26, 1009 15, 1021 7 C 1029 0, 1045 0, 1053 7 C 1065 15, 1061 26, 1069 30 L 1156 30 Q 1180 30, 1180 50 L 1180 406 Q 1180 430, 1156 430 L 915 430 Q 895 430, 895 410 L 895 228 C 891 219, 907 224, 921 214 C 933 204, 933 186, 921 176 C 907 166, 891 171, 895 162 L 895 50 Q 895 30, 915 30 Z"
                  fill="url(#puzzleMaroonGrad)"
                  stroke="#D4AF37"
                  strokeWidth="1.6"
                  filter="url(#puzzlePieceShadow)"
                />
                <image
                  href="/assets/portals/fair.jpg"
                  x="895"
                  y="250"
                  width="300"
                  height="190"
                  preserveAspectRatio="xMidYMid slice"
                  clipPath="url(#puzzle-clip-photo-4)"
                />
                <path
                  d="M 895 280 C 962 305, 1022 265, 1180 280"
                  stroke="url(#puzzleGoldWaveGrad)"
                  strokeWidth="3.5"
                  fill="none"
                />
              </g>

              {/* PIECE 2: Board of Directors (Hero Maroon Piece, Raised Top Tab, Left Socket, Right Tab) */}
              <g className="puzzle-piece-group piece-2-svg">
                <path
                  d="M 328 30 L 423 30 C 431 26, 427 15, 439 7 C 447 -0, 463 -0, 471 7 C 483 15, 479 26, 487 30 L 582 30 Q 602 30, 602 50 L 602 162 C 598 171, 614 166, 628 176 C 640 186, 640 204, 628 214 C 614 224, 598 219, 602 228 L 602 410 Q 602 430, 582 430 L 328 430 Q 308 430, 308 410 L 308 228 C 304 219, 320 224, 334 214 C 346 204, 346 186, 334 176 C 320 166, 304 171, 308 162 L 308 50 Q 308 30, 328 30 Z"
                  fill="url(#puzzleMaroonGrad)"
                  stroke="#D4AF37"
                  strokeWidth="1.6"
                  filter="url(#puzzlePieceShadow)"
                />
                <image
                  href="/assets/portals/board.jpg"
                  x="308"
                  y="250"
                  width="330"
                  height="190"
                  preserveAspectRatio="xMidYMid slice"
                  clipPath="url(#puzzle-clip-photo-2)"
                />
                <path
                  d="M 308 280 C 375 305, 435 265, 602 280"
                  stroke="url(#puzzleGoldWaveGrad)"
                  strokeWidth="3.5"
                  fill="none"
                />
              </g>
            </svg>

            {/* Accessible HTML Content Grid Overlaid on Jigsaw Pieces */}
            <div className="jigsaw-overlay-grid" aria-hidden="false">
              {portalsData.map((portal) => (
                <div key={portal.id} className={`jigsaw-col-card col-${portal.id}`}>
                  <div className="jigsaw-col-icon" aria-hidden="true">
                    {portal.icon}
                  </div>
                  <h3 className="jigsaw-col-title">{portal.title}</h3>
                  <p className="jigsaw-col-desc">{portal.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Action CTA Buttons Grid Below the Cards */}
          <div className="jigsaw-buttons-grid">
            {portalsData.map((portal) => (
              <div key={portal.id} className="jigsaw-button-col">
                <Link
                  to={portal.link}
                  className={`jigsaw-btn jigsaw-btn-${portal.buttonStyle}`}
                >
                  <span>{portal.buttonText}</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" className="jigsaw-btn-arrow">
                    <path
                      d="M5 12h14M12 5l7 7-7 7"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================
            RESPONSIVE CARD GRID FOR TABLETS & MOBILE (< 992px)
            ======================================================== */}
        <div className="jigsaw-portals-mobile-grid">
          {portalsData.map((portal) => (
            <div key={portal.id} className={`jigsaw-mobile-card ${portal.isHero ? 'mobile-hero-maroon' : 'mobile-ivory'}`}>
              <div className="mobile-card-top-content">
                <div className="mobile-card-icon" aria-hidden="true">
                  {portal.icon}
                </div>
                <h3 className="mobile-card-title">{portal.title}</h3>
                <p className="mobile-card-desc">{portal.description}</p>
              </div>

              <div className="mobile-card-photo-wrap">
                <svg className="mobile-wave-svg" viewBox="0 0 320 28" preserveAspectRatio="none">
                  <path d="M0 14 Q 160 28, 320 14" stroke="#D4AF37" strokeWidth="3" fill="none" />
                </svg>
                <img
                  src={portal.image}
                  alt={portal.title}
                  className="mobile-card-photo"
                  loading="lazy"
                />
              </div>

              <div className="mobile-card-button-wrap">
                <Link
                  to={portal.link}
                  className={`jigsaw-btn jigsaw-btn-${portal.buttonStyle}`}
                >
                  <span>{portal.buttonText}</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" className="jigsaw-btn-arrow">
                    <path
                      d="M5 12h14M12 5l7 7-7 7"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Flowing Silk Ribbon Waves */}
      <div className="portals-bottom-waves" aria-hidden="true">
        <svg viewBox="0 0 1440 160" preserveAspectRatio="none" className="portals-waves-svg">
          <path
            d="M600 160 C850 110, 1050 140, 1250 80 C1340 50, 1400 70, 1440 100 L1440 160 L600 160 Z"
            fill="url(#portalMaroonGrad)"
          />
          <path
            d="M850 160 C1020 115, 1220 135, 1440 70 L1440 160 L850 160 Z"
            fill="#3B020F"
            opacity="0.9"
          />
          <path
            d="M-40 120 C120 145, 260 155, 460 125 C640 95, 800 115, 960 145 L940 160 L-40 160 Z"
            fill="url(#portalGoldGrad)"
          />
          <path
            d="M-30 110 Q220 155, 460 120 T960 130 T1440 95"
            fill="none"
            stroke="#D4AF37"
            strokeWidth="1.6"
            opacity="0.65"
          />
          <path
            d="M-30 118 Q220 163, 470 128 T970 138 T1440 103"
            fill="none"
            stroke="#FFECA8"
            strokeWidth="1.1"
            opacity="0.5"
          />

          <defs>
            <linearGradient id="portalMaroonGrad" x1="0%" y1="0%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#6E0B22" />
              <stop offset="60%" stopColor="#550418" />
              <stop offset="100%" stopColor="#3F0211" />
            </linearGradient>
            <linearGradient id="portalGoldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#C5964E" stopOpacity="0.25" />
              <stop offset="50%" stopColor="#F9E29D" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#B3862D" stopOpacity="0.35" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default AssociationPortals;
