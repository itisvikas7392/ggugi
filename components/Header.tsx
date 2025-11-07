
import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
import { CameraIcon, MenuIcon, XIcon } from './IconComponents';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-zinc-900/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center space-x-2 text-2xl font-serif tracking-wider text-slate-100 hover:text-brand-gold transition-colors">
            <CameraIcon className="w-8 h-8"/>
            <span>Lens Legacy</span>
          </a>
          <nav className="hidden md:flex space-x-8">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="text-slate-200 hover:text-brand-gold transition-colors text-lg font-medium">
                {link.label}
              </a>
            ))}
          </nav>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-100 hover:text-brand-gold transition-colors">
              {isOpen ? <XIcon className="w-8 h-8" /> : <MenuIcon className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`md:hidden transition-max-height duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <nav className="px-2 pt-2 pb-4 space-y-2 sm:px-3 bg-zinc-900/90">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:text-brand-gold hover:bg-zinc-800 transition-colors"
              >
                {link.label}
              </a>
            ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
