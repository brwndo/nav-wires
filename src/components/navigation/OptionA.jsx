import { useState, useRef, useEffect } from 'react';
import { useToast } from '../../lib/toast';
import { optionADesktopMenus, optionAMobileSections, optionAFooterLinks } from '../../config/optionA';
import MegaMenu from './MegaMenu';
import MobileMenu from './MobileMenu';
import SearchBar from './SearchBar';
import accountIcon from '../../assets/icons/account.svg';
import shoppingCartIcon from '../../assets/icons/shopping-cart.svg';

const OPEN_DELAY_MS = 150;
const CLOSE_DELAY_MS = 300;

export default function OptionA({ isDesktop }) {
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const openTimerRef = useRef(null);
  const closeTimerRef = useRef(null);
  const toast = useToast();

  const clearTimers = () => {
    if (openTimerRef.current) clearTimeout(openTimerRef.current);
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    openTimerRef.current = null;
    closeTimerRef.current = null;
  };

  const scheduleOpen = (key) => {
    clearTimers();
    closeTimerRef.current = null;
    openTimerRef.current = setTimeout(() => setActiveMenu(key), OPEN_DELAY_MS);
  };

  const scheduleClose = () => {
    clearTimers();
    openTimerRef.current = null;
    closeTimerRef.current = setTimeout(() => setActiveMenu(null), CLOSE_DELAY_MS);
  };

  const handleNavEnter = (key) => () => scheduleOpen(key);
  const handleNavLeave = () => scheduleClose();

  useEffect(() => {
    return clearTimers;
  }, []);

  useEffect(() => {
    if (!isDesktop) {
      clearTimers();
      setActiveMenu(null);
      setMobileOpen(false);
    }
  }, [isDesktop]);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveMenu(null);
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  if (isDesktop) {
    return (
      <header className="relative h-16 border-b border-[#E0E0E0] bg-white">
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4">
          <button
            type="button"
            className="flex h-8 w-[120px] items-center justify-center rounded bg-[#333333] text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#333333]"
            onClick={() => toast('Would navigate to Home')}
            aria-label="Home"
          >
            Logo
          </button>
          <nav className="flex items-center gap-1">
            {['discover', 'series', 'shop'].map((key) => (
              <div
                key={key}
                className="relative"
                onMouseEnter={handleNavEnter(key)}
                onMouseLeave={handleNavLeave}
              >
                <button
                  type="button"
                  className={`rounded px-5 py-6 text-sm font-semibold transition-colors hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-[#333333] ${activeMenu === key ? 'text-black bg-[#E8E8E8]' : 'text-[#333333]'}`}
                  onClick={() => toast(`Would navigate to ${key.charAt(0).toUpperCase() + key.slice(1)}`)}
                  aria-expanded={activeMenu === key}
                  aria-haspopup="true"
                >
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </button>
                <MegaMenu
                  open={activeMenu === key}
                  onClose={() => setActiveMenu(null)}
                  columns={optionADesktopMenus[key].columns}
                  width={optionADesktopMenus[key].width}
                />
              </div>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <SearchBar />
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded hover:bg-[#E8E8E8] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#333333]"
              onClick={() => toast('Would navigate to Account')}
              aria-label="Account"
            >
              <img src={accountIcon} alt="" className="h-5 w-5" aria-hidden />
            </button>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded hover:bg-[#E8E8E8] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#333333]"
              onClick={() => toast('Would navigate to Cart')}
              aria-label="Cart"
            >
              <img src={shoppingCartIcon} alt="" className="h-5 w-5" aria-hidden />
            </button>
          </div>
        </div>
      </header>
    );
  }

  return (
    <>
      <header className="sticky top-0 z-30 flex h-14 items-center justify-between border-b border-[#E0E0E0] bg-white px-4">
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded hover:bg-[#E8E8E8] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#333333]"
          onClick={() => setMobileOpen(true)}
          aria-label="Open navigation menu"
          aria-expanded={mobileOpen}
        >
          <span className="text-xl font-bold text-[#333333]" aria-hidden>☰</span>
        </button>
        <button
          type="button"
          className="flex h-[26px] w-[100px] items-center justify-center rounded bg-[#333333] text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#333333]"
          onClick={() => toast('Would navigate to Home')}
          aria-label="Home"
        >
          Logo
        </button>
        <div className="flex items-center gap-2">
          <SearchBar />
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#333333]"
            onClick={() => toast('Would navigate to Cart')}
            aria-label="Cart"
          >
            <img src={shoppingCartIcon} alt="" className="h-5 w-5" aria-hidden />
          </button>
        </div>
      </header>
      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        sections={optionAMobileSections}
        footerLinks={optionAFooterLinks}
      />
    </>
  );
}
