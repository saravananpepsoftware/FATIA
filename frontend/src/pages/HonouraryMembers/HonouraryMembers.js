import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import PageContainer from '../../components/PageContainer/PageContainer';
import { honouraryMembers, silverJubileeHallMembers } from '../../data/honouraryMembers';
import { formatProfileName } from '../../utils/formatProfileName';
import './HonouraryMembers.css';

const SilverJubileeMedallion = ({ member }) => {
  const [imgError, setImgError] = useState(false);
  const name = member.name;
  const company = member.company || member.position || 'Honourary Member';

  return (
    <div className="silver-jubilee-member-card">
      <div className="silver-jubilee-avatar-frame">
        {member.image && !imgError ? (
          <div className="silver-jubilee-avatar-circle">
            <img
              src={member.image}
              alt={name}
              className="silver-jubilee-avatar-img"
              onError={() => setImgError(true)}
            />
          </div>
        ) : (
          <div className="silver-jubilee-avatar-placeholder">
            <svg className="silver-jubilee-placeholder-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </div>
        )}

        {/* Asymmetrical Dual Crescent Arcs: Maroon Bottom-Left, Gold Top-Right */}
        <svg className="silver-jubilee-arcs-svg" viewBox="0 0 140 140" aria-hidden="true">
          <defs>
            <linearGradient id="sjMaroonArc" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4D0612" />
              <stop offset="50%" stopColor="#7D0C1E" />
              <stop offset="100%" stopColor="#4D0612" />
            </linearGradient>
            <linearGradient id="sjGoldArc" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E6C25B" />
              <stop offset="50%" stopColor="#FFF6CC" />
              <stop offset="100%" stopColor="#C89B2B" />
            </linearGradient>
          </defs>

          {/* Maroon Arc on Bottom-Left */}
          <path
            d="M 55.5 124.1 L 51.3 123.4 L 47.0 122.4 L 42.8 121.1 L 38.7 119.4 L 34.8 117.3 L 30.9 114.9 L 27.3 112.2 L 23.9 109.1 L 20.8 105.8 L 17.9 102.1 L 15.4 98.2 L 13.2 94.1 L 11.4 89.8 L 10.0 85.3 L 8.9 80.8 L 8.3 76.1 L 8.1 71.4 L 8.4 66.8 L 9.0 62.2 L 10.1 57.6 L 11.5 53.2 L 13.3 49.0 L 15.5 45.0 L 17.9 41.1 L 20.7 37.6 L 23.7 34.3 L 27.0 31.3 L 30.5 28.6 L 34.1 26.2 L 37.9 24.1 L 34.5 26.7 L 31.3 29.5 L 28.4 32.5 L 25.7 35.8 L 23.2 39.2 L 21.0 42.9 L 19.1 46.6 L 17.5 50.5 L 16.2 54.6 L 15.2 58.7 L 14.5 62.9 L 14.1 67.1 L 14.0 71.3 L 14.3 75.5 L 14.9 79.7 L 15.7 83.9 L 16.9 87.9 L 18.5 91.9 L 20.3 95.7 L 22.3 99.4 L 24.7 102.9 L 27.3 106.2 L 30.2 109.4 L 33.3 112.3 L 36.6 114.9 L 40.0 117.3 L 43.7 119.4 L 47.5 121.3 L 51.5 122.8 L 55.5 124.1 Z"
            fill="url(#sjMaroonArc)"
          />

          {/* Gold Arc on Top-Right */}
          <path
            d="M 84.5 15.9 L 88.7 16.6 L 93.0 17.6 L 97.2 18.9 L 101.3 20.6 L 105.2 22.7 L 109.1 25.1 L 112.7 27.8 L 116.1 30.9 L 119.2 34.2 L 122.1 37.9 L 124.6 41.8 L 126.8 45.9 L 128.6 50.2 L 130.0 54.7 L 131.1 59.2 L 131.7 63.9 L 131.9 68.6 L 131.6 73.2 L 131.0 77.8 L 129.9 82.4 L 128.5 86.8 L 126.7 91.0 L 124.5 95.0 L 122.1 98.9 L 119.3 102.4 L 116.3 105.7 L 113.0 108.7 L 109.5 111.4 L 105.9 113.8 L 102.1 115.9 L 105.5 113.3 L 108.7 110.5 L 111.6 107.5 L 114.3 104.2 L 116.8 100.8 L 119.0 97.1 L 120.9 93.4 L 122.5 89.5 L 123.8 85.4 L 124.8 81.3 L 125.5 77.1 L 125.9 72.9 L 126.0 68.7 L 125.7 64.5 L 125.1 60.3 L 124.3 56.1 L 123.1 52.1 L 121.5 48.1 L 119.7 44.3 L 117.7 40.6 L 115.3 37.1 L 112.7 33.8 L 109.8 30.6 L 106.7 27.7 L 103.4 25.1 L 100.0 22.7 L 96.3 20.6 L 92.5 18.7 L 88.5 17.2 L 84.5 15.9 Z"
            fill="url(#sjGoldArc)"
          />
        </svg>
      </div>

      <h3 className="silver-jubilee-member-name">{formatProfileName(name)}</h3>
      <span className="silver-jubilee-member-company">{company}</span>
      <div className="silver-jubilee-gold-dash" aria-hidden="true" />
    </div>
  );
};

const HonouraryMembers = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialTab = searchParams.get('tab') || 'all';
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState(initialTab); // 'all', 'honourary', 'silverJubilee'

  useEffect(() => {
    const tab = searchParams.get('tab');
    if (tab && ['all', 'honourary', 'silverJubilee'].includes(tab)) {
      setActiveTab(tab);
    }
  }, [searchParams]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (tab === 'all') {
      searchParams.delete('tab');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ tab });
    }
  };

  const filteredHonourary = honouraryMembers.filter(
    (m) =>
      m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredSilverJubilee = silverJubileeHallMembers.filter(
    (m) =>
      m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <PageContainer className="honourary-page-container">
      <div className="honourary-showcase-fullscreen">
        {/* Top-Left Ribbon: Edge to Edge */}
        <div className="honourary-ribbon-tl-wrapper" aria-hidden="true">
          <svg
            className="honourary-corner-ribbon-tl"
            viewBox="0 0 440 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="maroonGradTL1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#44030E" />
                <stop offset="38%" stopColor="#780C20" />
                <stop offset="82%" stopColor="#550715" />
                <stop offset="100%" stopColor="#36020A" />
              </linearGradient>
              <linearGradient id="maroonGradTL2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#8C1328" />
                <stop offset="55%" stopColor="#630919" />
                <stop offset="100%" stopColor="#3C040E" />
              </linearGradient>
              <linearGradient id="goldGradTL1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFF2B8" />
                <stop offset="25%" stopColor="#E2BB55" />
                <stop offset="50%" stopColor="#FFF5CC" />
                <stop offset="75%" stopColor="#C69528" />
                <stop offset="100%" stopColor="#7E540C" />
              </linearGradient>
              <linearGradient id="goldGradTL2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#E9C465" />
                <stop offset="45%" stopColor="#FFF1B8" />
                <stop offset="75%" stopColor="#D4A738" />
                <stop offset="100%" stopColor="#9C6E15" />
              </linearGradient>
              <filter id="ribbonShadowTL" x="-20%" y="-20%" width="150%" height="150%">
                <feDropShadow dx="3" dy="8" stdDeviation="12" floodColor="#3B030D" floodOpacity="0.36" />
              </filter>
            </defs>

            <path
              d="M0,0 L340,0 C275,55 180,95 120,148 C65,190 28,245 0,295 Z"
              fill="url(#maroonGradTL1)"
            />
            <path
              d="M0,270 C28,220 72,172 125,135 C188,88 275,50 350,0 L378,0 C295,52 200,95 138,145 C80,190 32,248 0,300 Z"
              fill="url(#goldGradTL1)"
              filter="url(#ribbonShadowTL)"
            />
            <path
              d="M0,0 L255,0 C202,42 140,75 92,115 C48,152 20,198 0,238 Z"
              fill="url(#maroonGradTL2)"
            />
            <path
              d="M0,238 C20,198 48,152 92,115 C140,75 202,42 255,0 L270,0 C212,45 150,78 102,120 C56,156 24,205 0,246 Z"
              fill="url(#goldGradTL2)"
            />
          </svg>
        </div>

        {/* Bottom-Right Ribbon: Edge to Edge */}
        <div className="honourary-ribbon-br-wrapper" aria-hidden="true">
          <svg
            className="honourary-corner-ribbon-br"
            viewBox="0 0 440 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="maroonGradBR1" x1="100%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#44030E" />
                <stop offset="38%" stopColor="#780C20" />
                <stop offset="82%" stopColor="#550715" />
                <stop offset="100%" stopColor="#36020A" />
              </linearGradient>
              <linearGradient id="maroonGradBR2" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8C1328" />
                <stop offset="55%" stopColor="#630919" />
                <stop offset="100%" stopColor="#3C040E" />
              </linearGradient>
              <linearGradient id="goldGradBR1" x1="100%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#FFF2B8" />
                <stop offset="25%" stopColor="#E2BB55" />
                <stop offset="50%" stopColor="#FFF5CC" />
                <stop offset="75%" stopColor="#C69528" />
                <stop offset="100%" stopColor="#7E540C" />
              </linearGradient>
              <linearGradient id="goldGradBR2" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#E9C465" />
                <stop offset="45%" stopColor="#FFF1B8" />
                <stop offset="75%" stopColor="#D4A738" />
                <stop offset="100%" stopColor="#9C6E15" />
              </linearGradient>
              <filter id="ribbonShadowBR" x="-20%" y="-20%" width="150%" height="150%">
                <feDropShadow dx="-3" dy="-8" stdDeviation="12" floodColor="#3B030D" floodOpacity="0.36" />
              </filter>
            </defs>

            <path
              d="M440,300 L100,300 C165,245 260,205 320,152 C375,110 412,55 440,5 Z"
              fill="url(#maroonGradBR1)"
            />
            <path
              d="M440,30 C412,80 368,128 315,165 C252,212 165,250 90,300 L62,300 C145,248 240,205 302,155 C360,110 408,52 440,0 Z"
              fill="url(#goldGradBR1)"
              filter="url(#ribbonShadowBR)"
            />
            <path
              d="M440,300 L185,300 C238,258 300,225 348,185 C392,148 420,102 440,62 Z"
              fill="url(#maroonGradBR2)"
            />
            <path
              d="M440,62 C420,102 392,148 348,185 C300,225 238,258 185,300 L170,300 C228,255 290,222 338,180 C384,144 416,95 440,54 Z"
              fill="url(#goldGradBR2)"
            />
          </svg>
        </div>

        {/* Delicate Guilloche Background Curves */}
        <div className="honourary-bg-waves-wrapper" aria-hidden="true">
          <svg
            className="honourary-bg-waves"
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
              d="M -50 880 C 410 940, 660 700, 980 770 C 1280 840, 1500 720, 1650 640"
              stroke="#C89F48"
              strokeWidth="0.8"
              strokeOpacity="0.08"
            />
            <path
              d="M -50 320 C 280 260, 650 380, 1050 240 C 1320 140, 1500 200, 1650 130"
              stroke="#C89F48"
              strokeWidth="1.0"
              strokeOpacity="0.12"
            />
            <path
              d="M -50 350 C 310 290, 680 410, 1080 270 C 1350 170, 1530 230, 1650 160"
              stroke="#C89F48"
              strokeWidth="0.8"
              strokeOpacity="0.08"
            />
          </svg>
        </div>

        {/* Inner Content Wrapper */}
        <div className="honourary-showcase-inner">
          {/* Top Section Header Emblem & Title Area (Always Visible) */}
          <div className="honourary-showcase-header">
            {/* Center FATIA Official Logo */}
            <div className="honourary-fatia-logo-container">
              <img
                src="/assets/logo.png"
                alt="FATIA Official Logo"
                className="honourary-fatia-logo-img"
              />
            </div>

            {/* Pill Badge */}
            <div className="honourary-pill-badge">
              {activeTab === 'silverJubilee' ? 'SILVER JUBILEE' : 'HONOURY MEMBERS'}
            </div>

            {/* Main Section Title */}
            <h1 className="honourary-showcase-title">
              {activeTab === 'silverJubilee'
                ? 'FATIA Silver Jubilee Hall Members'
                : 'FATIA Honoury Members'}
            </h1>

            {/* Subtitle */}
            <p className="honourary-showcase-subtitle">
              {activeTab === 'silverJubilee'
                ? 'Honourary patrons and visionaries who made invaluable contributions to the landmark FATIA Silver Jubilee Hall.'
                : 'Distinguished industry patrons, prominent business leaders, and supporters who strengthen the Federation.'}
            </p>

            {/* Star Accent Divider */}
            <div className="honourary-star-divider">
              <span className="honourary-star-line left" />
              <span className="honourary-star-icon">★</span>
              <span className="honourary-star-line right" />
            </div>
          </div>

          {/* Seamless In-Page Search & Filter Controls (ALWAYS VISIBLE ON ALL TABS) */}
          <div className="honourary-inline-controls">
            <div className="honourary-search-wrapper">
              <svg className="honourary-search-icon" fill="currentColor" viewBox="0 0 24 24">
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
              </svg>
              <input
                type="text"
                className="honourary-search-input"
                placeholder="Search member by name or company..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="honourary-tabs">
              <button
                type="button"
                className={`honourary-tab-btn ${activeTab === 'all' ? 'active' : ''}`}
                onClick={() => handleTabClick('all')}
              >
                All Members ({honouraryMembers.length + silverJubileeHallMembers.length})
              </button>
              <button
                type="button"
                className={`honourary-tab-btn ${activeTab === 'honourary' ? 'active' : ''}`}
                onClick={() => handleTabClick('honourary')}
              >
                Honoury Members ({honouraryMembers.length})
              </button>
              <button
                type="button"
                className={`honourary-tab-btn ${activeTab === 'silverJubilee' ? 'active' : ''}`}
                onClick={() => handleTabClick('silverJubilee')}
              >
                Silver Jubilee Members ({silverJubileeHallMembers.length})
              </button>
            </div>
          </div>

          {/* Section 1: Honourary Members (Rendered when 'all' or 'honourary') */}
          {(activeTab === 'all' || activeTab === 'honourary') && (
            <div className="honourary-members-block">
              {activeTab === 'all' && (
                <div className="silver-jubilee-section-header">
                  <div className="silver-jubilee-num-badge">HONOURY ROLL</div>
                  <h2 className="silver-jubilee-section-title">FATIA Honoury Members</h2>
                  <p className="silver-jubilee-section-desc">
                    Distinguished industry patrons, prominent business leaders, and supporters who strengthen the Federation.
                  </p>
                  <div className="silver-jubilee-underline" aria-hidden="true" />
                </div>
              )}

              {filteredHonourary.length > 0 ? (
                <div className="silver-jubilee-medallions-grid">
                  {filteredHonourary.map((member, idx) => (
                    <SilverJubileeMedallion
                      key={idx}
                      member={{
                        name: member.name,
                        company: member.company,
                        image: member.image
                      }}
                    />
                  ))}
                </div>
              ) : (
                <div className="no-members-msg">
                  <p>No Honoury members matching "{searchTerm}".</p>
                </div>
              )}
            </div>
          )}

          {/* Section 2: Silver Jubilee Members (Rendered when 'all' or 'silverJubilee') */}
          {(activeTab === 'all' || activeTab === 'silverJubilee') && (
            <div
              className={`silver-jubilee-block ${activeTab === 'all' ? 'has-top-margin' : ''}`}
              id="silver-jubilee-section"
            >
              {activeTab === 'all' ? (
                <div className="silver-jubilee-section-header">
                  <div className="silver-jubilee-num-badge">SILVER JUBILEE</div>
                  <h2 className="silver-jubilee-section-title">FATIA Silver Jubilee Hall Honourary Members</h2>
                  <p className="silver-jubilee-section-desc">
                    Honourary patrons and visionaries who made invaluable contributions to the landmark FATIA Silver Jubilee Hall.
                  </p>
                  <div className="silver-jubilee-underline" aria-hidden="true" />
                </div>
              ) : (
                <div className="silver-jubilee-section-header" style={{ marginBottom: '40px' }}>
                  <div className="silver-jubilee-num-badge">31 PATRONS & VISIONARIES</div>
                  <h2 className="silver-jubilee-section-title">Silver Jubilee Hall Honourary Roll</h2>
                  <p className="silver-jubilee-section-desc">
                    Prominent industrial leaders and visionaries whose generous support created the FATIA Silver Jubilee Hall.
                  </p>
                  <div className="silver-jubilee-underline" aria-hidden="true" />
                </div>
              )}

              <div className="silver-jubilee-medallions-grid">
                {filteredSilverJubilee.length > 0 ? (
                  filteredSilverJubilee.map((member, idx) => (
                    <SilverJubileeMedallion
                      key={idx}
                      member={{
                        name: member.name,
                        company: member.company,
                        image: member.image
                      }}
                    />
                  ))
                ) : (
                  <div className="no-members-msg">
                    <p>No Silver Jubilee members matching "{searchTerm}".</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </PageContainer>
  );
};

export default HonouraryMembers;
