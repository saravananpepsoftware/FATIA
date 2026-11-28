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
            <stop offset="0%" stopColor="#4A020E" />
            <stop offset="25%" stopColor="#6E0B22" />
            <stop offset="65%" stopColor="#550418" />
            <stop offset="100%" stopColor="#38020F" />
          </linearGradient>

          <linearGradient id="maroonShadowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2A0108" stopOpacity="0.85" />
            <stop offset="50%" stopColor="#3B020F" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#250106" stopOpacity="0.8" />
          </linearGradient>

          <linearGradient id="goldRibbonGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#C5964E" stopOpacity="0.35" />
            <stop offset="35%" stopColor="#F9E29D" stopOpacity="0.9" />
            <stop offset="70%" stopColor="#D4AF37" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#B3862D" stopOpacity="0.45" />
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
              An Apex Body of 78 Associations
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

          {/* Tamil Subheading with Vertical Gold Bar */}
          <div className="hero-tamil-wrapper">
            <div className="hero-gold-vertical-bar" aria-hidden="true" />
            <h2 className="hero-tamil-heading">
              ஈரோடு மாவட்ட அனைத்து தொழில் வணிக சங்கங்களின் கூட்டமைப்பு
            </h2>
          </div>

          {/* Descriptive Mission Statement */}
          <p className="hero-lead-text">
            An Apex Body of {totalMembers} Regional trade and Industry associations (34 Industrial,
            31 Manufacturer &amp; Trade and 13 Service Associations), representing thousands of
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

      {/* Dynamic Maroon & Shimmering Gold Silk Ribbon Waves (Seamless Flowing Curves) */}
      <div className="hero-waves-wrapper" aria-hidden="true">
        <svg
          viewBox="0 0 1440 280"
          preserveAspectRatio="none"
          className="hero-waves-svg"
        >
          {/* Deep Maroon Flowing Silk Wave Ribbon (Full Width Seamless Flow) */}
          <path
            d="M -60 195 C 160 238, 420 252, 700 208 C 980 162, 1220 125, 1500 138 L 1500 218 C 1240 190, 1000 218, 720 268 C 440 318, 180 292, -60 240 Z"
            fill="url(#maroonWaveGradient)"
          />

          {/* Secondary Maroon Dark Shadow Fold Ribbon */}
          <path
            d="M -60 215 C 180 255, 460 268, 760 225 C 1060 178, 1280 152, 1500 168 L 1500 230 C 1280 205, 1060 232, 760 282 C 460 328, 180 305, -60 255 Z"
            fill="url(#maroonShadowGradient)"
          />

          {/* Golden Silk Wave Strand sweeping along the upper contour */}
          <path
            d="M -60 165 C 150 212, 380 228, 640 185 C 900 142, 1180 120, 1500 132 C 1180 145, 900 172, 640 212 C 380 252, 150 232, -60 185 Z"
            fill="url(#goldRibbonGradient)"
          />

          {/* Shimmering Golden Sinusoidal Frequency Wave Strands */}
          <path
            d="M -50 152 C 180 208, 440 232, 720 185 C 1000 135, 1250 115, 1490 128"
            fill="none"
            stroke="#D4AF37"
            strokeWidth="1.8"
            opacity="0.8"
          />
          <path
            d="M -50 162 C 190 218, 450 242, 730 195 C 1010 145, 1260 125, 1490 138"
            fill="none"
            stroke="#FFECA8"
            strokeWidth="1.2"
            opacity="0.65"
          />
          <path
            d="M -50 174 C 200 228, 460 252, 740 205 C 1020 155, 1270 135, 1490 148"
            fill="none"
            stroke="#D4AF37"
            strokeWidth="1"
            opacity="0.5"
          />
          <path
            d="M 420 225 C 700 182, 1020 155, 1320 170 T 1490 175"
            fill="none"
            stroke="#FCEAB3"
            strokeWidth="1"
            opacity="0.55"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroOrbitSection;
