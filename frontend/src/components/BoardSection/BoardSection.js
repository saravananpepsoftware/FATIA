import React, { useState } from 'react';
import './BoardSection.css';

const BoardMemberItem = ({ member, isLastInRow }) => {
  const [imgError, setImgError] = useState(false);
  const nameTamil = member.nameTamil || member.name;
  const designationTamil = member.positionTamil || member.position || 'இயக்குநர்';

  return (
    <div className="board-exec-card-container">
      <div className="board-exec-card">
        {/* Avatar Frame with Concentric Gold Ring & Dynamic Double Swoosh Ribbon */}
        <div className="board-exec-avatar-frame">
          <div className="board-exec-gold-ring">
            {member.image && !imgError ? (
              <img
                src={member.image}
                alt={nameTamil}
                className="board-exec-avatar-img"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="board-exec-fallback-avatar">
                <svg viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.8">
                  <circle cx="12" cy="7.5" r="3.7" />
                  <path d="M5.5 19.5c0-3.6 2.9-6.5 6.5-6.5s6.5 2.9 6.5 6.5" />
                </svg>
              </div>
            )}
          </div>

          {/* Dynamic Ribbon Swoosh Accent */}
          <svg className="board-exec-ribbon-svg" viewBox="0 0 154 154" aria-hidden="true">
            <defs>
              <linearGradient id="boardGoldRibbonGrad" x1="0%" y1="30%" x2="100%" y2="70%">
                <stop offset="0%" stopColor="#E6C25B" />
                <stop offset="40%" stopColor="#FFF6CC" />
                <stop offset="70%" stopColor="#C89B2B" />
                <stop offset="100%" stopColor="#8A5A12" />
              </linearGradient>
              <linearGradient id="boardMaroonRibbonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4D0612" />
                <stop offset="30%" stopColor="#7D0C1E" />
                <stop offset="65%" stopColor="#A8152E" />
                <stop offset="100%" stopColor="#4D0612" />
              </linearGradient>
              <filter id="boardRibbonShadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="2.5" stdDeviation="2.5" floodColor="#330008" floodOpacity="0.32" />
              </filter>
            </defs>
            {/* Outer Maroon Ribbon Swirl under bottom and curving up to the right */}
            <path
              d="M 32 108 C 45 133, 72 144, 102 140 C 122 135, 138 120, 146 102 C 141 116, 126 129, 104 133 C 78 136, 52 127, 32 108 Z"
              fill="url(#boardMaroonRibbonGrad)"
              filter="url(#boardRibbonShadow)"
            />
            {/* Inner Gold Swirl hugging along the lower edge of the ring */}
            <path
              d="M 20 94 C 28 122, 58 141, 92 138 C 118 134, 140 114, 148 90 C 142 108, 123 125, 96 128 C 66 130, 38 116, 20 94 Z"
              fill="url(#boardGoldRibbonGrad)"
            />
          </svg>
        </div>

        {/* Member Details */}
        <div className="board-exec-info">
          <h3 className="board-exec-name">{nameTamil}</h3>
          <span className="board-exec-designation">{designationTamil}</span>
          {member.phone && (
            <a href={`tel:${member.phone.replace(/\s+/g, '')}`} className="board-exec-phone-pill">
              <svg className="board-exec-phone-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              <span className="board-exec-phone-num">{member.phone}</span>
            </a>
          )}
        </div>
      </div>

      {/* Subtle Vertical Gold Divider */}
      {!isLastInRow && <div className="board-exec-divider" aria-hidden="true" />}
    </div>
  );
};

const BoardSection = ({ title, members = [] }) => {
  if (!members || members.length === 0) return null;

  const count = members.length;
  const gridClass = count === 3 ? 'grid-cols-3' : count === 4 ? 'grid-cols-4' : 'grid-cols-multi';

  return (
    <section className="board-section-luxury">
      {/* Centered Heading with Group Icon and Fading Gold Accent Lines */}
      <div className="board-section-header-luxury">
        <span className="board-header-line left" />
        <div className="board-header-title-wrap">
          <svg className="board-header-group-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
          </svg>
          <h2 className="board-header-text">{title}</h2>
        </div>
        <span className="board-header-line right" />
      </div>

      {/* Member Row */}
      <div className={`board-exec-row ${gridClass}`}>
        {members.map((member, idx) => (
          <BoardMemberItem
            key={idx}
            member={member}
            isLastInRow={
              count === 3
                ? (idx + 1) % 3 === 0 || idx === members.length - 1
                : (idx + 1) % 4 === 0 || idx === members.length - 1
            }
          />
        ))}
      </div>
    </section>
  );
};

export default BoardSection;
