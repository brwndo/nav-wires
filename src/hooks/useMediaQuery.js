import { useState, useEffect } from 'react';

/**
 * Returns true when viewport width is >= breakpoint (desktop), false otherwise (mobile).
 * @param {string} query - Media query string (e.g. "(min-width: 1024px)")
 * @returns {boolean}
 */
export function useMediaQuery(query) {
  const [matches, setMatches] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    const media = window.matchMedia(query);
    const handler = (e) => setMatches(e.matches);
    media.addEventListener('change', handler);
    setMatches(media.matches);
    return () => media.removeEventListener('change', handler);
  }, [query]);

  return matches;
}

/** Convenience: desktop (≥1024px) */
export function useIsDesktop() {
  return useMediaQuery('(min-width: 1024px)');
}
