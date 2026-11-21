import React from 'react';
import { Link } from 'react-router-dom';
import PageContainer from '../../components/PageContainer/PageContainer';
import { fairYears } from '../../data/fair';
import './Fair.css';

const Fair = () => {
  return (
    <PageContainer className="fair-page-container">
      <div className="fair-showcase-container">
        {/* Top-Left Maroon & Gold Ribbon */}
        <div className="fair-ribbon-tl" aria-hidden="true">
          <svg
            className="fair-corner-ribbon-tl"
            viewBox="0 0 440 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="fairMaroonGradTL1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#44030E" />
                <stop offset="38%" stopColor="#780C20" />
                <stop offset="82%" stopColor="#550715" />
                <stop offset="100%" stopColor="#36020A" />
              </linearGradient>
              <linearGradient id="fairMaroonGradTL2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8C1328" />
                <stop offset="55%" stopColor="#630919" />
                <stop offset="100%" stopColor="#3C040E" />
              </linearGradient>
              <linearGradient id="fairGoldGradTL1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFF2B8" />
                <stop offset="25%" stopColor="#E2BB55" />
                <stop offset="50%" stopColor="#FFF5CC" />
                <stop offset="75%" stopColor="#C69528" />
                <stop offset="100%" stopColor="#7E540C" />
              </linearGradient>
              <linearGradient id="fairGoldGradTL2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#E9C465" />
                <stop offset="45%" stopColor="#FFF1B8" />
                <stop offset="75%" stopColor="#D4A738" />
                <stop offset="100%" stopColor="#9C6E15" />
              </linearGradient>
              <filter id="fairRibbonShadowTL" x="-20%" y="-20%" width="150%" height="150%">
                <feDropShadow dx="3" dy="8" stdDeviation="12" floodColor="#3B030D" floodOpacity="0.36" />
              </filter>
            </defs>

            <path
              d="M0,0 L340,0 C275,55 180,95 120,148 C65,190 28,245 0,295 Z"
              fill="url(#fairMaroonGradTL1)"
            />
            <path
              d="M0,270 C28,220 72,172 125,135 C188,88 275,50 350,0 L378,0 C295,52 200,95 138,145 C80,190 32,248 0,300 Z"
              fill="url(#fairGoldGradTL1)"
              filter="url(#fairRibbonShadowTL)"
            />
            <path
              d="M0,0 L255,0 C202,42 140,75 92,115 C48,152 20,198 0,238 Z"
              fill="url(#fairMaroonGradTL2)"
            />
            <path
              d="M0,238 C20,198 48,152 92,115 C140,75 202,42 255,0 L270,0 C212,45 150,78 102,120 C56,156 24,205 0,246 Z"
              fill="url(#fairGoldGradTL2)"
            />
          </svg>
        </div>

        {/* Bottom-Right Maroon & Gold Ribbon */}
        <div className="fair-ribbon-br" aria-hidden="true">
          <svg
            className="fair-corner-ribbon-br"
            viewBox="0 0 440 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="fairMaroonGradBR1" x1="100%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#44030E" />
                <stop offset="38%" stopColor="#780C20" />
                <stop offset="82%" stopColor="#550715" />
                <stop offset="100%" stopColor="#36020A" />
              </linearGradient>
              <linearGradient id="fairMaroonGradBR2" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8C1328" />
                <stop offset="55%" stopColor="#630919" />
                <stop offset="100%" stopColor="#3C040E" />
              </linearGradient>
              <linearGradient id="fairGoldGradBR1" x1="100%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#FFF2B8" />
                <stop offset="25%" stopColor="#E2BB55" />
                <stop offset="50%" stopColor="#FFF5CC" />
                <stop offset="75%" stopColor="#C69528" />
                <stop offset="100%" stopColor="#7E540C" />
              </linearGradient>
              <linearGradient id="fairGoldGradBR2" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#E9C465" />
                <stop offset="45%" stopColor="#FFF1B8" />
                <stop offset="75%" stopColor="#D4A738" />
                <stop offset="100%" stopColor="#9C6E15" />
              </linearGradient>
              <filter id="fairRibbonShadowBR" x="-20%" y="-20%" width="150%" height="150%">
                <feDropShadow dx="-3" dy="-8" stdDeviation="12" floodColor="#3B030D" floodOpacity="0.36" />
              </filter>
            </defs>

            <path
              d="M440,300 L100,300 C165,245 260,205 320,152 C375,110 412,55 440,5 Z"
              fill="url(#fairMaroonGradBR1)"
            />
            <path
              d="M440,30 C412,80 368,128 315,165 C252,212 165,250 90,300 L62,300 C145,248 240,205 302,155 C360,110 408,52 440,0 Z"
              fill="url(#fairGoldGradBR1)"
              filter="url(#fairRibbonShadowBR)"
            />
            <path
              d="M440,300 L185,300 C238,258 300,225 348,185 C392,148 420,102 440,62 Z"
              fill="url(#fairMaroonGradBR2)"
            />
            <path
              d="M440,62 C420,102 392,148 348,185 C300,225 238,258 185,300 L170,300 C228,255 290,222 338,180 C384,144 416,95 440,54 Z"
              fill="url(#fairGoldGradBR2)"
            />
          </svg>
        </div>

        {/* Delicate Guilloche Background Curves */}
        <div className="fair-bg-waves-wrapper" aria-hidden="true">
          <svg
            className="fair-bg-waves"
            viewBox="0 0 1600 900"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M -50 820 C 350 880, 600 640, 920 710 C 1220 780, 1440 660, 1650 580"
              stroke="#C89F48"
              strokeWidth="1.2"
              strokeOpacity="0.16"
            />
            <path
              d="M -50 850 C 380 910, 630 670, 950 740 C 1250 810, 1470 690, 1650 610"
              stroke="#C89F48"
              strokeWidth="1.0"
              strokeOpacity="0.12"
            />
            <path
              d="M -50 320 C 280 260, 650 380, 1050 240 C 1320 140, 1500 200, 1650 130"
              stroke="#C89F48"
              strokeWidth="1.0"
              strokeOpacity="0.12"
            />
          </svg>
        </div>

        {/* Inner Content Wrapper */}
        <div className="fair-showcase-inner">
          {/* Header */}
          <div className="fair-header-luxury">
            <div className="fair-emblem-badge">
              <img
                src="/assets/logo.png"
                alt="FATIA Logo"
                className="fair-fatia-logo"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
            <div className="fair-tag">
              <span className="fair-tag-pill">State Expo Archive</span>
            </div>
            <h1 className="fair-page-title">FATIA Technology Fairs (2013 - 2027)</h1>
            <p className="fair-page-subtitle">
              Exploring landmark editions of Tamil Nadu's premier consumer hardware, IT infrastructure, commerce, and enterprise technology fair.
            </p>
            <div className="fair-gold-divider" aria-hidden="true">
              <span className="gold-div-line left" />
              <span className="gold-div-star">★</span>
              <span className="gold-div-line right" />
            </div>
          </div>

          {/* Year Switcher Pills Bar */}
          <div className="fair-nav-bar-luxury">
            <span className="fair-nav-pill active">
              All Editions ({fairYears.length})
            </span>
            {fairYears.map((year) => (
              <Link key={year} to={`/fair/${year}`} className="fair-nav-pill">
                {year} Fair
              </Link>
            ))}
          </div>

          {/* Overview Banner */}
          <div className="fair-overview-card-luxury">
            <div className="fair-overview-content">
              <div className="fair-overview-badge">PREMIER EXPOSITION</div>
              <h2 className="fair-overview-title">State Technology Fairs (2013 - 2027)</h2>
              <div className="fair-overview-underline" aria-hidden="true" />
              <p className="fair-overview-desc">
                FATIA Technology Fairs unite world-class hardware vendors, regional distributors, commercial leaders, and district association delegates. Select any edition below to view official executive leadership, committee office bearers, event summaries, and member photo highlights.
              </p>
            </div>
            <div className="fair-stats-medallion">
              <div className="fair-stats-number">{fairYears.length}</div>
              <div className="fair-stats-label">Featured Editions</div>
            </div>
          </div>

          {/* Fair Editions Grid */}
          <div className="fair-editions-grid-luxury">
            {fairYears.map((year) => (
              <Link key={year} to={`/fair/${year}`} className="fair-edition-card-luxury">
                <div className="fair-edition-badge-pill">EDITION {year}</div>
                <div className="fair-edition-year-number">{year}</div>
                <h3 className="fair-edition-title">FATIA Fair {year}</h3>
                <p className="fair-edition-subtitle">State Trade & Technology Expo</p>
                <div className="fair-edition-dash" aria-hidden="true" />
                <span className="fair-edition-action">Explore Edition →</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default Fair;
