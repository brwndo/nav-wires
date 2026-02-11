import { motion, AnimatePresence } from 'framer-motion';
import { useToast } from '../../lib/toast';
import { useCountdown } from '../../hooks/useCountdown';
import { optionDNewMenuLinks } from '../../config/optionD';

const PANEL_STYLE = {
  boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
  borderRadius: 8,
  background: '#FFFFFF',
  border: '1px solid #E0E0E0',
};

/** Option D "New" mega menu with simulated 24h countdown (desktop only). */
export default function NewMegaMenu({ open, onClose, isDesktop }) {
  const toast = useToast();
  const { formatted } = useCountdown(24 * 60, isDesktop && open);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="absolute left-1/2 top-full z-40 -translate-x-1/2 pt-0"
          style={{ width: 700, ...PANEL_STYLE }}
        >
          <div className="flex" style={{ padding: 32 }}>
            <div
              className="flex flex-col"
              style={{
                width: 240,
                borderRight: '1px solid #E0E0E0',
                paddingRight: 24,
              }}
            >
              <div
                className="mb-3 text-xs font-bold uppercase tracking-wide"
                style={{ color: '#666666' }}
              >
                LATEST
              </div>
              <ul className="list-none p-0">
                {optionDNewMenuLinks.map((link, i) => (
                  <li key={i}>
                    <button
                      type="button"
                      className="w-full rounded py-1.5 text-left text-sm transition-colors hover:bg-[#F5F5F5] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#333333]"
                      style={{ color: '#333333' }}
                      onClick={() => toast(`Would navigate to ${link.label}`)}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-1 flex-col pl-8">
              <button
                type="button"
                className="flex cursor-pointer items-center justify-center rounded transition-transform hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#333333]"
                style={{ width: 400, height: 240, background: '#E0E0E0' }}
                onClick={() => toast('Would navigate to Evangelion x Streetwear')}
              >
                <span className="text-xs" style={{ color: '#999999' }}>
                  Featured
                </span>
              </button>
              <span
                className="mt-2 inline-block px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white"
                style={{ background: '#333333', width: 'fit-content' }}
              >
                DROPPING FRIDAY
              </span>
              <span className="mt-2 block text-xl font-bold" style={{ color: '#333333' }}>
                Evangelion x Streetwear
              </span>
              <span className="mt-1 block text-sm" style={{ color: '#666666' }}>
                Drops Friday 3PM EST
              </span>
              <span
                className="mt-2 block font-semibold tabular-nums"
                style={{ fontSize: 16, color: '#333333' }}
                aria-live="polite"
              >
                {formatted}
              </span>
              <button
                type="button"
                className="mt-3 w-fit rounded bg-[#333333] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#444444] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#333333]"
                onClick={() => toast('You would be notified when Evangelion x Streetwear drops')}
                aria-label="Get notified when Evangelion x Streetwear drops"
              >
                Notify Me
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
