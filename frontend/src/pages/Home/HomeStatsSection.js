import React from 'react';
import { membersData } from '../../data/members';
import './HomeStatsSection.css';

const HomeStatsSection = () => {
  const totalMembers = membersData.length || 78;

  return (
    <section className="home-stats-section" aria-label="FATIA Key Statistics">
      <div className="home-stats-container">
        <div className="stats-capsule-card">
          {/* Stat 1: Member Associations */}
          <div className="stat-capsule-item">
            <div className="stat-capsule-icon" aria-hidden="true">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="8" r="3.2" stroke="#C5964E" strokeWidth="2" />
                <path
                  d="M6 19c0-3.3 2.7-6 6-6s6 2.7 6 6"
                  stroke="#C5964E"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <circle cx="5" cy="10" r="2.2" stroke="#D4AF37" strokeWidth="1.6" />
                <path
                  d="M2 18c0-2.2 1.8-4 4-4"
                  stroke="#D4AF37"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
                <circle cx="19" cy="10" r="2.2" stroke="#D4AF37" strokeWidth="1.6" />
                <path
                  d="M22 18c0-2.2-1.8-4-4-4"
                  stroke="#D4AF37"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="stat-capsule-content">
              <div className="stat-capsule-number">{totalMembers}</div>
              <div className="stat-capsule-label">Member Associations</div>
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="stat-capsule-divider" aria-hidden="true" />

          {/* Stat 2: FATIA Fair Editions */}
          <div className="stat-capsule-item">
            <div className="stat-capsule-icon" aria-hidden="true">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="4" width="18" height="17" rx="2.5" stroke="#C5964E" strokeWidth="2" />
                <path d="M8 2v4M16 2v4M3 9h18" stroke="#C5964E" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M12 11.5l1.1 2.2 2.4.3-1.8 1.7.5 2.4-2.2-1.2-2.2 1.2.5-2.4-1.8-1.7 2.4-.3z" fill="#D4AF37" />
              </svg>
            </div>
            <div className="stat-capsule-content">
              <div className="stat-capsule-number">6+</div>
              <div className="stat-capsule-label">FATIA Fair Editions</div>
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="stat-capsule-divider" aria-hidden="true" />

          {/* Stat 3: Business Enterprises */}
          <div className="stat-capsule-item">
            <div className="stat-capsule-icon" aria-hidden="true">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
                <path
                  d="M3 21h18M6 21V7l7-4v18M13 10h5v11"
                  stroke="#C5964E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="8" cy="11" r="1" fill="#D4AF37" />
                <circle cx="11" cy="11" r="1" fill="#D4AF37" />
                <circle cx="8" cy="15" r="1" fill="#D4AF37" />
                <circle cx="11" cy="15" r="1" fill="#D4AF37" />
                <circle cx="15.5" cy="14" r="1" fill="#D4AF37" />
                <circle cx="15.5" cy="18" r="1" fill="#D4AF37" />
              </svg>
            </div>
            <div className="stat-capsule-content">
              <div className="stat-capsule-number">4000+</div>
              <div className="stat-capsule-label">Business Enterprises</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeStatsSection;

