import React, { useState } from 'react';
import PageContainer from '../../components/PageContainer/PageContainer';
import { boardData } from '../../data/board';
import { formatProfileName } from '../../utils/formatProfileName';
import './PastTermsBoard.css';

const PastTermMemberMedallion = ({ member }) => {
  const [imgError, setImgError] = useState(false);
  const name = member.name;
  const designationEnglish = member.position || member.positionTamil;

  return (
    <div className="past-term-member-card">
      <div className="past-term-avatar-frame">
        {member.image && !imgError ? (
          <div className="past-term-avatar-circle">
            <img
              src={member.image}
              alt={name}
              className="past-term-avatar-img"
              onError={() => setImgError(true)}
            />
          </div>
        ) : (
          <div className="past-term-avatar-placeholder">
            <svg className="past-term-placeholder-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </div>
        )}

        {/* Asymmetrical Dual Crescent Arcs: Maroon Bottom-Left, Gold Top-Right */}
        <svg className="past-term-arcs-svg" viewBox="0 0 140 140" aria-hidden="true">
          <defs>
            <linearGradient id="ptMaroonArc" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4D0612" />
              <stop offset="50%" stopColor="#7D0C1E" />
              <stop offset="100%" stopColor="#4D0612" />
            </linearGradient>
            <linearGradient id="ptGoldArc" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E6C25B" />
              <stop offset="50%" stopColor="#FFF6CC" />
              <stop offset="100%" stopColor="#C89B2B" />
            </linearGradient>
          </defs>

          {/* Maroon Arc on Bottom-Left */}
          <path
            d="M 55.5 124.1 L 51.3 123.4 L 47.0 122.4 L 42.8 121.1 L 38.7 119.4 L 34.8 117.3 L 30.9 114.9 L 27.3 112.2 L 23.9 109.1 L 20.8 105.8 L 17.9 102.1 L 15.4 98.2 L 13.2 94.1 L 11.4 89.8 L 10.0 85.3 L 8.9 80.8 L 8.3 76.1 L 8.1 71.4 L 8.4 66.8 L 9.0 62.2 L 10.1 57.6 L 11.5 53.2 L 13.3 49.0 L 15.5 45.0 L 17.9 41.1 L 20.7 37.6 L 23.7 34.3 L 27.0 31.3 L 30.5 28.6 L 34.1 26.2 L 37.9 24.1 L 34.5 26.7 L 31.3 29.5 L 28.4 32.5 L 25.7 35.8 L 23.2 39.2 L 21.0 42.9 L 19.1 46.6 L 17.5 50.5 L 16.2 54.6 L 15.2 58.7 L 14.5 62.9 L 14.1 67.1 L 14.0 71.3 L 14.3 75.5 L 14.9 79.7 L 15.7 83.9 L 16.9 87.9 L 18.5 91.9 L 20.3 95.7 L 22.3 99.4 L 24.7 102.9 L 27.3 106.2 L 30.2 109.4 L 33.3 112.3 L 36.6 114.9 L 40.0 117.3 L 43.7 119.4 L 47.5 121.3 L 51.5 122.8 L 55.5 124.1 Z"
            fill="url(#ptMaroonArc)"
          />

          {/* Gold Arc on Top-Right */}
          <path
            d="M 84.5 15.9 L 88.7 16.6 L 93.0 17.6 L 97.2 18.9 L 101.3 20.6 L 105.2 22.7 L 109.1 25.1 L 112.7 27.8 L 116.1 30.9 L 119.2 34.2 L 122.1 37.9 L 124.6 41.8 L 126.8 45.9 L 128.6 50.2 L 130.0 54.7 L 131.1 59.2 L 131.7 63.9 L 131.9 68.6 L 131.6 73.2 L 131.0 77.8 L 129.9 82.4 L 128.5 86.8 L 126.7 91.0 L 124.5 95.0 L 122.1 98.9 L 119.3 102.4 L 116.3 105.7 L 113.0 108.7 L 109.5 111.4 L 105.9 113.8 L 102.1 115.9 L 105.5 113.3 L 108.7 110.5 L 111.6 107.5 L 114.3 104.2 L 116.8 100.8 L 119.0 97.1 L 120.9 93.4 L 122.5 89.5 L 123.8 85.4 L 124.8 81.3 L 125.5 77.1 L 125.9 72.9 L 126.0 68.7 L 125.7 64.5 L 125.1 60.3 L 124.3 56.1 L 123.1 52.1 L 121.5 48.1 L 119.7 44.3 L 117.7 40.6 L 115.3 37.1 L 112.7 33.8 L 109.8 30.6 L 106.7 27.7 L 103.4 25.1 L 100.0 22.7 L 96.3 20.6 L 92.5 18.7 L 88.5 17.2 L 84.5 15.9 Z"
            fill="url(#ptGoldArc)"
          />
        </svg>
      </div>

      <h3 className="past-term-member-name">{formatProfileName(name)}</h3>
      <span className="past-term-member-designation">{designationEnglish}</span>
      <div className="past-term-gold-dash" aria-hidden="true" />
    </div>
  );
};

const PastTermsBoard = () => {
  const [selectedTerm, setSelectedTerm] = useState('all');

  const pastTerms = boardData.pastTerms || [];

  const displayedTerms = selectedTerm === 'all'
    ? pastTerms.map((term, originalIdx) => ({ ...term, originalIdx }))
    : pastTerms
        .map((term, originalIdx) => ({ ...term, originalIdx }))
        .filter((item) => item.originalIdx.toString() === selectedTerm);

  return (
    <PageContainer className="past-terms-page-container">
      <div className="past-terms-showcase-container">
        {/* Top-Left Maroon & Gold Ribbon */}
        <div className="past-terms-ribbon-tl" aria-hidden="true">
          <svg
            className="past-terms-corner-ribbon-tl"
            viewBox="0 0 440 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="ptMaroonGradTL1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#44030E" />
                <stop offset="38%" stopColor="#780C20" />
                <stop offset="82%" stopColor="#550715" />
                <stop offset="100%" stopColor="#36020A" />
              </linearGradient>
              <linearGradient id="ptMaroonGradTL2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8C1328" />
                <stop offset="55%" stopColor="#630919" />
                <stop offset="100%" stopColor="#3C040E" />
              </linearGradient>
              <linearGradient id="ptGoldGradTL1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFF2B8" />
                <stop offset="25%" stopColor="#E2BB55" />
                <stop offset="50%" stopColor="#FFF5CC" />
                <stop offset="75%" stopColor="#C69528" />
                <stop offset="100%" stopColor="#7E540C" />
              </linearGradient>
              <linearGradient id="ptGoldGradTL2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#E9C465" />
                <stop offset="45%" stopColor="#FFF1B8" />
                <stop offset="75%" stopColor="#D4A738" />
                <stop offset="100%" stopColor="#9C6E15" />
              </linearGradient>
              <filter id="ptRibbonShadowTL" x="-20%" y="-20%" width="150%" height="150%">
                <feDropShadow dx="3" dy="8" stdDeviation="12" floodColor="#3B030D" floodOpacity="0.36" />
              </filter>
            </defs>

            <path
              d="M0,0 L340,0 C275,55 180,95 120,148 C65,190 28,245 0,295 Z"
              fill="url(#ptMaroonGradTL1)"
            />
            <path
              d="M0,270 C28,220 72,172 125,135 C188,88 275,50 350,0 L378,0 C295,52 200,95 138,145 C80,190 32,248 0,300 Z"
              fill="url(#ptGoldGradTL1)"
              filter="url(#ptRibbonShadowTL)"
            />
            <path
              d="M0,0 L255,0 C202,42 140,75 92,115 C48,152 20,198 0,238 Z"
              fill="url(#ptMaroonGradTL2)"
            />
            <path
              d="M0,238 C20,198 48,152 92,115 C140,75 202,42 255,0 L270,0 C212,45 150,78 102,120 C56,156 24,205 0,246 Z"
              fill="url(#ptGoldGradTL2)"
            />
          </svg>
        </div>

        {/* Bottom-Right Maroon & Gold Ribbon */}
        <div className="past-terms-ribbon-br" aria-hidden="true">
          <svg
            className="past-terms-corner-ribbon-br"
            viewBox="0 0 440 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="ptMaroonGradBR1" x1="100%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#44030E" />
                <stop offset="38%" stopColor="#780C20" />
                <stop offset="82%" stopColor="#550715" />
                <stop offset="100%" stopColor="#36020A" />
              </linearGradient>
              <linearGradient id="ptMaroonGradBR2" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8C1328" />
                <stop offset="55%" stopColor="#630919" />
                <stop offset="100%" stopColor="#3C040E" />
              </linearGradient>
              <linearGradient id="ptGoldGradBR1" x1="100%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#FFF2B8" />
                <stop offset="25%" stopColor="#E2BB55" />
                <stop offset="50%" stopColor="#FFF5CC" />
                <stop offset="75%" stopColor="#C69528" />
                <stop offset="100%" stopColor="#7E540C" />
              </linearGradient>
              <linearGradient id="ptGoldGradBR2" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#E9C465" />
                <stop offset="45%" stopColor="#FFF1B8" />
                <stop offset="75%" stopColor="#D4A738" />
                <stop offset="100%" stopColor="#9C6E15" />
              </linearGradient>
              <filter id="ptRibbonShadowBR" x="-20%" y="-20%" width="150%" height="150%">
                <feDropShadow dx="-3" dy="-8" stdDeviation="12" floodColor="#3B030D" floodOpacity="0.36" />
              </filter>
            </defs>

            <path
              d="M440,300 L100,300 C165,245 260,205 320,152 C375,110 412,55 440,5 Z"
              fill="url(#ptMaroonGradBR1)"
            />
            <path
              d="M440,30 C412,80 368,128 315,165 C252,212 165,250 90,300 L62,300 C145,248 240,205 302,155 C360,110 408,52 440,0 Z"
              fill="url(#ptGoldGradBR1)"
              filter="url(#ptRibbonShadowBR)"
            />
            <path
              d="M440,300 L185,300 C238,258 300,225 348,185 C392,148 420,102 440,62 Z"
              fill="url(#ptMaroonGradBR2)"
            />
            <path
              d="M440,62 C420,102 392,148 348,185 C300,225 238,258 185,300 L170,300 C228,255 290,222 338,180 C384,144 416,95 440,54 Z"
              fill="url(#ptGoldGradBR2)"
            />
          </svg>
        </div>

        {/* Delicate Guilloche Background Curves */}
        <div className="past-terms-bg-waves-wrapper" aria-hidden="true">
          <svg
            className="past-terms-bg-waves"
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
        <div className="past-terms-showcase-inner">
          {/* Header */}
          <div className="past-terms-header-luxury">
            <div className="past-terms-emblem-badge">
              <img
                src="/assets/logo.png"
                alt="FATIA Logo"
                className="past-terms-fatia-logo"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
            <div className="past-terms-tag">
              <span className="past-terms-tag-pill">Legacy & Leadership History</span>
            </div>
            <h1 className="past-terms-page-title">FATIA Past Term Board Members</h1>
            <p className="past-terms-page-subtitle">
              Honouring former Executive Presidents, General Secretaries, and Treasurers across past historic terms of FATIA.
            </p>
            <div className="past-terms-gold-divider" aria-hidden="true">
              <span className="gold-div-line left" />
              <span className="gold-div-star">★</span>
              <span className="gold-div-line right" />
            </div>
          </div>

          {/* Luxury Filter Pills */}
          <div className="past-terms-filter-bar-luxury">
            <button
              type="button"
              className={`past-term-filter-pill ${selectedTerm === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedTerm('all')}
            >
              All Terms ({pastTerms.length})
            </button>
            {pastTerms.map((term, idx) => (
              <button
                key={idx}
                type="button"
                className={`past-term-filter-pill ${selectedTerm === idx.toString() ? 'active' : ''}`}
                onClick={() => setSelectedTerm(idx.toString())}
              >
                {term.termTitle}
              </button>
            ))}
          </div>

          {/* Term-wise Sections */}
          <div className="past-terms-list-luxury">
            {displayedTerms.map((termGroup) => {
              const termNum = termGroup.originalIdx + 1;
              const count = termGroup.members.length;
              return (
                <section key={termGroup.originalIdx} className="past-term-section-luxury">
                  {/* Term Header */}
                  <div className="past-term-header-luxury">
                    <div className="past-term-num-badge">TERM {termNum}</div>
                    <h2 className="past-term-title-luxury">{termGroup.termTitle}</h2>
                    <p className="past-term-desc-luxury">
                      Executive Leadership Table for {termGroup.termTitle} of FATIA Erode District.
                    </p>
                    <div className="past-term-underline" aria-hidden="true" />
                  </div>

                  {/* Connected Horizontal Timeline Row */}
                  <div className={`past-term-row-wrapper count-${count}`}>
                    {termGroup.members.map((member, mIdx) => (
                      <React.Fragment key={mIdx}>
                        <PastTermMemberMedallion member={member} />
                        {mIdx < termGroup.members.length - 1 && (
                          <div className="past-term-connector" aria-hidden="true">
                            <span className="past-term-connector-line left" />
                            <span className="past-term-connector-dot" />
                            <span className="past-term-connector-line right" />
                          </div>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default PastTermsBoard;
