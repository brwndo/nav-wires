import { useState, useEffect } from 'react';

/**
 * Simulated countdown: starts at initialMinutes and decrements every 60s (by minute).
 * No live/real data. Returns { days, hours, minutes, formatted }.
 * @param {number} initialMinutes - e.g. 24 * 60 = 1440 for 24h
 */
export function useCountdown(initialMinutes, active = true) {
  const [minutesLeft, setMinutesLeft] = useState(initialMinutes);

  useEffect(() => {
    if (!active) return;
    const id = setInterval(() => {
      setMinutesLeft((m) => Math.max(0, m - 1));
    }, 60 * 1000);
    return () => clearInterval(id);
  }, [active]);

  const days = Math.floor(minutesLeft / (24 * 60));
  const hours = Math.floor((minutesLeft % (24 * 60)) / 60);
  const minutes = minutesLeft % 60;

  const pad = (n) => String(n).padStart(2, '0');
  const formatted = `${pad(days)}d ${pad(hours)}h ${pad(minutes)}m`;

  return { days, hours, minutes, formatted, minutesLeft };
}
