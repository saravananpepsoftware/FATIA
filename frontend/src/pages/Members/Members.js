import React, { useState } from 'react';
import PageContainer from '../../components/PageContainer/PageContainer';
import AssociationCard from '../../components/AssociationCard/AssociationCard';
import { membersData } from '../../data/members';
import './Members.css';

const Members = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredMembers = membersData.filter((member) => {
    const term = searchTerm.toLowerCase();
    return (
      member.name.toLowerCase().includes(term) ||
      (member.headTable?.president && member.headTable.president.toLowerCase().includes(term)) ||
      (member.headTable?.secretary && member.headTable.secretary.toLowerCase().includes(term)) ||
      (member.headTable?.treasurer && member.headTable.treasurer.toLowerCase().includes(term))
    );
  });

  return (
    <PageContainer>
      {/* Header Section */}
      <div className="members-header-section">
        <div className="state-registry-pill">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4 10h3v7H4zm6.5 0h3v7h-3zM2 22h20v-3H2zm15-12h3v7h-3zM12 1L2 6v2h20V6z" />
          </svg>
          <span>STATE REGISTRY</span>
        </div>

        <h1 className="members-page-title">
          <span className="brand-red">FATIA</span> Member Associations
        </h1>

        <p className="members-page-subtitle">
          Complete registry of all {membersData.length} member associations across Tamil Nadu districts with their respective Head Table office bearers.
        </p>
      </div>

      {/* Search & Filter Controls */}
      <div className="members-controls">
        <div className="search-pill-wrapper">
          <svg
            className="search-pill-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            className="search-pill-input"
            placeholder="Search by association name or office bearer"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="showing-count-pill">
          Showing <strong>{filteredMembers.length} of {membersData.length} Associations</strong>
        </div>
      </div>

      {/* 3D Medallion Podium Grid */}
      <div className="members-podium-grid">
        {filteredMembers.length > 0 ? (
          filteredMembers.map((member, index) => (
            <AssociationCard
              key={member.id}
              association={member}
              isRuby={index % 2 === 0}
            />
          ))
        ) : (
          <div className="no-members-found">
            <p>No member associations found matching "{searchTerm}".</p>
          </div>
        )}
      </div>
    </PageContainer>
  );
};

export default Members;
