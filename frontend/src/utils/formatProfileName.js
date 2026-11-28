/**
 * Formats a profile name so titles (Mr., Mrs., Dr., etc.) and initials (P.C., K.S., etc.)
 * never split across lines from the name they belong to.
 * Multi-person strings (separated by " & ", ", ", " @ ", or before a new title) only break between people.
 */
export const formatProfileName = (name) => {
  if (!name || typeof name !== 'string') return name;

  return name
    .trim()
    .split(/(\s+&\s+|,\s+|\s+@\s+|\s+(?=(?:Mr|Mrs|Ms|Dr|Er|Prof|Sri|Smt|Thiru)\.))/)
    .map((part) => {
      if (/^(\s+&\s+|,\s+|\s+@\s+|\s+)$/.test(part)) {
        return part;
      }
      return part.trim().replace(/\s+/g, '\u00A0');
    })
    .join('');
};
