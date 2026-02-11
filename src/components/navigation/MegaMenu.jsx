import { motion, AnimatePresence } from 'framer-motion';
import { useToast } from '../../lib/toast';
import { useCountdown } from '../../hooks/useCountdown';

const PANEL_STYLE = {
  boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
  borderRadius: 8,
  background: '#FFFFFF',
  border: '1px solid #E0E0E0',
};

/**
 * @param {{ open: boolean, onClose: () => void, columns: Array<{ header?: string, links?: Array<{ label: string }>, featured?: { imageLabel: string, title: string, subtitle?: string, ctaLabel?: string, imageW?: number, imageH?: number, countdownMinutes?: number } }, width: number }} props
 */
export default function MegaMenu({ open, onClose, columns, width }) {
  const toast = useToast();
  const countdownMinutes = columns.find((col) => col.featured?.countdownMinutes)?.featured?.countdownMinutes;
  const { formatted: countdownFormatted } = useCountdown(countdownMinutes ?? 0, open && !!countdownMinutes);

  const handleLinkClick = (label) => {
    toast(`Would navigate to ${label}`);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="absolute left-1/2 top-full z-40 -translate-x-1/2 pt-0"
          style={{ width: width ? `${width}px` : 'auto', ...PANEL_STYLE }}
        >
          <div className="flex gap-0" style={{ padding: 32 }}>
            {columns.map((col, i) => (
              <div
                key={i}
                className="flex flex-col overflow-hidden"
                style={{
                  flex: col.featured ? (col.featured.imageW ? `0 0 ${col.featured.imageW}px` : '0 0 280px') : '1 1 0',
                  minWidth: 0,
                  borderLeft: i > 0 && columns[i - 1].links ? '1px solid #E0E0E0' : undefined,
                  paddingLeft: i > 0 ? 24 : 0,
                }}
              >
                {col.header && (
                  <div
                    className="mb-3 text-xs font-bold uppercase tracking-wide"
                    style={{ color: '#666666' }}
                  >
                    {col.header}
                  </div>
                )}
                {col.links && (
                  <ul className="flex list-none flex-col gap-2 p-0">
                    {col.links.map((link, j) => (
                      <li key={j}>
                        <button
                          type="button"
                          className="w-full rounded py-1.5 text-left text-sm transition-colors hover:bg-[#F5F5F5] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#333333]"
                          style={{ color: '#333333' }}
                          onClick={() => handleLinkClick(link.label)}
                        >
                          {link.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
                {col.featured && (
                  <div className="mt-2 flex min-w-0 flex-col">
                    <button
                      type="button"
                      className="flex max-w-full shrink-0 cursor-pointer items-center justify-center rounded transition-transform hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#333333]"
                      style={{ width: col.featured.imageW || 280, height: col.featured.imageH || 180, maxWidth: '100%', background: '#E0E0E0' }}
                      onClick={() => handleLinkClick(col.featured.title)}
                    >
                      <span className="text-xs" style={{ color: '#999999' }}>
                        {col.featured.imageLabel}
                      </span>
                    </button>
                    {col.featured.badgeLabel && (
                      <span
                        className="mt-2 inline-block px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white"
                        style={{ background: '#333333', width: 'fit-content' }}
                      >
                        {col.featured.badgeLabel}
                      </span>
                    )}
                    {col.featured.title && (
                      <span
                        className="mt-2 block font-bold"
                        style={{ color: '#333333', fontSize: col.featured.badgeLabel ? 20 : 16 }}
                      >
                        {col.featured.title}
                      </span>
                    )}
                    {col.featured.subtitle && (
                      <span className="mt-1 block text-sm" style={{ color: '#666666' }}>
                        {col.featured.subtitle}
                      </span>
                    )}
                    {col.featured.countdownMinutes != null && (
                      <span
                        className="mt-2 block font-semibold tabular-nums"
                        style={{ fontSize: 16, color: '#333333' }}
                        aria-live="polite"
                      >
                        {countdownFormatted}
                      </span>
                    )}
                    {col.featured.ctaLabel && (
                      <button
                        type="button"
                        className={`mt-3 w-fit rounded px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#333333] ${
                          col.featured.badgeLabel
                            ? 'bg-[#333333] text-white hover:bg-[#444444]'
                            : 'border border-[#333333] bg-transparent text-[#333333] hover:bg-[#F5F5F5]'
                        }`}
                        onClick={() => handleLinkClick(col.featured.ctaLabel)}
                      >
                        {col.featured.ctaLabel}
                      </button>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
