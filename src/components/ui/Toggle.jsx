import { motion } from 'framer-motion';

const OPTIONS = [
  { id: 'a', label: 'Option A' },
  { id: 'b', label: 'Option B' },
  { id: 'd', label: 'Option D' },
];

export default function Toggle({ value, onChange }) {
  return (
    <div
      className="fixed bottom-4 right-4 z-50 flex rounded-full border border-[#E0E0E0] bg-white p-1 shadow-[0_2px_8px_rgba(0,0,0,0.06)]"
      role="tablist"
      aria-label="Navigation pattern"
    >
      {OPTIONS.map((opt) => (
        <button
          key={opt.id}
          type="button"
          role="tab"
          aria-selected={value === opt.id}
          aria-label={`Switch to ${opt.label}`}
          onClick={() => onChange(opt.id)}
          className="relative rounded-full px-4 py-2 text-sm font-semibold text-[#333333] transition-colors hover:bg-[#F5F5F5] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#333333] focus-visible:ring-offset-2"
        >
          {value === opt.id && (
            <motion.span
              layoutId="toggle-pill"
              className="absolute inset-0 rounded-full bg-[#E8E8E8]"
              transition={{ type: 'spring', duration: 0.4 }}
            />
          )}
          <span className="relative z-10">{opt.label}</span>
        </button>
      ))}
    </div>
  );
}
