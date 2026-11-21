import React, { useState } from 'react';
import PageContainer from '../../components/PageContainer/PageContainer';
import BoardSection from '../../components/BoardSection/BoardSection';
import { boardData } from '../../data/board';
import './Board.css';

const Board = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filterList = (list = []) => {
    if (!searchTerm.trim()) return list;
    const term = searchTerm.toLowerCase();
    return list.filter((m) => {
      const nameMatch = m.name && m.name.toLowerCase().includes(term);
      const nameTamilMatch = m.nameTamil && m.nameTamil.toLowerCase().includes(term);
      const posMatch = m.position && m.position.toLowerCase().includes(term);
      const posTamilMatch = m.positionTamil && m.positionTamil.toLowerCase().includes(term);
      const phoneMatch = m.phone && m.phone.toLowerCase().includes(term);
      return nameMatch || nameTamilMatch || posMatch || posTamilMatch || phoneMatch;
    });
  };

  const keyLeaders = filterList(boardData.keyLeaders || boardData.core);
  const vicePresidents = filterList(boardData.vicePresidents);
  const jointSecretaries = filterList(boardData.jointSecretaries);
  const assistantTreasurerAndCoordinator = filterList([
    ...(boardData.assistantTreasurer || []),
    ...(boardData.coordinator || [])
  ]);
  const directors = filterList(boardData.directors);
  const committeeChairmen = filterList(boardData.committeeChairmen);

  const totalMatches =
    keyLeaders.length +
    vicePresidents.length +
    jointSecretaries.length +
    assistantTreasurerAndCoordinator.length +
    directors.length +
    committeeChairmen.length;

  return (
    <PageContainer className="board-page-container">
      <div className="board-showcase-fullscreen">
        {/* Top-Left Ribbon: Edge to Edge */}
        <div className="board-ribbon-tl-wrapper" aria-hidden="true">
          <svg
            className="board-corner-ribbon-tl"
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
        <div className="board-ribbon-br-wrapper" aria-hidden="true">
          <svg
            className="board-corner-ribbon-br"
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
        <div className="board-bg-waves-wrapper" aria-hidden="true">
          <svg
            className="board-bg-waves"
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
        <div className="board-showcase-inner">
          {/* Top Search & Filter Bar */}
          <div className="board-search-controls-luxury">
            <div className="board-search-wrapper">
              <svg className="board-search-icon" fill="currentColor" viewBox="0 0 24 24">
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
              </svg>
              <input
                type="text"
                className="board-search-input"
                placeholder="Search board member by name, position, or phone..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <button
                  type="button"
                  className="board-search-clear-btn"
                  onClick={() => setSearchTerm('')}
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </div>

            <span className="board-count-badge">
              Showing {totalMatches} Board Members
            </span>
          </div>

          {/* Board Sections */}
          {totalMatches > 0 ? (
            <>
              {keyLeaders.length > 0 && (
                <BoardSection
                  title="Executive Core Office Bearers"
                  members={keyLeaders}
                />
              )}

              {vicePresidents.length > 0 && (
                <BoardSection
                  title="Vice Presidents"
                  members={vicePresidents}
                />
              )}

              {jointSecretaries.length > 0 && (
                <BoardSection
                  title="Joint Secretaries"
                  members={jointSecretaries}
                />
              )}

              {assistantTreasurerAndCoordinator.length > 0 && (
                <BoardSection
                  title="Assistant Treasurer & Coordinator"
                  members={assistantTreasurerAndCoordinator}
                />
              )}

              {directors.length > 0 && (
                <BoardSection
                  title="Directors of the Board"
                  members={directors}
                />
              )}

              {committeeChairmen.length > 0 && (
                <BoardSection
                  title="Committee Chairman"
                  members={committeeChairmen}
                />
              )}
            </>
          ) : (
            <div className="no-board-members-found">
              <p>No board members found matching "{searchTerm}".</p>
            </div>
          )}

          {/* Past Terms Link Banner */}
          <div className="past-terms-link-banner">
            <h3 className="banner-heading">FATIA Leadership Legacy & Past Terms</h3>
            <p className="banner-subtext">
              Explore the term-wise history of former Executive Presidents, General Secretaries, and Treasurers across all past terms of FATIA.
            </p>
            <a href="/board/past-terms" className="btn-primary-gold banner-cta-btn">
              View Past Term Board Members (Term-wise) →
            </a>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default Board;
