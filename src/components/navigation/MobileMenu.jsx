import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useToast } from '../../lib/toast';

/**
 * Section node: { label: string, children?: SectionNode[] }
 * If no children, it's a leaf link. If children, it's an accordion parent.
 *
 * @param {{ open: boolean, onClose: () => void, sections: SectionNode[], footerLinks?: Array<{ label: string }> }} props
 */
export default function MobileMenu({ open, onClose, sections = [], footerLinks = [] }) {
  const toast = useToast();

  const handleLinkClick = (label) => {
    toast(`Would navigate to ${label}`);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/30"
            aria-hidden
            onClick={onClose}
          />
          <motion.aside
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
            className="fixed left-0 top-0 z-50 flex h-full w-[85vw] max-w-[320px] flex-col bg-white"
            style={{ boxShadow: '4px 0 24px rgba(0,0,0,0.1)' }}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <header className="flex h-14 items-center justify-end border-b border-[#E0E0E0] px-4">
              <button
                type="button"
                onClick={onClose}
                className="flex h-10 w-10 items-center justify-center rounded text-[#333333] hover:bg-[#F5F5F5] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#333333]"
                aria-label="Close navigation menu"
              >
                <span className="text-xl leading-none" aria-hidden>×</span>
              </button>
            </header>
            <nav className="flex-1 overflow-y-auto">
              <ul className="list-none p-0">
                {sections.map((section, i) => (
                  <AccordionNode
                    key={i}
                    node={section}
                    depth={0}
                    onLinkClick={handleLinkClick}
                  />
                ))}
              </ul>
            </nav>
            {footerLinks.length > 0 && (
              <footer className="border-t border-[#E0E0E0] p-6">
                {footerLinks.map((link, i) => (
                  <button
                    key={i}
                    type="button"
                    className="block py-2 text-left text-sm font-medium text-[#333333] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#333333]"
                    onClick={() => handleLinkClick(link.label)}
                  >
                    {link.label}
                  </button>
                ))}
              </footer>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

function AccordionNode({ node, depth, onLinkClick }) {
  const [open, setOpen] = useState(false);
  const hasChildren = node.children && node.children.length > 0;
  const indent = depth * 8;

  if (node.type === 'callout') {
    return (
      <li className="border-t border-[#E0E0E0] pt-4" style={{ marginLeft: 16 + indent }}>
        <span className="block text-[10px] font-bold uppercase tracking-wide text-[#666666]">
          {node.badge}
        </span>
        <span className="mt-1 block text-sm font-semibold text-[#333333]">{node.title}</span>
        <span className="mt-1 block font-semibold tabular-nums text-[#333333]">{node.timerText}</span>
        <button
          type="button"
          className="mt-2 rounded bg-[#333333] px-3 py-1.5 text-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#333333]"
          onClick={() => onLinkClick(node.ctaLabel || 'Notify Me')}
        >
          {node.ctaLabel || 'Notify Me'}
        </button>
      </li>
    );
  }

  if (!hasChildren) {
    return (
      <li>
        <button
          type="button"
          className="w-full rounded py-4 text-left text-base font-semibold text-[#333333] transition-colors active:bg-[#E8E8E8] focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#333333]"
          style={{ paddingLeft: 16 + indent, paddingRight: 16 }}
          onClick={() => onLinkClick(node.label)}
        >
          {node.label}
        </button>
      </li>
    );
  }

  return (
    <li>
      <button
        type="button"
        className="flex w-full items-center justify-between rounded py-4 text-left text-base font-semibold text-[#333333] transition-colors active:bg-[#E8E8E8] focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#333333]"
        style={{ paddingLeft: 16 + indent, paddingRight: 16 }}
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        {node.label}
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="ml-2 inline-block text-[#666666]"
          aria-hidden
        >
          ▼
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.32, 0.72, 0, 1] }}
            className="list-none overflow-hidden p-0"
          >
            {node.children.map((child, i) => (
              <AccordionNode
                key={i}
                node={child}
                depth={depth + 1}
                onLinkClick={onLinkClick}
              />
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  );
}
