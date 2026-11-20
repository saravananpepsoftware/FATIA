import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { membersData } from '../../data/members';
import './HeroOrbitSection.css';

const orbitNodesData = [
  {
    id: 'unification',
    title: 'Trade\nUnification',
    angle: 270, // Top Center (270°)
    icon: (
      <svg viewBox="0 0 40 40" className="node-icon-svg" fill="none">
        {/* Handshake in golden hexagon/circle */}
        <circle cx="20" cy="20" r="18" fill="url(#goldNodeGradient)" opacity="0.15" />
        <path
          d="M12 21l3.5-3.5a2 2 0 0 1 2.8 0L20 19.2l1.7-1.7a2 2 0 0 1 2.8 0l3.5 3.5a2 2 0 0 1 0 2.8l-3.5 3.5a2 2 0 0 1-2.8 0L20 25.6l-1.7 1.7a2 2 0 0 1-2.8 0L12 23.8a2 2 0 0 1 0-2.8z"
          stroke="#C5964E"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 18l2.5 2.5M21.5 17.5l2.5 2.5"
          stroke="#D4AF37"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    )
  },
  {
    id: 'industry',
    title: 'Industry\nGrowth',
    angle: 342, // Upper Right (270° + 72° = 342°)
    icon: (
      <svg viewBox="0 0 40 40" className="node-icon-svg" fill="none">
        {/* Gear / Cog */}
        <circle cx="20" cy="20" r="18" fill="url(#goldNodeGradient)" opacity="0.15" />
        <path
          d="M20 12v3M20 25v3M12 20h3M25 20h3M14.3 14.3l2.1 2.1M23.6 23.6l2.1 2.1M14.3 25.7l2.1-2.1M23.6 16.4l2.1-2.1"
          stroke="#C5964E"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <circle cx="20" cy="20" r="4.8" stroke="#C5964E" strokeWidth="2.2" />
        <circle cx="20" cy="20" r="1.8" fill="#D4AF37" />
      </svg>
    )
  },
  {
    id: 'collaboration',
    title: 'Business\nCollaboration',
    angle: 54, // Lower Right (342° + 72° = 54°)
    icon: (
      <svg viewBox="0 0 40 40" className="node-icon-svg" fill="none">
        {/* Collaboration / Team / Business Partners */}
        <circle cx="20" cy="20" r="18" fill="url(#goldNodeGradient)" opacity="0.15" />
        <circle cx="15" cy="17" r="3.2" stroke="#C5964E" strokeWidth="1.8" />
        <circle cx="25" cy="17" r="3.2" stroke="#C5964E" strokeWidth="1.8" />
        <path
          d="M10 27c0-2.8 2.2-5 5-5h1M30 27c0-2.8-2.2-5-5-5h-1"
          stroke="#C5964E"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M17 24l3 2.5 3-2.5"
          stroke="#D4AF37"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  },
  {
    id: 'economic',
    title: 'Economic\nDevelopment',
    angle: 126, // Lower Left (54° + 72° = 126°)
    icon: (
      <svg viewBox="0 0 40 40" className="node-icon-svg" fill="none">
        {/* Bar chart with rising arrow */}
        <circle cx="20" cy="20" r="18" fill="url(#goldNodeGradient)" opacity="0.15" />
        <path
          d="M12 28h16M14 26v-4M19 26v-8M24 26v-12"
          stroke="#C5964E"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <path
          d="M14 19l4.5-5 3.5 3 4-5"
          stroke="#D4AF37"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M24 12h2v2"
          stroke="#D4AF37"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  },
  {
    id: 'members',
    title: 'Member\nAssociations',
    angle: 198, // Upper Left (126° + 72° = 198°)
    icon: (
      <svg viewBox="0 0 40 40" className="node-icon-svg" fill="none">
        {/* Three people group */}
        <circle cx="20" cy="20" r="18" fill="url(#goldNodeGradient)" opacity="0.15" />
        <circle cx="20" cy="15" r="3.2" stroke="#C5964E" strokeWidth="1.8" />
        <path
          d="M14 26c0-3.3 2.7-6 6-6s6 2.7 6 6"
          stroke="#C5964E"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <circle cx="13" cy="17" r="2.4" stroke="#D4AF37" strokeWidth="1.5" />
        <path
          d="M9 25c0-2.2 1.8-4 4-4"
          stroke="#D4AF37"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="27" cy="17" r="2.4" stroke="#D4AF37" strokeWidth="1.5" />
        <path
          d="M31 25c0-2.2-1.8-4-4-4"
          stroke="#D4AF37"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    )
  }
];

const HeroOrbitSection = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [activeNode, setActiveNode] = useState(null);

  const totalMembers = membersData.length || 78;

  return (
    <section className="fatia-hero-section">
      {/* Reusable SVG Definitions for Gradients, Glows & Watermarks */}
      <svg width="0" height="0" className="svg-defs-hidden">
        <defs>
          <linearGradient id="goldNodeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF2D6" />
            <stop offset="100%" stopColor="#C5964E" />
          </linearGradient>

          <linearGradient id="orbitRingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF2D6" stopOpacity="0.95" />
            <stop offset="35%" stopColor="#D4AF37" stopOpacity="0.85" />
            <stop offset="70%" stopColor="#C5964E" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#9E742A" stopOpacity="0.6" />
          </linearGradient>

          <linearGradient id="maroonWaveGradient" x1="0%" y1="0%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#6E0B22" />
            <stop offset="60%" stopColor="#550418" />
            <stop offset="100%" stopColor="#3F0211" />
          </linearGradient>

          <linearGradient id="goldRibbonGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#C5964E" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#F9E29D" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#B3862D" stopOpacity="0.4" />
          </linearGradient>

          <filter id="goldAuraGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
      </svg>

      {/* Main Content Layout (Desktop 2-Column Grid) */}
      <div className="hero-container">
        {/* Left Column: Headlines & Call to Actions */}
        <div className="hero-text-column">
          {/* Apex Federation Pill Badge */}
          <div className="hero-apex-pill">
            <span className="apex-badge-icon" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"
                  fill="#B5822C"
                />
              </svg>
            </span>
            <span className="apex-badge-label">
              APEX FEDERATION OF TRADE &amp; INDUSTRY ASSOCIATIONS
            </span>
          </div>

          {/* Main Headline with Vertical Gold Bar */}
          <div className="hero-title-wrapper">
            <div className="hero-gold-vertical-bar" aria-hidden="true" />
            <h1 className="hero-primary-heading">
              FEDERATION OF ALL TRADE &amp;
              <span className="heading-sub-line"> INDUSTRY ASSOCIATIONS OF</span>
              <span className="heading-maroon-highlight"> ERODE DISTRICT</span>
            </h1>
          </div>

          {/* Tamil Subheading */}
          <h2 className="hero-tamil-heading">
            ஈரோடு மாவட்ட அனைத்து தொழில் வணிக சங்கங்களின் கூட்டமைப்பு
          </h2>

          {/* Descriptive Mission Statement */}
          <p className="hero-lead-text">
            Unifying {totalMembers} regional trade and industry associations, representing thousands of
            business enterprises, manufacturers, dealers, and commercial partners across Erode
            District.
          </p>

          {/* Call to Action Buttons */}
          <div className="hero-cta-button-group">
            <Link to="/board" className="btn-pill-maroon">
              <span>Board Members</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="btn-arrow-icon">
                <path
                  d="M5 12h14M12 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>

            <Link to="/members" className="btn-pill-outline">
              <span>Explore {totalMembers} Member Associations</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="btn-arrow-icon">
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

        {/* Right Column: 3D Tiered Podium, Floating Medallion & Revolving Orbit */}
        <div className="hero-interactive-column">
          {/* Background Architectural Landmark Illustration (Erode Iconic Landmark) */}
          <div className="hero-landmark-watermark" aria-hidden="true">
            <img
              src="/assets/erode-landmark.png"
              alt="Erode Landmark"
              className="hero-landmark-img"
            />
          </div>

          <div
            className={`orbit-stage-wrapper ${isPaused ? 'orbit-paused' : ''}`}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Warm Luminous Ambient Glow Behind Medallion */}
            <div className="orbit-ambient-glow" />

            {/* Glowing Golden Circular Orbit Ring */}
            <div className="orbit-track-ring">
              <svg className="orbit-track-svg" viewBox="0 0 480 480">
                {/* Thick Glowing Aura Ring */}
                <circle
                  cx="240"
                  cy="240"
                  r="225"
                  fill="none"
                  stroke="url(#orbitRingGradient)"
                  strokeWidth="3.5"
                  filter="url(#goldAuraGlow)"
                  opacity="0.8"
                />
                {/* Crisp Precision Gold Line */}
                <circle
                  cx="240"
                  cy="240"
                  r="225"
                  fill="none"
                  stroke="#FFDF88"
                  strokeWidth="1.8"
                  opacity="0.9"
                />
                {/* Delicate Dotted Starlight Track */}
                <circle
                  cx="240"
                  cy="240"
                  r="225"
                  fill="none"
                  stroke="#FFFFFF"
                  strokeWidth="1.5"
                  strokeDasharray="4 18"
                  opacity="0.75"
                />
              </svg>

              {/* Shimmer Light Comet traveling along the ring */}
              <div className="orbit-comet" />
            </div>

            {/* 3D Tiered Gold & Marble Podium */}
            <div className="podium-3d-stage">
              {/* Bottom Podium Tier (Wider) */}
              <div className="podium-tier tier-bottom">
                <div className="podium-surface surface-bottom" />
                <div className="podium-bevel bevel-bottom" />
              </div>

              {/* Top Podium Tier (Elevated) */}
              <div className="podium-tier tier-top">
                <div className="podium-surface surface-top" />
                <div className="podium-bevel bevel-top" />
              </div>

              {/* Ambient Floor Shadow */}
              <div className="podium-floor-shadow" />
            </div>

            {/* Central FATIA Seal Medallion (Levitating Upright on Podium) */}
            <div className="central-fatia-seal" title="FATIA Apex Seal">
              <div className="seal-outer-bezel">
                <div className="seal-inner-medallion">
                  {/* Official FATIA Logo with authentic circular typography */}
                  <img
                    src="/assets/logo.png"
                    alt="FATIA Apex Association Official Emblem"
                    className="seal-emblem-image"
                  />
                  {/* Specular Gloss Reflection Sheen */}
                  <div className="seal-specular-shine" />
                </div>
              </div>
            </div>

            {/* 5 Orbiting Badges Revolving Along Orbit Ring with Exact Even Spacing (360 / 5 = 72deg each) */}
            <div className="orbit-badges-rotator">
              {orbitNodesData.map((node, index) => {
                const evenAngle = (270 + index * (360 / orbitNodesData.length)) % 360;
                const isActive = activeNode === node.id;
                return (
                  <div
                    key={node.id}
                    className="orbit-node-anchor"
                    style={{
                      '--node-angle': `${evenAngle}deg`
                    }}
                  >
                    <div className="orbit-counter-wrapper">
                      <div
                        className={`orbit-badge-card ${isActive ? 'is-active' : ''}`}
                        onClick={() => setActiveNode(activeNode === node.id ? null : node.id)}
                      >
                        <div className="badge-icon-container">{node.icon}</div>
                        <div className="badge-label-text">
                          {node.title.split('\n').map((line, idx) => (
                            <span key={idx} className="badge-label-line">
                              {line}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Dynamic Maroon & Shimmering Gold Silk Ribbon Waves (Organic Flowing Curves) */}
      <div className="hero-waves-wrapper" aria-hidden="true">
        <svg
          viewBox="0 0 1440 280"
          preserveAspectRatio="none"
          className="hero-waves-svg"
        >
          {/* Deep Maroon Flowing Silk Wave Ribbon (Organic Curved Top & Bottom) */}
          <path
            d="M 380 230 C 640 160, 880 220, 1140 135 C 1260 95, 1360 115, 1440 145 L 1440 215 C 1370 185, 1260 170, 1130 205 C 890 270, 640 230, 360 255 Z"
            fill="url(#maroonWaveGradient)"
          />
          {/* Secondary Maroon Dark Shadow Wave Ribbon */}
          <path
            d="M 680 240 C 900 180, 1140 215, 1330 150 C 1390 130, 1420 140, 1440 155 L 1440 230 C 1380 205, 1270 195, 1110 235 C 960 270, 810 260, 680 240 Z"
            fill="#3B020F"
            opacity="0.85"
          />

          {/* Golden Silk Wave Strand sweeping along bottom-left */}
          <path
            d="M -50 165 C 110 200, 260 225, 460 175 C 660 125, 830 160, 1020 210 C 840 195, 660 165, 460 205 C 260 245, 100 225, -50 195 Z"
            fill="url(#goldRibbonGradient)"
          />

          {/* Shimmering Golden Sinusoidal Frequency Waves */}
          <path
            d="M -30 150 Q 220 220, 460 170 T 960 185 T 1440 140"
            fill="none"
            stroke="#D4AF37"
            strokeWidth="1.8"
            opacity="0.75"
          />
          <path
            d="M -30 160 Q 220 230, 470 180 T 970 195 T 1440 150"
            fill="none"
            stroke="#FFECA8"
            strokeWidth="1.2"
            opacity="0.6"
          />
          <path
            d="M -30 170 Q 220 240, 480 190 T 980 205 T 1440 160"
            fill="none"
            stroke="#D4AF37"
            strokeWidth="1"
            opacity="0.45"
          />
          <path
            d="M 400 235 Q 750 180, 1120 190 T 1440 170"
            fill="none"
            stroke="#FCEAB3"
            strokeWidth="1"
            opacity="0.5"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroOrbitSection;
