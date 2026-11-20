import React from 'react';

/**
 * Returns a high-fidelity SVG icon matching the industry category of the association
 */
export const getAssociationIcon = (name = '') => {
  const n = name.toUpperCase();

  // 1. Packaged Drinking Water
  if (n.includes('WATER') || n.includes('EFFLUENT') || n.includes('BEVERAGE')) {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 2h6v2H9z" fill="currentColor" fillOpacity="0.2" />
        <path d="M10 4v2l-3 4v10a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V10l-3-4V4" />
        <line x1="8" y1="13" x2="16" y2="13" strokeWidth="1.4" />
        <line x1="8" y1="16" x2="16" y2="16" strokeWidth="1.4" />
      </svg>
    );
  }

  // 2. Electronics / Technology / Computer / Mobile
  if (
    n.includes('ELECTRONIC') ||
    n.includes('TECHNICIAN') ||
    n.includes('INFORMATION TECH') ||
    n.includes('CELLPHONE') ||
    n.includes('COMPUTER') ||
    n.includes('DIGITAL')
  ) {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="5" width="14" height="14" rx="2.5" />
        <rect x="9" y="9" width="6" height="6" rx="1" fill="currentColor" fillOpacity="0.2" />
        <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
      </svg>
    );
  }

  // 3. Builders / Civil / Construction / Stone / Crusher
  if (
    n.includes('BUILDER') ||
    n.includes('BUILDING') ||
    n.includes('CIVIL') ||
    n.includes('CRUSHER') ||
    n.includes('QUARY') ||
    n.includes('QUARRY') ||
    n.includes('CERAMIC') ||
    n.includes('REAL ESTATE')
  ) {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 14a8 8 0 0 1 16 0" />
        <path d="M2 14h20a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1a1 1 0 0 1 1-1z" fill="currentColor" fillOpacity="0.2" />
        <path d="M10 6v8M14 6v8" strokeWidth="1.5" />
      </svg>
    );
  }

  // 4. Banian / Jawuli Central / Garments Trade (People Community / Apparel)
  if (n.includes('BANIAN') || n.includes('CENTRAL') || n.includes('EXPORTERS') || n.includes('CONSUMER')) {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="7" r="3" />
        <circle cx="5" cy="9" r="2" />
        <circle cx="19" cy="9" r="2" />
        <path d="M8 19v-2a4 4 0 0 1 8 0v2" />
        <path d="M2 19v-1a3 3 0 0 1 3-3" />
        <path d="M22 19v-1a3 3 0 0 0-3-3" />
      </svg>
    );
  }

  // 5. Agriculture / Rice / Paddy / Grain / Turmeric / Seeds
  if (
    n.includes('DHANIYA') ||
    n.includes('RICE') ||
    n.includes('PADDY') ||
    n.includes('NEL') ||
    n.includes('ARUCI') ||
    n.includes('MANJAL') ||
    n.includes('AGRO') ||
    n.includes('VARUKADALAI')
  ) {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 22s5-3 9-8c4-5 5-11 5-11s-6 1-11 5c-5 4-8 9-8 9z" fill="currentColor" fillOpacity="0.15" />
        <path d="M16 3l5 5M12 7l4 4M8 11l4 4" />
      </svg>
    );
  }

  // 6. Petroleum / Oil / Gas / Fuels
  if (n.includes('PETROLEUM') || n.includes('OIL') || n.includes('NALLENNAI') || n.includes('GINGELLY') || n.includes('INDANE')) {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" fill="currentColor" fillOpacity="0.15" />
        <path d="M12 9v4M12 16h.01" strokeWidth="2" />
      </svg>
    );
  }

  // 7. Jewelry / Gold / Silver / Diamond
  if (n.includes('NAGAI') || n.includes('THANGAM') || n.includes('VELLI') || n.includes('VAIRA') || n.includes('JEWEL')) {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 3h12l4 6-10 12L2 9z" fill="currentColor" fillOpacity="0.15" />
        <path d="M2 9h20M12 21L8 9l2-6M12 21l4-12-2-6" />
      </svg>
    );
  }

  // 8. Transport / Bus / Lorry / Automobiles / Tyres
  if (
    n.includes('BUS') ||
    n.includes('LORRY') ||
    n.includes('TRANSPORT') ||
    n.includes('AUTOMOBILE') ||
    n.includes('TYRE')
  ) {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="2" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    );
  }

  // 9. Steel / Iron / Hardware / Metals
  if (n.includes('STEEL') || n.includes('IRUMBU') || n.includes('FABRICATION') || n.includes('MILLS STORES')) {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" fill="currentColor" fillOpacity="0.15" />
      </svg>
    );
  }

  // 10. Chemicals / Dyes / Bleaching / Pharmacy / Tannery
  if (
    n.includes('CHEMI') ||
    n.includes('DYE') ||
    n.includes('BLEACH') ||
    n.includes('POLYMER') ||
    n.includes('TANNER') ||
    n.includes('LEATHER') ||
    n.includes('ENVIROCARE')
  ) {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 2v7.31L4.2 18.2a2 2 0 0 0 1.7 3h12.2a2 2 0 0 0 1.7-3L14 9.31V2" />
        <line x1="8.5" y1="2" x2="15.5" y2="2" />
        <path d="M7 16h10" strokeWidth="1.5" strokeDasharray="2 1.5" />
      </svg>
    );
  }

  // 11. Printing / Paper / Photography
  if (
    n.includes('PAPER') ||
    n.includes('STATIONERY') ||
    n.includes('PRINT') ||
    n.includes('PHOTO') ||
    n.includes('VIDEO')
  ) {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="6 9 6 2 18 2 18 9" />
        <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" fill="currentColor" fillOpacity="0.15" />
        <rect x="6" y="14" width="12" height="8" />
      </svg>
    );
  }

  // 12. Finance / Chit Funds / Banking
  if (n.includes('FINANCE') || n.includes('CHIT') || n.includes('HIRE PURCHASE')) {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    );
  }

  // 13. Solar / UPS / Battery / Electrical
  if (n.includes('SOLAR') || n.includes('UPS') || n.includes('BATTERY') || n.includes('ELECTRICAL')) {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill="currentColor" fillOpacity="0.15" />
      </svg>
    );
  }

  // Default / Textiles / Thread Spool (e.g. TEXTILE, NOOL, KAITHARI, VISAITHARI, CLOTH, JAWULI, SIZING, WEAVER)
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="2" width="12" height="3" rx="1.5" fill="currentColor" fillOpacity="0.2" />
      <rect x="6" y="19" width="12" height="3" rx="1.5" fill="currentColor" fillOpacity="0.2" />
      <line x1="8" y1="5" x2="8" y2="19" />
      <line x1="16" y1="5" x2="16" y2="19" />
      <path d="M8 8h8M8 12h8M8 16h8" strokeWidth="1.4" strokeDasharray="2 1.5" />
    </svg>
  );
};

