import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { OptionContext } from '../../context/OptionContext';
import { useIsDesktop } from '../../hooks/useMediaQuery';
import Toggle from '../ui/Toggle';
import OptionA from './OptionA';
import OptionB from './OptionB';
import OptionD from './OptionD';

const OPTIONS = { a: OptionA, b: OptionB, d: OptionD };

function getOptionFromHash() {
  const hash = window.location.hash.slice(1).toLowerCase();
  if (hash === 'option-a' || hash === 'a') return 'a';
  if (hash === 'option-b' || hash === 'b') return 'b';
  if (hash === 'option-d' || hash === 'd') return 'd';
  return 'a';
}

function syncHash(option) {
  const newHash = `#option-${option}`;
  if (window.location.hash !== newHash) {
    window.history.replaceState(null, '', newHash);
  }
}

export default function NavWrapper({ children }) {
  const location = useLocation();
  const isDesktop = useIsDesktop();
  const [option, setOption] = useState(() => getOptionFromHash());

  useEffect(() => {
    const fromHash = getOptionFromHash();
    if (fromHash !== option) setOption(fromHash);
  }, [location.hash]);

  useEffect(() => {
    const onHashChange = () => setOption(getOptionFromHash());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const handleOptionChange = (next) => {
    setOption(next);
    syncHash(next);
  };

  useEffect(() => {
    syncHash(option);
  }, [option]);

  const OptionComponent = OPTIONS[option] || OptionA;

  return (
    <OptionContext.Provider value={option}>
      <Toggle value={option} onChange={handleOptionChange} />
      <AnimatePresence mode="wait">
        <motion.div
          key={option}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <OptionComponent isDesktop={isDesktop} />
        </motion.div>
      </AnimatePresence>
      {children}
    </OptionContext.Provider>
  );
}
