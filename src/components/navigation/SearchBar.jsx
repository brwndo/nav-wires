import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useToast } from '../../lib/toast';
import searchIcon from '../../assets/icons/search.svg';

export default function SearchBar() {
  const [expanded, setExpanded] = useState(false);
  const inputRef = useRef(null);
  const toast = useToast();

  useEffect(() => {
    if (expanded) inputRef.current?.focus();
  }, [expanded]);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setExpanded(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    toast('Would navigate to Search');
    setExpanded(false);
  };

  return (
    <div className="flex items-center">
      <AnimatePresence mode="wait">
        {!expanded ? (
          <motion.button
            key="icon"
            type="button"
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 'auto' }}
            exit={{ opacity: 0, width: 0 }}
            transition={{ duration: 0.2 }}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded text-[#333333] hover:bg-[#E8E8E8] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#333333]"
            onClick={() => setExpanded(true)}
            aria-label="Open search"
          >
            <img src={searchIcon} alt="" className="h-5 w-5" aria-hidden />
          </motion.button>
        ) : (
          <motion.form
            key="input"
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 200 }}
            exit={{ opacity: 0, width: 0 }}
            transition={{ duration: 0.2 }}
            onSubmit={handleSubmit}
            className="flex shrink-0 items-center overflow-hidden"
          >
            <input
              ref={inputRef}
              type="search"
              placeholder="Search…"
              className="h-9 w-full rounded border border-[#E0E0E0] bg-white px-3 text-sm text-[#333333] placeholder:text-[#999999] focus:border-[#333333] focus:outline-none focus-visible:ring-1 focus-visible:ring-[#333333]"
              onBlur={() => setExpanded(false)}
              aria-label="Search"
            />
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
