
import React from 'react';
import { InstagramIcon, TwitterIcon, FacebookIcon } from './IconComponents';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-900 border-t border-zinc-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-slate-400 text-sm">&copy; {new Date().getFullYear()} Lens Legacy. All Rights Reserved.</p>
          <div className="flex space-x-5">
            <a href="#" className="text-slate-400 hover:text-brand-gold transition-colors"><InstagramIcon className="w-6 h-6" /></a>
            <a href="#" className="text-slate-400 hover:text-brand-gold transition-colors"><TwitterIcon className="w-6 h-6" /></a>
            <a href="#" className="text-slate-400 hover:text-brand-gold transition-colors"><FacebookIcon className="w-6 h-6" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
