import React from 'react';
import { getAssociationIcon } from '../../utils/associationIcons';
import './AssociationCard.css';

const AssociationCard = ({ association, isRuby = false }) => {
  const headTable = association.headTable || {};

  const bearers = [
    {
      role: 'PRESIDENT',
      name: headTable.president,
      phone: headTable.presidentPhone,
      iconClass: 'user-president',
    },
    {
      role: 'SECRETARY',
      name: headTable.secretary,
      phone: headTable.secretaryPhone,
      iconClass: 'user-secretary',
    },
    {
      role: 'TREASURER',
      name: headTable.treasurer,
      phone: headTable.treasurerPhone,
      iconClass: 'user-treasurer',
    },
  ];

  return (
    <div className={`podium-card-unit ${isRuby ? 'theme-ruby' : 'theme-gold'}`}>
      {/* Ambient Floor Glow */}
      <div className="podium-floor-glow" />

      {/* 3D Tiered Cylinder Podium Base */}
      <div className="podium-pedestal-base">
        <div className="podium-cylinder" />
        <div className="podium-top-lip" />
        <div className="podium-neon-contact" />
      </div>

      {/* Arched / Circular Medallion Disc */}
      <div className="medallion-disc-wrap">
        <div className="medallion-face">
          {/* Association Logo or Industry Category Icon Squircle */}
          {association.logo ? (
            <div className="association-custom-logo-wrap">
              <img
                src={association.logo}
                alt={association.name}
                className="association-custom-logo"
              />
            </div>
          ) : (
            <div className="category-icon-box">
              {getAssociationIcon(association.name)}
            </div>
          )}

          {/* Association Title */}
          <h3 className="association-title" title={association.name}>
            {association.name}
          </h3>

          {/* 3-Row Office Bearers Table */}
          <div className="office-bearers-table">
            {bearers.map((bearer, idx) => (
              <div key={idx} className="bearer-row">
                <div className="bearer-role">
                  <svg
                    className={`bearer-user-icon ${bearer.iconClass}`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{bearer.role}</span>
                </div>

                <span className="bearer-name" title={bearer.name || '—'}>
                  {bearer.name || '—'}
                </span>

                <span className="bearer-pipe">|</span>

                {bearer.phone ? (
                  <a
                    href={`tel:${bearer.phone.replace(/\s+/g, '')}`}
                    className="bearer-phone"
                    title={`Call ${bearer.name}`}
                  >
                    <svg viewBox="0 0 24 24">
                      <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
                    <span>{bearer.phone}</span>
                  </a>
                ) : (
                  <span className="bearer-phone empty">—</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssociationCard;
