import { createContext, useContext, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ToastContext = createContext(null);

export function ToastProvider({ children }) {
  const [message, setMessage] = useState(null);
  const [key, setKey] = useState(0);

  const showToast = useCallback((text) => {
    setMessage(text);
    setKey((k) => k + 1);
    setTimeout(() => setMessage(null), 2000);
  }, []);

  return (
    <ToastContext.Provider value={showToast}>
      {children}
      <ToastLayer message={message} key={key} />
    </ToastContext.Provider>
  );
}

function ToastLayer({ message }) {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="fixed left-1/2 top-20 z-[100] -translate-x-1/2 rounded px-4 py-2 text-sm font-medium text-white shadow-lg"
          style={{ backgroundColor: '#333333' }}
          role="status"
          aria-live="polite"
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToast must be used within ToastProvider');
  return ctx;
}
